# Cards Against Coders

##### Epicodus Intro Team Project

#### By Cheryl Frankenfield, Holly Wilkalis, Jenn Trass, Griffin P. Longtin, 11/7/17

## Description

_This game is similar to Cards Against Humanity with a coding spin. A round of play involves a black card with an unfinished phrase whereby players select funny, silly or random answers to fill in the blanks. One player subjectively judges which card is the winner and point goes to that player. Get to know your fellow players and what answers they choose in order to win!_

## Setup/Installation Requirements

* Open your terminal and navigate to the directory where you want to save the game files.
* Type $ git clone https://github.com/Griflongtin/cards-against-coders/projects to create a copy of the project files at your current location.
* Project files and scripts can now be viewed and accessed.
* The completed page can be viewed via the GH pages site at http://Griflongtin.github.io/cards-against-coders/.

## Specs

_The application will allow a player to enter their name._
* _Example Input: Player enters name._
* _Example Output: Players' name is saved by game._

_The application will support 4 players._
* _Example Input: Players 1 thru 4 enter their names._
* _Example Output: Players 1-4 names are saved by game._

_The application will start game with player 1 and will rotate in numerical order._
* _Example Input: Player 1 starts game._
* _Example Output: Player 1 is first judge of best black card. Play then returns to Player 2._

_The application's randomizer function will be used to draw a black card._
* _Example Input: Play button is clicked._
* _Example Output: A random black card is selected from the game library of black cards._

_The application's randomizer function will select 6 white cards for each player from white card deck._
* _Example Input: Play button is clicked._
* _Example Output: Players 1 thru 4 are dealt 6 white cards each._

_The application's randomizer function will then remove each card drawn by randomizer in array as it is drawn._
* _Example Input: Play button is clicked and white cards are dealt out._
* _Example Output: Those dealt cards are removed from deck of white cards._

_The application will allow player to select a card from their hand to play each round._
* _Example Input: Player clicks radio button from hand of 6 cards._
* _Example Output: Player's chosen card is selected for round play and pushed forward to the "winner" hand._

_After all three players have selected white cards for that round, game will display black card and other 3 players' selected cards._
* _Example Input: Last player to pick a white card in that round clicks button._
* _Example Output: Game displays one black card dealt and 3 players' white cards._

_The application will allow player serving as black card holder in that round to choose one card as winner via a radio button._
* _Example Input: Player selects winner and clicks button to submit._
* _Example Output: Winning card is selected by judge._

_The application awards one point to the appropriate player based on black card holder’s/judge's choice._
* _Example Input: Winner gets a point._
* _Example Output: Winner's point is added to scoreboard._

_The application has a scorekeeping function that tracks each players' score._
* _Example Input: Player 2 wins the hand and scores a point._
* _Example Output: Player 2's point total increases by 1._

_The application advances to next hand after previous step via a Next Hand button._
* _Example Input: Next Hand button is clicked._
* _Example Output: Game displays next black card dealt._

_The application will end game when first player reaches 5 points on scoreboard._
* _Example Input: Player receives 5 points._
* _Example Output: Player wins the game and game shows a new screen with an image and a message congratulating the winne._


## Known Bugs

_Game works, player scores track correctly. There is a code error that causes card hands to be "dealt" twice, but this should be not be visible to the user._

## Support and contact details

_If you have any issues, questions, ideas or concerns, please contact us._
_Contacts: Griffin Longtin (griflongtin@live.com), Cheryl Frankenfield (cherylfrankenfield@gmail.com), Jennifer Trass (Jennifermtrass@gmail.com), Holly Wilkalis (holly.wilkalis@gmail.com)_

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* Javascript

### License

*MIT license*

Copyright (c) 2017 **_Cheryl Frankenfield, Holly Wilkalis, Jenn Trass, Griffin P. Longtin_**
