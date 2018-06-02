import { Chess } from 'chess.js';
import { Puzzle } from './puzzle';
import { toColor } from './util'

export function colour(x:string) {
  return (p: Puzzle) => {
    const chess = new Chess(p.getAnalysis().fen)
    if (x === '') return true
    return toColor(chess) === x
  }
}

export function severity(x:string) {
  return (p: Puzzle) => {
    if (x === '') return true
    return p.getAnalysis().judgment.name === x
  }
}
