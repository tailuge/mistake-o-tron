import { h, init } from 'snabbdom';
import { VNode } from 'snabbdom/vnode';
import klass from 'snabbdom/modules/class';
import attributes from 'snabbdom/modules/attributes';
import listeners from 'snabbdom/modules/eventlisteners';
import * as page from 'page'
import { Puzzle } from './puzzle'
import { Analysis } from './analysis'
export { LichessApi } from './lichessApi'

export function run(element: Element) {

  const patch = init([klass, attributes, listeners]);

  let vnode: VNode;

  function redraw() {
    vnode = patch(vnode || element, render());
  }

  let puzzles = (new Analysis({})).puzzles("tailuge")

  function render() {
    return view(puzzles)
  }
  
  function view(puzzles: Puzzle[]) {
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

  page({ click: false, popstate: false, dispatch: false, hashbang: true });
  page('/:id', () => {
    redraw();
  });
  page(location.hash.slice(2) || '/0');
  
 
}

