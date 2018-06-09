import { Chess } from "chess.js"
import { Chessground } from "chessground"
import { Color } from "chessground/types"
import { toDests, toColor } from "./util"
import { VNode } from "snabbdom/vnode"
import { h } from "snabbdom"

export class Puzzle {
  readonly analysis
  private readonly chess
  private readonly config
  private status
  
  constructor(analysis) {
    this.analysis = analysis
    this.chess = new Chess(this.analysis.fen)
    this.config = this.initialiseConfig()
    this.status = ''
  }

  initialiseConfig() {
    let color: Color = toColor(this.chess)
    return {
      orientation: color,
      turnColor: color,
      fen: this.analysis.fen,
      movable: {
        color: color,
        free: false,
        dests: toDests(this.chess)
      }
    }
  }

  pathFromStatus(path) {
    return (this.status == '') ? path : path + "." +this.status
  }
  
  render() {
    
    return h(this.pathFromStatus("section.blue.merida"), [
      h("div.cg-board-wrap", {
        hook: {
          insert: this.runUnit,
          postpatch: this.runUnit
        }
      }),
      h(
        "p",
        h(
          "a",
          {
            props: {
              href: this.url(this.analysis),
              target: "_blank"
            }
          },
          this.analysis.judgment.name
        )
      )
    ])
  }

  url(analysis) {
    const chess = new Chess(analysis.fen)
    let color: Color = toColor(chess)
    return `https://lichess.org/${analysis.id}/${color}#${analysis.halfMove - 1}`
  }

  run(el) {
    const cg = Chessground(el, this.config)
    this.originalMove(cg)
    cg.set({
      movable: {
        events: {
          after: (orig, dest) => {
            this.moveAndResult(cg, orig, dest)
          }
        }
      },
      events: {
        select: ({}) => {
          this.originalMove(cg)
        }
      }
    })

    return cg
  }

  originalMove(cg) {
    cg.set({
      drawable: {
        shapes: [this.arrow(this.analysis.move, "red")]
      }
    })
  }

  moveAndResult(cg, orig, dest) {
    this.chess.move({ from: orig, to: dest })
    cg.set({
      turnColor: toColor(this.chess),
      movable: {
        color: toColor(this.chess),
        dests: toDests(this.chess)
      },
      drawable: {
        shapes: [
          { orig: orig, dest: dest, brush: "yellow" },
          this.arrow(this.analysis.move, "red"),
          this.arrow(this.analysis.best, "green")
        ]
      }
    })
  }

  runUnit = (vnode: VNode) => {
    const el = vnode.elm as HTMLElement
    el.className = "cg-board-wrap"
    this.run(el)
  }

  arrow(move, colour) {
    return { orig: move.from, dest: move.to, brush: colour }
  }
}
