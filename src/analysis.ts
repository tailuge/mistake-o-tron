import { Chess } from 'chess.js';
import { Puzzle } from './puzzle';

export class Analysis {

  private readonly gameAnalysis

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
      if ((this.gameAnalysis.analysis[i]) && (this.gameAnalysis.analysis[i].judgment)) {
       const best = this.gameAnalysis.analysis[i].best;
       this.gameAnalysis.analysis[i].move = move
       this.gameAnalysis.analysis[i].halfMove = i+1
       this.gameAnalysis.analysis[i].fen = fens[i]
       this.gameAnalysis.analysis[i].best = {from:best.substring(0, 2), to:best.substring(2, 4)}
      }
    })
    var playerColour: string = (this.gameAnalysis.players.white.user.id == player) ? 'w':'b'
    return this.gameAnalysis.analysis = this.gameAnalysis.analysis
      .filter(x => x.judgment)
      .filter(x => x.move.color == playerColour)
      .map(x => new Puzzle(x))
  }
}
