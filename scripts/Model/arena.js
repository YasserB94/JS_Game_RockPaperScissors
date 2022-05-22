const btnLockIn = document.getElementById('btn-lockin');

export default class Arena {
    constructor(players, bots) {
        this.players = players;
        this.bots = bots;
        this.allPlayers = this.players.concat(this.bots);
    }
    update() {
        this.allPlayers.forEach(player1 => {
            this.allPlayers.forEach(player2 => {
                if (player1 === player2) return;
                this.updateScore(player1, player2)
            })
        });
    }
    updateScore(player1, player2) {
        console.log('ScoreUPDATE')
        if(player1.getMove()===player2.getMove())return;
        switch (player1.getMove(), player2.getMove()) {
            case 'rock', 'scissor' || 'lizard':
                player1.addPoint();
                player2.subtractPoint();
                break;
            case 'paper', 'rock' || 'spock':
                player1.addPoint();
                player2.subtractPoint();
                break;
            case 'scissor', 'paper' || 'lizard':
                player1.addPoint();
                player2.subtractPoint();
                break;
            case 'lizard', 'paper' || 'spock':
                player1.addPoint();
                player2.subtractPoint();
                break;
            case 'spock', 'rock' || 'scissors':
                player1.addPoint();
                player2.subtractPoint();
                break;
            case true:
                alert('DRAW?')
        }
    }
}
// duel() {
//     for (player1 in this.allPlayers) {
//         for (player2 in players) {
//             if (player1 === player2) break;
//             updateScore(player1, player2)
//         }
//     }
// }
// updateScore(player1, player2) {
//     switch (player1.getMove(), player2.getMove()) {
//         case 'rock', 'scissor' || 'lizard':
//             player1.addPoint();
//             player2.subtractPoint();
//             break;
//         case 'paper', 'rock' || 'spock':
//             player1.addPoint();
//             player2.subtractPoint();
//             break;
//         case 'scissor', 'paper' || 'lizard':
//             player1.addPoint();
//             player2.subtractPoint();
//             break;
//         case 'lizard', 'paper' || 'spock':
//             player1.addPoint();
//             player2.subtractPoint();
//             break;
//         case 'spock', 'rock' || 'scissors':
//             player1.addPoint();
//             player2.subtractPoint();
//             break;
//         default:
//             break;
//     }
// }