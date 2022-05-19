import Player from "./Model/player.js";
import Bot from "./Model/bot.js";
// import Arena from "./Model/arena";



export default class Controller{
    constructor(){
        let amountOfPlayers,amountOfBots;
        while(amountOfPlayers===undefined||isNaN(amountOfPlayers)){
        amountOfPlayers = prompt('How Many Players would you like ?')
        }
        while(amountOfBots===undefined||isNaN(amountOfBots)){
        amountOfBots = prompt('How Many Bots would you like ?')
        }
        this.init(amountOfPlayers,amountOfBots)
    }
    init(amountOfPlayers,amountOfBots){
        this.players = [];
        this.bots = [];
        for(let i = 0;i<amountOfPlayers;i++){
            let playerName = prompt(`Player ${i+1},Please Enter your name:`)
            let player = new Player(playerName)
            this.players.push(player)
        }
        for(let i = 0;i<amountOfBots;i++){
            let cpu = new Bot((i+1));
            this.bots.push(cpu);
        }
        //this.arena = new Arena(this.players,this.bots)
    }
    update(){
        this.players.forEach((player)=>{
            console.log(player.name)
        })
    }
    draw(){

    }

}