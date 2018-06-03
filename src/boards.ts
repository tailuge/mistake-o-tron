import { h, init } from 'snabbdom';
import { VNode } from 'snabbdom/vnode';
import klass from 'snabbdom/modules/class';
import attributes from 'snabbdom/modules/attributes';
import props from 'snabbdom/modules/props';
import listeners from 'snabbdom/modules/eventlisteners';
import { Puzzle } from './puzzle'

export class Boards {

  patch = init([klass, props, attributes, listeners]);

  vnode: VNode
  private readonly element: Element
  puzzles: Puzzle[] = []

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
    return h('div#chessground-examples', puzzles.map(p => p.render()));
  }
  
}

