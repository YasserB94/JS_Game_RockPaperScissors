## Rock Paper Scissors Lizard Spock ##
A learning challenge project for the BeCode full stack web developper course.
### Objective ###
Make a JavaScript game of rock paper scissors including the big bang theory's rules of lizard spock
```
Rock Papers Scissors will be refered to as RPS in this readme
```
### The Rules ###
The classic RPS game has over 50% chance of resulting in a tie.
These rules add a Lizard and a Spock to the game to decrease the odds of having a tie.

|**CHOICE**|**BEATS**|**LOSES TO**|
|---|:---:|:---:|
|**ROCK**|Scissor Lizard|Paper Spock|
|**PAPER**|Rock Spock|Scissors Lizard|
|**SCISSOR**|Paper Lizard|Rock Spock|
|**LIZARD**|Paper Spock|Scissors Rock|
|**SPOCK**|Rock Scissors|Paper Lizard|

### Must have features ###
- [ ] Player gets to choose their move
- [ ] Computer to play against
- [ ] A way to start a new game
- [ ] A way to indicate the winner
      *Alert boxes are not allowed*

### Optional Features ###
- [ ] Nice graphics ?
- [ ] A text field for player input
- [ ] Indicator for the player's choice
- [ ] More options ?
- [ ] Complex rules ?
- [ ] Responsive Design

## Roadmap ##
#### Create a basic website to house the game ####
- [x] Use the mobile first approach
- [x] Have a container for the player's choice
    - [x] Have a container for the locked choice
    - [x] Have a container for the choices buttons
- [x] Have a container to display the computer's choice
- [x] Have a sketch for the start of the site

![site starting sketch](/assets/read-me-images/BaseGameSketch.webp)
- [ ] Recreate design in HTML
- [ ] Add some basic styling
- [ ] Add DOM elements for the choices, scoreboard, computer's score.
- [ ] Create a player class
    - [ ] A player has a moveset defined by an array of possible moves
- [ ] Create a computer class
    - [ ] The computer has the logic to play RPS
    - [ ] The computer's logic is modular to the difficulty level
    - [ ] The computer has a random name generated out of an array of funny names
- [ ] Add a 'duel arena' class
    - [ ] Here the duel between the player and the AI will be fight out
    - [ ] The arena will take all the player's choices and output the resulting winner
    



## Personal Optional Goals ##
- [ ] Add best out of 3 with a scoreboard
- [ ] Enable a difficulty level
- [ ] Give the AI a random name
    *You are playing against Ze Master Bleeper*
- [ ] Add a multiplayer option
    - [ ] Multiple players can be created and the players will select their options once by one by receiving the device and pick ready
    - [ ] Allow computers to be added to the multiplayer game
    - [ ] The players can set their names in a pool
    - [ ] The players will play against each other in a group
    - [ ] The winning players continue until one RPS Master remains 'The Sheldonator'
