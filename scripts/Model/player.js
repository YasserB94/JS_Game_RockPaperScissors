export default class Player {
    constructor(name='Unnamed Player') {
        this.name = name;
        this.score = 0;
        this.moves = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
    }

    setMove(newMove) {
        // for (let move in this.moves) {
        //     if (move === newMove) {
        //         this.move = newMove;
        //     }
        // }
        this.move = newMove;
    }
    getMove() {
        return this.move;
    }
    hasMove(){
        if(this.move != null){
            return true;
        }else{
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
    }
    subtractPoint(){
        if(this.score<=0)return;
        this.score = this.score-1;
    }
}

//2