import { h, init } from 'snabbdom';
import { VNode } from 'snabbdom/vnode';
import klass from 'snabbdom/modules/class';
import attributes from 'snabbdom/modules/attributes';
import listeners from 'snabbdom/modules/eventlisteners';
import { Puzzle } from './puzzle'

export class Boards {

  patch = init([klass, attributes, listeners]);

  vnode: VNode
  puzzles: Puzzle[] = []
  element: Element

  constructor(element: Element) {
    this.element = element
  }
  
  setPuzzles(puzzles: Puzzle[]) {
    this.puzzles = puzzles
    this.redraw()
  }
  
  redraw() {
    this.vnode = this.patch(this.vnode || this.element, this.render(this.puzzles));
  }

  render(puzzles: Puzzle[]) {
    let elts = puzzles.map( p => {
      return h('section.blue.merida', [
        h('div.cg-board-wrap', {
          hook: {
            insert: p.runUnit,
            postpatch: p.runUnit
          }
        }),
        h('p', "Puzzle")
      ])
    })
    return h('div#chessground-examples', elts);
  }
  
}

