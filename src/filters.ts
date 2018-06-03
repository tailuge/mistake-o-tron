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

export function phase(x:string) {
  return (p: Puzzle) => {
    if (x === 'Any') return true
    if (x == 'Opening') {
      return p.getAnalysis().halfMove < 16
    }
    if (x === 'Endgame') {
      const fen = p.getAnalysis().fen
      const pieces = fen.replace(/ .*$/,'').replace(/[0-9 pP-]/g,'')
      return pieces.length <= 7 + 6
    }
    return true
  }
}

export function timecontrol(x:string) {
  return (p: Puzzle) => {
    if (x === '') return true
    return p.getAnalysis().speed === x
  }
}
