import { Chess } from 'chess.js';
import { Chessground }  from 'chessground';
import { Color }  from 'chessground/types';
import { toDests, playOtherSide, toColor } from '../util'
import { VNode } from 'snabbdom/vnode';

export class Puzzle {

  private initialFen: string;
  private movePlayed;
  private bestMove;

  constructor(initialFen: string, movePlayed, bestMove) {
    this.initialFen = initialFen;
    this.movePlayed = movePlayed;
    this.bestMove = bestMove;
  }
  
  run(el) {
    const chess = new Chess(this.initialFen)

    let color:Color = toColor(chess)
    let config = {
      orientation: color,
      turnColor: color,
      fen: this.initialFen,
      movable: {
        color: color,
        free: false,
        dests: toDests(chess)
      }
    }

    const cg = Chessground(el, config);

    cg.set({
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
                { orig: this.movePlayed.from, dest: this.movePlayed.to, brush: 'red' },
                { orig: this.bestMove.from, dest: this.bestMove.to, brush: 'green' }
              ]}
            });
          }
        }
      },
      drawable: { shapes: [
        { orig: this.movePlayed.from, dest: this.movePlayed.to, brush: 'red' }
      ]}
    });

    return cg;
  }

  runUnit = (vnode: VNode) => {
    const el = vnode.elm as HTMLElement;
    el.className = 'cg-board-wrap';
    this.run(el)
  }

}
