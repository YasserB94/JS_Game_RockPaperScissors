export default class Bot {
    constructor(name='CPU',difficulty = 'normal') {
        this.name = name;
        this.difficulty = difficulty;
    }
    init() {
        this.moves = ['rock', 'paper', 'scissor', 'lizard', 'spock']
        this.score = 0;
    }
    getDifficulty() {
        return this.difficulty;
    }
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
    setMove(move) {
        this.move = move;
    }
    getMove() {
        return this.move;
    }
    setRandomMove() {
        const randomIndex = Math.floor(Math.random() * this.moves.length-1)
        setMove(this.moves[randomIndex])
    }

}