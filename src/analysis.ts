import { Chess } from 'chess.js';
import { Puzzle } from './puzzle';

export class Analysis {

  private gameAnalysis

  constructor(gameAnalysis) {
    this.gameAnalysis = gameAnalysis;
  }
  
  puzzles(player: string): Puzzle[] {
    const chess = new Chess()
    var fens : any[] = []
    this.gameAnalysis.moves.split(' ').forEach(x => {
     fens.push(chess.fen())
     chess.move(x)
    })
    let moves = chess.history({verbose: true})
    moves.forEach((move,i) => { 
      if (this.gameAnalysis.analysis[i]) {
       this.gameAnalysis.analysis[i].move = move
       this.gameAnalysis.analysis[i].halfMove = i+1
       this.gameAnalysis.analysis[i].fen = fens[i]
      }
    })
    var playerColour: string = (this.gameAnalysis.players.white.user.id == player) ? 'w':'b'
    return this.gameAnalysis.analysis = this.gameAnalysis.analysis
      .filter( x => x.judgment )
      .filter( x => x.move.color == playerColour)
      .map(x => this.toPuzzle(x))
  }

  toPuzzle(analysis) {
    return new Puzzle(analysis.fen, analysis.move, {from:analysis.best.substring(0, 2), to:analysis.best.substring(2, 4)})
  }
}
