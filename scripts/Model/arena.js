export default class Arena {
    constructor(players) {
        this.players = players;
    }
    duel() {
        for (player1 in players) {
            for (player2 in players) {
                if (player1 === player2) break;
                updateScore(player1, player2)
            }
        }
    }
    updateScore(player1, player2) {
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
            default:
                break;
        }
    }
}