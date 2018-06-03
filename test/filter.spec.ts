import 'mocha';
import { expect } from 'chai';
import { Analysis } from '../src/analysis';
import { Puzzle } from '../src/puzzle';
import { colour, severity, phase, timecontrol } from '../src/filters';

const games = [
  {"id":"kiq0tzlD","rated":false,"variant":"standard","speed":"blitz","perf":"blitz","createdAt":1527777666834,"lastMoveAt":1527778119646,"status":"resign",
  "players":{"white":{"user":{"id":"tailuge","name":"tailuge"},"rating":1611, "analysis":{"inaccuracy":4,"mistake":2,"blunder":3,"acpl":92}},"black":{"user":{"id":"vasif00","name":"vasif00"},"rating":1762, "analysis":{"inaccuracy":2,"mistake":1,"blunder":5,"acpl":138}}},"winner":"white",
  "opening":{"eco":"C30","name":"King's Gambit Declined, Miles Defense","ply":6},
  "moves":"e4 e5 f4 Nc6 Nf3 f5 d3 d6 Be2 Nf6 O-O Be7 fxe5 dxe5 exf5 O-O Nc3 Bxf5 Nxe5 Nxe5 Rxf5 Ng6 Bh5 Nh4 Rf1 g6 Be2 Qd4+ Kh1 c6 Bh6 Rfe8 Ne4 Nxe4 dxe4 Qxe4 Bf3 Nxf3 Rxf3 Rad8 Qf1 Qd5 Re1 Qb5 c4 Qxb2 Rxe7",
  "analysis":[{"eval":3},{"eval":37},{"eval":-61,"best":"g1f3","variation":"Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Nf3."}},{"eval":0,"best":"e5f4","variation":"exf4 Nf3 d6 d4 g5 h4 g4 Ng1 Bh6 Nc3","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was exf4."}},{"eval":11},{"eval":48},{"eval":5},{"eval":8},{"eval":24},{"eval":25},{"eval":17},{"eval":27},{"eval":-52,"best":"b1c3","variation":"Nc3","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Nc3."}},{"eval":-46},{"eval":-39},{"eval":38,"best":"c8f5","variation":"Bxf5 Kh1 Qd5 Nc3 Qd7 Be3 O-O-O Nd2 Rhf8 Bf3 Nd4 Bg1 Kb8 Nc4","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Bxf5."}},{"eval":-40,"best":"g1h1","variation":"Kh1 e4","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Kh1."}},{"eval":-48},{"eval":-352,"best":"g1h1","variation":"Kh1 Qd7 a3 Bc5 b4 Bd4 Bd2 a6 Qb1 h6 Nh4 Bh7 Nf3 Kh8","judgment":{"name":"Blunder","comment":"Blunder. Best move was Kh1."}},{"eval":-342},{"eval":-366},{"eval":138,"best":"d8d4","variation":"Qd4+","judgment":{"name":"Blunder","comment":"Blunder. Best move was Qd4+."}},{"eval":-129,"best":"d3d4","variation":"d4 Qd7 Qd3 Kh8 Bg5 c6 Raf1 Rad8 Rd1 Rde8 a3 Bd8 Bxf6 Rxf6","judgment":{"name":"Mistake","comment":"Mistake. Best move was d4."}},{"eval":-116},{"eval":-343,"best":"f5f6","variation":"Rxf6","judgment":{"name":"Mistake","comment":"Mistake. Best move was Rxf6."}},{"eval":62,"best":"d8d4","variation":"Qd4+ Kh1 Nxh5 Bd2 Rxf1+ Qxf1 Rf8 Qe2 Qf2 Be3 Qxe2 Nxe2 Nf6 Rf1","judgment":{"name":"Blunder","comment":"Blunder. Best move was Qd4+."}},{"eval":24},{"eval":42},{"eval":17},{"eval":533,"best":"f6g4","variation":"Ng4 Bxg4 Qxg4 Rg1 Qxd1 Nxd1 Rae8 Bh6 Rf7 Nc3 Nf5 Bd2 Bb4 Rgf1","judgment":{"name":"Blunder","comment":"Blunder. Best move was Ng4."}},{"eval":130,"best":"f1f4","variation":"Rf4 Qd7 Rxh4 Nd5 Re4 Nf6 Rf4 Rae8 Rf1 Bb4 Bh6 Rf7 Bf3 Bf8","judgment":{"name":"Blunder","comment":"Blunder. Best move was Rf4."}},{"eval":533,"best":"f6g4","variation":"Ng4 Rxf8+ Bxf8 Bxg4 Bxh6 g3 Nf5 Bxf5 gxf5 Qh5 Qf6 Re1 Rf8 Re8","judgment":{"name":"Blunder","comment":"Blunder. Best move was Ng4."}},{"eval":28,"best":"f1f4","variation":"Rf4","judgment":{"name":"Blunder","comment":"Blunder. Best move was Rf4."}},{"eval":41},{"eval":55},{"eval":61},{"eval":-8,"best":"f1f2","variation":"Rf2 Nf5 Bf4 Bh4 Bd3 Qd4 Rf1 Ne3 Bxe3 Rxe3 Bxg6 Qxd1 Bf7+ Kg7","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Rf2."}},{"eval":-17},{"eval":-37},{"eval":-8},{"eval":-8},{"eval":-8},{"eval":-7},{"eval":143,"best":"e7c5","variation":"Bc5 h3 Rxe1 Qxe1 Qd1 Rf1 Qxe1 Rxe1 Rd5 g4 Kf7 Bf4 Bd6 Be3","judgment":{"name":"Mistake","comment":"Mistake. Best move was Bc5."}},{"eval":119},{"mate":11,"best":"b5h5","variation":"Qh5 Rxe7 Qxh6 Rxb7 Rd2 h3 Rde2 Rb8 Re4 Rxe8+ Rxe8 Rf7 Re1 Qxe1","judgment":{"name":"Blunder","comment":"Checkmate is now unavoidable. Best move was Qh5."}},{"mate":10}],"clock":{"initial":300,"increment":0,"totalTime":300}},
  {"id":"mmQfcCGu","rated":false,"variant":"standard","speed":"rapid","perf":"blitz","createdAt":1527758114503,"lastMoveAt":1527758668228,"status":"outoftime",
  "players":{"white":{"user":{"id":"wearykahn","name":"Wearykahn"},"rating":1555, "analysis":{"inaccuracy":6,"mistake":5,"blunder":2,"acpl":53}},"black":{"user":{"id":"tailuge","name":"tailuge"},"rating":1611,"analysis":{"inaccuracy":7,"mistake":8,"blunder":2,"acpl":65}}},"winner":"white",
  "opening":{"eco":"B13","name":"Caro-Kann Defense: Exchange Variation","ply":5},
  "moves":"e4 c6 d4 d5 exd5 Bf5 dxc6 Nxc6 c3 e6 Bb5 a6 Bxc6+ bxc6 b4 Nf6 Bb2 Nd5 Nf3 Bd6 Nbd2 Bd3 Nb3 Bc4 Na5 Bb5 a4 Nxb4 axb5 cxb5 O-O Nd5 Nb7 Qd7 Nxd6+ Qxd6 Qd2 Qf4 Qxf4 Nxf4 Rfe1 O-O Ne5 f6 Nd7 Rfd8 Nc5 Rd6 g3 Ng6 Rxe6 Rxe6 Nxe6 Ne7 Nc5 a5 Nb3 a4 Nc5 Nc6 Ba3 Na5 Kf1 Nc4 Ke2 Re8+ Kd3 Nxa3 Rxa3 Re1 Ra2 Rd1+ Ke2 Rb1 h4 h5 Nd3 Kf7 Nb4 g5 hxg5 fxg5 Kf3 g4+ Kg2 Ke6 Re2+ Kd6 Re5 Rb3 Rc5",
  "analysis":[{"eval":3},{"eval":27},{"eval":29},{"eval":31},{"eval":27},{"eval":94,"best":"c6d5","variation":"cxd5 Bd3 Nc6 c3 e5 dxe5 Nxe5 Qe2 Qe7 Be3","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was cxd5."}},{"eval":95},{"eval":87},{"eval":103},{"eval":112},{"eval":35,"best":"g1f3","variation":"Nf3 Nf6","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Nf3."}},{"eval":99,"best":"d8d5","variation":"Qd5 Bf1 e5 Nf3 exd4 cxd4 Bxb1 Rxb1 Bb4+ Bd2 Bxd2+ Qxd2 Nf6 Be2","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Qd5."}},{"eval":93},{"eval":80},{"eval":-14,"best":"g1f3","variation":"Nf3 Nf6","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Nf3."}},{"eval":-15},{"eval":-39},{"eval":-2},{"eval":-27},{"eval":0},{"eval":-50,"best":"e1g1","variation":"O-O a5 a3 axb4 axb4 Rxa1 Bxa1 O-O Re1 Nf4 Nbd2 Qf6 Nc4 Qg6","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was O-O."}},{"eval":-25},{"eval":-116,"best":"f3e5","variation":"Ne5 Bxe5 Qf3 Bxd4 Qxd3 Bf6 Ne4 O-O O-O a5 Rab1 axb4 cxb4 Bxb2","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Ne5."}},{"eval":106,"best":"d5f4","variation":"Nf4 Rg1 Bb5 Nc1 a5 Qc2 axb4 c4 Ba4 Nb3 Qf6 Kf1 O-O Rd1","judgment":{"name":"Mistake","comment":"Mistake. Best move was Nf4."}},{"eval":122},{"eval":391,"best":"d5b6","variation":"Nb6 Nxc4 Nxc4 Qb3 Nxb2 Qxb2 O-O a4 Qc7 O-O Rfb8 Rfc1 c5 dxc5","judgment":{"name":"Mistake","comment":"Mistake. Best move was Nb6."}},{"eval":377},{"eval":637,"best":"d8c7","variation":"Qc7 axb5 cxb5 O-O O-O Qd3 h6 Nb3 Nb6 Bc1 Rfc8 Nc5 a5 Qxb5","judgment":{"name":"Mistake","comment":"Mistake. Best move was Qc7."}},{"eval":609},{"eval":757,"best":"b4d5","variation":"Nd5 Nb7 Qc7 Nxd6+ Qxd6 O-O cxb5 c4 Nb4 Bc3 a5 Qb1 O-O Rxa5","judgment":{"name":"Mistake","comment":"Mistake. Best move was Nd5."}},{"eval":606,"best":"a5b7","variation":"Nb7 Qb6 Nxd6+ Qxd6 Ba3 Qf4 Bxb4 Qe4+ Qe2 Qxe2+ Kxe2 h6 Nd2 f5","judgment":{"name":"Mistake","comment":"Mistake. Best move was Nb7."}},{"eval":607},{"eval":599},{"eval":599},{"eval":600},{"eval":599},{"eval":351,"best":"c3c4","variation":"c4","judgment":{"name":"Mistake","comment":"Mistake. Best move was c4."}},{"eval":360},{"eval":349},{"eval":331},{"eval":298},{"eval":299},{"eval":270},{"eval":322,"best":"a6a5","variation":"a5","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was a5."}},{"eval":332},{"eval":397,"best":"f8e8","variation":"Rfe8 Nc5 a5 g3 Nd5 Rxe6 Rxe6 Nxe6 a4 Kg2 g5 Nc5 g4 Kf1","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Rfe8."}},{"eval":386},{"eval":401},{"eval":379},{"eval":531,"best":"f4d5","variation":"Nd5","judgment":{"name":"Mistake","comment":"Mistake. Best move was Nd5."}},{"eval":520},{"eval":528},{"eval":521},{"eval":525},{"eval":507},{"eval":496},{"eval":395,"best":"c5b7","variation":"Nb7 Ra7 Nxa5 Nd5 Kf1 Nb6 Nb3 Rxa1+ Bxa1 Kf7 Nc5 Ke7 Ke2 Nd7","judgment":{"name":"Mistake","comment":"Mistake. Best move was Nb7."}},{"eval":420},{"eval":401},{"eval":483,"best":"e7d5","variation":"Nd5 Kf1 Kf7 Ke2 a3 Rxa3 Rxa3 Bxa3 Nxc3+ Kd3 Nd5 Ne4 Ke6 Nc3","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Nd5."}},{"eval":440},{"eval":439},{"eval":434},{"eval":431},{"eval":411},{"eval":485,"best":"g8f7","variation":"Kf7 Kd3","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Kf7."}},{"eval":469},{"eval":603,"best":"f6f5","variation":"f5 Bc1 a3 Nb3 Ra8 d5 a2 Nd4 Nd6 Bf4 Ne4 f3 Nf6 d6","judgment":{"name":"Mistake","comment":"Mistake. Best move was f5."}},{"eval":596},{"eval":597},{"eval":564},{"eval":605},{"eval":590},{"eval":944,"best":"d1c1","variation":"Rc1 Kd2 Rh1 h4 g5 hxg5 Rf1 Nd3 fxg5 Rb2 a3 Ra2 h5 d5","judgment":{"name":"Blunder","comment":"Blunder. Best move was Rc1."}},{"eval":590,"best":"d4d5","variation":"d5 b4 d6 bxc3 d7 Rb8 Ne6 Kf7 d8=Q Rxd8 Nxd8+ Ke7 Nc6+ Kd6","judgment":{"name":"Blunder","comment":"Blunder. Best move was d5."}},{"eval":954,"best":"g8f7","variation":"Kf7 d5 b4 Nxa4 Rb3 cxb4 Ke7 Nc5 Rxb4 Ra6 Rd4 Re6+ Kd8 d6","judgment":{"name":"Blunder","comment":"Blunder. Best move was Kf7."}},{"eval":558,"best":"d4d5","variation":"d5 b4 d6 bxc3 d7 Rb8 Ne6 Kf7 d8=Q Rxd8 Nxd8+ Ke7 Nc6+ Kd6","judgment":{"name":"Blunder","comment":"Blunder. Best move was d5."}},{"eval":536},{"eval":425,"best":"e2d2","variation":"Kd2 Rh1 Rb2 g5 Rxb5 gxh4 gxh4 Rxh4 Ra5 Rh1 Rxa4 h4 Ra7+ Kg6","judgment":{"name":"Mistake","comment":"Mistake. Best move was Kd2."}},{"eval":415},{"eval":334,"best":"b4d5","variation":"Nd5 Ke6 c4 bxc4 Ne3 c3 d5+ Kd7 Rxa4 Rb2+ Kf3 Rd2 Ra7+ Kd8","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Nd5."}},{"eval":381},{"eval":342},{"eval":492,"best":"b1b3","variation":"Rb3","judgment":{"name":"Mistake","comment":"Mistake. Best move was Rb3."}},{"eval":345,"best":"f3e4","variation":"Ke4 Rc1 Nd5 Rh1 Ne3 Rh2 Kd5 h4 Nxg4 Rh3 gxh4 Rxc3 Ne3 Kf6","judgment":{"name":"Mistake","comment":"Mistake. Best move was Ke4."}},{"eval":509,"best":"b1b3","variation":"Rb3 Nd5","judgment":{"name":"Mistake","comment":"Mistake. Best move was Rb3."}},{"eval":472},{"eval":536,"best":"e6f7","variation":"Kf7 Re5 Rb3 Rf5+ Kg6 Rxb5 Rxc3 Nd5 Rc4 Nf4+ Kf7 Rb7+ Kf6 Nxh5+","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Kf7."}},{"eval":528},{"eval":507},{"eval":452,"best":"e5d5","variation":"Rd5+ Ke6 Rxh5 Rxc3 Rxb5 Rb3 Re5+ Kd7 Nd5 Kc6 Ne3 Kb7 Nc4 Rd3","judgment":{"name":"Inaccuracy","comment":"Inaccuracy. Best move was Rd5+."}}],"clock":{"initial":300,"increment":0,"totalTime":300}}]

const player = "tailuge"

const whitePuzzles = (new Analysis(games[0])).puzzles(player)
const blackPuzzles = (new Analysis(games[1])).puzzles(player)

describe("Filter colour", () => {
  it("Should keep only white puzzles", () => {
    expect(whitePuzzles.filter(colour('white')).length).to.equal(9)
    expect(blackPuzzles.filter(colour('white')).length).to.equal(0)
  });
  it("Should keep only black puzzles", () => {
    expect(whitePuzzles.filter(colour('black')).length).to.equal(0)
    expect(blackPuzzles.filter(colour('black')).length).to.equal(17)
  });
  it("Should keep all puzzles", () => {
    expect(whitePuzzles.filter(colour('')).length).to.equal(9)
    expect(blackPuzzles.filter(colour('')).length).to.equal(17)
  });
});

describe("Filter severity", () => {
  it("Should keep only Blunders", () => {
    expect(blackPuzzles.filter(severity('Blunder')).length).to.equal(2)
  });
  it("Should keep only Mistakes", () => {
    expect(blackPuzzles.filter(severity('Mistake')).length).to.equal(8)
  });
  it("Should keep only Inaccuracy", () => {
    expect(blackPuzzles.filter(severity('Inaccuracy')).length).to.equal(7)
  });
  it("Should keep all puzzles", () => {
    expect(blackPuzzles.filter(severity('')).length).to.equal(17)
  });
});

describe("Filter phase", () => {
  it("recognises endgame", () => {
    expect(phase('Endgame')(new Puzzle({fen:"2r3k1/4pp2/p2p2pp/8/2P1P3/2bn1PN1/P5PP/7K w - - 0 28", halfMove: 28}))).to.be.true
    expect(phase('Endgame')(new Puzzle({fen:"rn1qkb1r/pp3ppB/2p1pn1p/7P/3P4/5NN1/PPP2PP1/R1BQK2R b KQkq - 0 10", halfMove: 28}))).to.be.false
  });
  it("recognises opening", () => {
    expect(phase('Opening')(new Puzzle({halfMove: 10}))).to.be.true
    expect(phase('Opening')(new Puzzle({halfMove: 28}))).to.be.false
  });
  it("recognises any", () => {
    expect(phase('')(new Puzzle({fen:"2r3k1/4pp2/p2p2pp/8/2P1P3/2bn1PN1/P5PP/7K w - - 0 28", halfMove: 28}))).to.be.true
    expect(phase('')(new Puzzle({halfMove: 10}))).to.be.true
    expect(phase('')(new Puzzle({halfMove: 28}))).to.be.true
  });
  it("recognises middlegame", () => {
    expect(phase('Middlegame')(new Puzzle({fen:"rn1qkb1r/pp3ppB/2p1pn1p/7P/3P4/5NN1/PPP2PP1/R1BQK2R b KQkq - 0 28", halfMove: 28}))).to.be.true
    expect(phase('Middlegame')(new Puzzle({fen:"rn1qkb1r/pp3ppB/2p1pn1p/7P/3P4/5NN1/PPP2PP1/R1BQK2R b KQkq - 0 10", halfMove: 10}))).to.be.false
  });
});

describe("Filter timecontrol", () => {
  it("blitz", () => {
    expect(timecontrol('blitz')(new Puzzle({speed: "blitz"}))).to.be.true
    expect(timecontrol('blitz')(new Puzzle({speed: "rapid"}))).to.be.false
  });
  it("any", () => {
    expect(timecontrol('')(new Puzzle({speed: "blitz"}))).to.be.true
    expect(timecontrol('')(new Puzzle({speed: "rapid"}))).to.be.true
  });
});
