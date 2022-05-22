export default class Bot {
    constructor(name='CPU',difficulty = 'normal') {
        this.name = name;
        this.score = 0;
        this.difficulty = difficulty;
        this.moves = ['rock', 'paper', 'scissor', 'lizard', 'spock']

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
        const randomIndex = Math.floor(Math.random() * this.moves.length)
        this.setMove(this.moves[randomIndex])
    }
    hasMove(){
        if(this.move!=null){
            return true;
        }
        else{
            return false;
        }
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
        this.score = this.score+1;
        console.log(`Bot${this.name} Score ${this.score}`)
    }
    subtractPoint(){
        if(this.score<=0)return;
        this.score = this.score-1;
        console.log(`Bot${this.name} Score ${this.score}`)

    }
    getName(){
        return this.name;
    }

}