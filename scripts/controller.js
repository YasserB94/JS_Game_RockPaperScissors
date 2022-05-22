import Player from "./Model/player.js";
import Bot from "./Model/bot.js";
import Arena from "./Model/arena.js"


export default class Controller {
    constructor(singleplayer) {
        this.currentPlayerIndex = 0;
        this.currentPlayer;
        this.singleplayer = false;
        if (singleplayer) {
            this.singleplayer = true;
            this.init(1, 1)
        } else {
            let amountOfPlayers, amountOfBots;
            while (amountOfPlayers === undefined || isNaN(amountOfPlayers)) {
                amountOfPlayers = prompt('How Many Players would you like ?')
            }
            while (amountOfBots === undefined || isNaN(amountOfBots)) {
                amountOfBots = prompt('How Many Bots would you like ?')
            }
            this.init(amountOfPlayers, amountOfBots)
            this.singleplayer = false;
        }

    }
    init(amountOfPlayers, amountOfBots) {
        this.players = [];
        this.bots = [];
        this.choiceLocked = false;
        for (let i = 0; i < amountOfPlayers; i++) {
            let playerName = prompt(`Player ${i + 1},Please Enter your name:`)
            let player = new Player(playerName)
            this.players.push(player)
        }
        for (let i = 0; i < amountOfBots; i++) {
            let cpu = new Bot((i + 1));
            this.bots.push(cpu);
        }
        this.arena = new Arena(this.players, this.bots);
        this.currentPlayer = this.players[this.currentPlayerIndex]
        this.getControlElements();
        this.setControlElements();
    }
    update() {
        console.log(this.bots);
        console.log(this.players);
    }
    draw() {
        this.drawSelectedMoveIndicator()
        this.drawCpuMove()
    }
    //ONLY SELECTS SINGLE PLAYER ELEMENTS NOT THE MP ONES
    getControlElements() {
        if (this.singleplayer) {
            this.btnChoiceRock = document.getElementById('sp-move-rock');
            this.btnChoicePaper = document.getElementById('sp-move-paper');
            this.btnChoiceScissor = document.getElementById('sp-move-scissor');
            this.btnChoiceLizard = document.getElementById('sp-move-lizard');
            this.btnChoiceSpock = document.getElementById('sp-move-spock');
            this.playerMoveIndicator = document.getElementById('sp-selected-move');
            this.cpuMoveIndicator = document.getElementById('sp-selected-move-cpu');
            this.btnLockIn = document.getElementById('sp-btn-lockin');
        } else {
            this.btnChoiceRock = document.getElementById('mp-move-rock');
            this.btnChoicePaper = document.getElementById('mp-move-paper');
            this.btnChoiceScissor = document.getElementById('mp-move-scissor');
            this.btnChoiceLizard = document.getElementById('mp-move-lizard');
            this.btnChoiceSpock = document.getElementById('mp-move-spock');
            this.btnLockIn = document.getElementById('mp-btn-lockin');
        }
    }
    setControlElements() {
        this.btnChoiceRock.addEventListener('click', () => {
            if(this.choiceLocked)return;
            this.setPlayerMoveRock();

        });
        this.btnChoicePaper.addEventListener('click', () => {
            if(this.choiceLocked)return;

            this.setPlayerMovePaper();
        });
        this.btnChoiceScissor.addEventListener('click', () => {
            if(this.choiceLocked)return;

            this.setPlayerMoveScissor();
        });
        this.btnChoiceLizard.addEventListener('click', () => {
            if(this.choiceLocked)return;

            this.setPlayerMoveLizard();
        });
        this.btnChoiceSpock.addEventListener('click', () => {
            if(this.choiceLocked)return;

            this.setPlayerMoveSpock();
        });
        this.btnLockIn.addEventListener('click', () => {
            if(this.btnLockIn.innerText==='DUEL'){
                this.launchDuel();
                this.drawScoreBoardSinglePlayer();
                return
            }
            this.nextPlayer();
        })
    }
    //Lamdas
    setPlayerMoveRock() {
        this.players[this.currentPlayerIndex].setMove('rock')
    }
    setPlayerMovePaper() {
        this.players[this.currentPlayerIndex].setMove('paper')
    }
    setPlayerMoveScissor() {
        this.players[this.currentPlayerIndex].setMove('scissor')
    }
    setPlayerMoveLizard() {
        this.players[this.currentPlayerIndex].setMove('lizard')
    }
    setPlayerMoveSpock() {
        this.players[this.currentPlayerIndex].setMove('spock')
    }
    nextPlayer() {
        this.choiceLocked = true;
        if (this.currentPlayerIndex < this.players.length - 1) {
            this.currentPlayerIndex++;
            this.choiceLocked = false;
        } else {
            this.readyForDuel();
        }
    }
    setBotsMoves() {
        for (let i = 0; i < this.bots.length; i++) {
            this.bots[i].setRandomMove();
        }
    }
    drawSelectedMoveIndicator() {
        this.resetBtnFilters();
        let playerMove = this.currentPlayer.getMove();
        switch (playerMove) {
            case 'rock':
                this.btnChoiceRock.style.filter = 'invert(50%)';
                this.playerMoveIndicator.src = './assets/rock-paper-scissors/moves/rock.webp';
                break;
            case 'paper':

                this.btnChoicePaper.style.filter = 'invert(50%)';
                this.playerMoveIndicator.src = './assets/rock-paper-scissors/moves/paper.webp';
                break;
            case 'scissor':
                this.btnChoiceScissor.style.filter = 'invert(50%)';
                this.playerMoveIndicator.src = './assets/rock-paper-scissors/moves/scissors.webp';
                break;
            case 'lizard':
                this.btnChoiceLizard.style.filter = 'invert(50%)';
                this.playerMoveIndicator.src = './assets/rock-paper-scissors/moves/lizard.webp';
                break;
            case 'spock':
                this.btnChoiceSpock.style.filter = 'invert(50%)';
                this.playerMoveIndicator.src = './assets/rock-paper-scissors/moves/spock.webp';
                break;
            default:
                break;
        }
    }
    drawCpuMove() {
        for (let i = 0; i < this.bots.length; i++) {
            if (this.bots[i].hasMove()) {
                let cpuMove = this.bots[i].getMove();
                switch (cpuMove) {
                    case 'rock':
                        this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/rock.webp';
                        break;
                    case 'paper':
                        this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/paper.webp';
                        break;
                    case 'scissor':
                        this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/scissors.webp';
                        break;
                    case 'lizard':
                        this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/lizard.webp';
                        break;
                    case 'spock':
                        this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/spock.webp';
                        break;
                    default:
                        break;
                }
            }
        }
    }
    resetBtnFilters() {
        this.btnChoiceRock.style.filter = '';
        this.btnChoicePaper.style.filter = '';
        this.btnChoiceScissor.style.filter = '';
        this.btnChoiceLizard.style.filter = '';
        this.btnChoiceSpock.style.filter = '';
    }
    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex]
    }
    launchDuel(){
        this.setBotsMoves();
        this.arena.update()
        this.nextRound();
        this.choiceLocked = false;
    }
    readyForDuel(){
        this.btnLockIn.innerText = 'DUEL';
    }
    nextRound(){
        this.resetBtnFilters();
        this.btnLockIn.innerText = 'Lock in Choice';
        
    }
    //MOVECHOICE
    drawScoreBoardSinglePlayer(){
        document.getElementById('sp-score-board').innerText = `${this.currentPlayer.getScore()}|${this.bots[0].getScore()}`
    }

}




///*-----FUTURE CODE
    // drawMovesAnimation(){
    //     this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/rock.webp';
    //     this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/paper.webp';
    //     this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/scissors.webp';
    //     this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/lizard.webp';
    //     this.cpuMoveIndicator.src = './assets/rock-paper-scissors/moves/spock.webp';
    // }