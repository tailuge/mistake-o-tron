import { Chess } from 'chess.js';
import { Chessground }  from 'chessground';
import { Color }  from 'chessground/types';
import { toDests, toColor } from './util'
import { VNode } from 'snabbdom/vnode';

export class Puzzle {

  private analysis

  constructor(analysis) {
    this.analysis = analysis
  }

  run(el) {
    const chess = new Chess(this.analysis.fen)

    let color:Color = toColor(chess)
    let config = {
      orientation: color,
      turnColor: color,
      fen: this.analysis.fen,
      movable: {
        color: color,
        free: false,
        dests: toDests(chess)
      }
    }

    const cg = Chessground(el, config);

    cg.set({
      drawable: { shapes: [
        this.arrow(this.analysis.move,'red')
      ]},
      movable: {
        events: {
          after: (orig, dest) => {
            chess.move({from: orig, to: dest});
            cg.set({
              turnColor: toColor(chess),
              movable: {
                color: toColor(chess),
                dests: toDests(chess)
              },
              drawable: { shapes: [
                { orig: orig, dest: dest, brush: 'yellow' },
                this.arrow(this.analysis.move,'red'),
                this.arrow(this.analysis.best,'green')
              ]}
            });
          }
        }
      },
      events: {
        select: ({}) => {
          cg.set({
            drawable: { shapes: [
              this.arrow(this.analysis.move,'red')
            ]}
          })
        }
      }
    });

    return cg;
  }

  runUnit = (vnode: VNode) => {
    const el = vnode.elm as HTMLElement;
    el.className = 'cg-board-wrap';
    this.run(el)
  }

  arrow(move, colour) {
    return { orig: move.from, dest: move.to, brush: colour }
  }
}
