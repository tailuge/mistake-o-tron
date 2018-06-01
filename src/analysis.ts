import { Chess } from 'chess.js';
import { Puzzle } from './puzzle';

export class Analysis {

  private gameAnalysis

  constructor(gameAnalysis) {
    this.gameAnalysis = gameAnalysis;
    console.log(gameAnalysis)
//    this.gameAnalysis = this.example()[0];
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
     this.gameAnalysis.analysis[i].move = move
     this.gameAnalysis.analysis[i].halfMove = i+1
     this.gameAnalysis.analysis[i].fen = fens[i]
    })
    var playerColour: string = (this.gameAnalysis.players.white.user.id == player) ? 'w':'b'
    this.gameAnalysis.analysis = this.gameAnalysis.analysis.filter( x => x.judgment ).filter( x => x.move.color == playerColour)

       
    console.log(this.gameAnalysis.analysis)
    
    return this.gameAnalysis.analysis.map(x => this.toPuzzle(x))
    
//    return [ new Puzzle('2r2rk1/4bp1p/pp2p1p1/4P3/4bP2/PqN1B2Q/1P3RPP/2R3K1 w - - 1 23',[],[]),
//             new Puzzle('3r2k1/pp1P1pp1/2p1p2p/8/q1P2Q1P/8/P4PP1/3R2K1 b - - 0 26',[],[])]
  }

  toPuzzle(analysis) {
    return new Puzzle(analysis.fen, analysis.move, {from:analysis.best.substring(0, 2), to:analysis.best.substring(2, 4)})
  }
  
  example() {
  return [{
  "id": "LU6oDId7",
  "rated": false,
  "variant": "standard",
  "players": {
   "white": {
    "user": {
     "id": "copperhead",
     "name": "Copperhead"
    },
    "rating": 1614,
    "analysis": {
     "inaccuracy": 4,
     "mistake": 1,
     "blunder": 1,
     "acpl": 37
    }
   },
   "black": {
    "user": {
     "id": "tailuge",
     "name": "tailuge"
    },
    "rating": 1611,
    "analysis": {
     "inaccuracy": 5,
     "mistake": 3,
     "blunder": 1,
     "acpl": 54
    }
   }
  },
  "winner": "white",
  "opening": {
   "eco": "D10",
   "name": "Slav Defense #2",
   "ply": 5
  },
  "moves": "d4 c6 c4 d5 Nc3 Bf5 Bf4 e6 e3 Bd6 Bg3 Bxg3 hxg3 Nf6 Be2 Ne4 Nf3 Nxc3 bxc3 Nd7 cxd5 exd5 Nh4 Be6 Bd3 Nf6 Qc2 Qa5 Ke2 Ne4 Rhc1 O-O-O Bxe4 dxe4 Qxe4 Bc4+ Kd2 g6 Nf3 f5 Qc2 Bd5 Rcb1 Be4 Qb3 Bxb1 Rxb1 b6 Qe6+ Kb8 Qe5+ Qxe5 Nxe5 c5 Nc6+ Kc7 Nxd8 Rxd8 a4 cxd4 cxd4 Rd5 Rb5 Rxb5 axb5 a6 bxa6 Kb8 Kc3",
  "analysis": [
   {
    "eval": 8
   },
   {
    "eval": 21
   },
   {
    "eval": 15
   },
   {
    "eval": 47
   },
   {
    "eval": 2
   },
   {
    "eval": 90,
    "best": "g8f6",
    "variation": "Nf6 cxd5 cxd5 Nf3 Nc6 Bf4 Nh5 Bd2 Nf6 e3",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Nf6."
    }
   },
   {
    "eval": 28,
    "best": "d1b3",
    "variation": "Qb3 Qb6 Qxb6 axb6 cxd5 Nf6 dxc6 Nxc6 e3 Nb4",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Qb3."
    }
   },
   {
    "eval": 25
   },
   {
    "eval": 12
   },
   {
    "eval": 38
   },
   {
    "eval": 10
   },
   {
    "eval": 25
   },
   {
    "eval": 24
   },
   {
    "eval": 23
   },
   {
    "eval": 4
   },
   {
    "eval": 54,
    "best": "d8b6",
    "variation": "Qb6 b3 Qb4 Qd2 O-O f3 h6 g4 Bg6 Nh3 dxc4 bxc4 Nbd7 Kf1",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Qb6."
    }
   },
   {
    "eval": 20
   },
   {
    "eval": 23
   },
   {
    "eval": 20
   },
   {
    "eval": 55
   },
   {
    "eval": 35
   },
   {
    "eval": 41
   },
   {
    "eval": 32
   },
   {
    "eval": 42
   },
   {
    "eval": 0
   },
   {
    "eval": 52,
    "best": "g7g6",
    "variation": "g6 Nf3 O-O Kf1 Re8 Rh4 b6 g4 Nf6 Ne5 Nd7 Nf3",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was g6."
    }
   },
   {
    "eval": 15
   },
   {
    "eval": 50
   },
   {
    "eval": 0,
    "best": "e1g1",
    "variation": "O-O",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was O-O."
    }
   },
   {
    "eval": 10
   },
   {
    "eval": -6
   },
   {
    "eval": 96,
    "best": "e4d6",
    "variation": "Nd6 Nf3 Rc8 a4 g6 Nd2 O-O Kf1 Qd8 c4 c5 cxd5 cxd4 Qb2",
    "judgment": {
     "name": "Mistake",
     "comment": "Mistake. Best move was Nd6."
    }
   },
   {
    "eval": 50
   },
   {
    "eval": 41
   },
   {
    "eval": 54
   },
   {
    "eval": 53
   },
   {
    "eval": -15,
    "best": "e2e1",
    "variation": "Ke1 Kb8 Nf5 Rhg8 f3 Ka8 Kf2 g6 Nh6 Rge8 Qf4 f5 Kg1 a6",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Ke1."
    }
   },
   {
    "eval": 0
   },
   {
    "eval": -35
   },
   {
    "eval": 55,
    "best": "h8e8",
    "variation": "Rhe8",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Rhe8."
    }
   },
   {
    "eval": 31
   },
   {
    "eval": 71
   },
   {
    "eval": -48,
    "best": "d2e1",
    "variation": "Ke1 c5 Kf1 Qa6+ Kg1 Bxf3 gxf3 h5 Kg2 h4 Rh1 hxg3 fxg3 Qe6",
    "judgment": {
     "name": "Mistake",
     "comment": "Mistake. Best move was Ke1."
    }
   },
   {
    "eval": -36
   },
   {
    "eval": -45
   },
   {
    "eval": -35
   },
   {
    "eval": -46
   },
   {
    "eval": 20,
    "best": "d8d7",
    "variation": "Rd7 a4 Re8 Ke1 Rc7 Kf1 c5 c4 cxd4 exd4 Qb6 Qc2 Qc6 Ne5",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Rd7."
    }
   },
   {
    "eval": -43,
    "best": "d2e2",
    "variation": "Ke2 Rhe8 Kf1 Kb8 a4 Kb7 Kg1 Ka8 Rc1 Qa6 Ne5 Qb7 Rb1 Rb8",
    "judgment": {
     "name": "Inaccuracy",
     "comment": "Inaccuracy. Best move was Ke2."
    }
   },
   {
    "eval": -46
   },
   {
    "eval": -48
   },
   {
    "eval": -43
   },
   {
    "eval": -43
   },
   {
    "eval": 176,
    "best": "d8c8",
    "variation": "Rc8 Rh1 Kc7 a4 Rce8 c4 Re6 a5 bxa5 Ra1 Ra8 Rxa5 Kb6 Ra1",
    "judgment": {
     "name": "Mistake",
     "comment": "Mistake. Best move was Rc8."
    }
   },
   {
    "eval": 169
   },
   {
    "eval": 174
   },
   {
    "eval": 177
   },
   {
    "eval": 176
   },
   {
    "eval": 161
   },
   {
    "eval": 177
   },
   {
    "eval": 145
   },
   {
    "eval": 153
   },
   {
    "eval": 148
   },
   {
    "eval": 314,
    "best": "d5d8",
    "variation": "Rd8 Rb1 Kd6 f3 Rd7 Kd3 Rf7 a5 bxa5 Rb5 Kc6 Rxa5 Kb6 Ra1",
    "judgment": {
     "name": "Mistake",
     "comment": "Mistake. Best move was Rd8."
    }
   },
   {
    "eval": 268
   },
   {
    "eval": 1391,
    "best": "c7d6",
    "variation": "Kd6 Kc3",
    "judgment": {
     "name": "Blunder",
     "comment": "Blunder. Best move was Kd6."
    }
   },
   {
    "eval": 1367
   },
   {
    "eval": 1322
   },
   {
    "eval": 557,
    "best": "d4d5",
    "variation": "d5 g5 d6 f4 exf4 gxf4 gxf4 h5 a7+ Kxa7 d7 Kb7 d8=Q h4",
    "judgment": {
     "name": "Blunder",
     "comment": "Blunder. Best move was d5."
    }
   }
  ],
  "clock": {
   "initial": 300,
   "increment": 0,
   "totalTime": 300
  }
 }];
 }
}
