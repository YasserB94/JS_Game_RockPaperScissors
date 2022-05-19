export default class Player {
    constructor(name='Unnamed Player') {
        this.name = name;
    }
    init() {
        this.moves = ['rock', 'paper', 'scissor', 'lizard', 'spock']
        this.score = 0;
    }
    setMove(newMove) {
        for (let move in this.moves) {
            if (move === newMove) {
                this.move = newMove;
            }
        }
    }
    getMove() {
        return this.move;
    }
    setScore(amount) {
        if (isNaN(amount)) return console.error('NaN');;
        if (amount <= 0) {
            this.score = 0;
        } else {
            this.score = amount;
        }
    }
    getScore() {
        return this.score;
    }
    addPoint(){
        this.score++;
    }
    subtractPoint(){
        this.score--;
    }
}

//2