function player(userName, playerNumber){
  this.name = userName;
  this.playerNumber = playerNumber;
  this.points = 0;
  this.hand = [];
  this.blackCard = [];
}

function Card(info, number) {
  this.info = info;
  this.number = number;
  this.active = true;
}
// Start of black cards
var blackOne = new Card("I got 99 problems but __________ ain't one.", 1);
var blackTwo = new Card("Alternative medicine is now embracing the curative powers of __________.", 2);
var blackThree = new Card("Why can't I sleep at night?", 3);
var blackFour = new Card("Whats that sound?", 4);
var blackFive= new Card ("What is Batman's guilty pleasure?", 5);
var blackSix = new Card ("I'm sorry, Dave, but I couldn't complete my homework because of __________.", 6);
var blackSeven = new Card ("What's a girl's best friend?", 7);
var blackEight = new Card ("I get by with a little help from __________.", 8);
var blackNine = new Card ("__________. Betcha can't have just one!", 9);
var blackTen = new Card ("White people like __________.", 10);
var blackEleven = new Card ("__________. High five, bro.", 11);
var blackTwelve = new Card ("In 1000 years, when paper money is a distant memory, how will we pay for goods and services?", 12);
var blackThirteen = new Card ("What are my parents hiding from me?", 13);
var blackFourteen = new Card ("How am I maintaining my relationship status?", 14);
var blackFifteen = new Card ("__________. It's a trap!", 15);
var blackSixteen = new Card ("The class field trip was completely ruined by __________.", 16);
var blackSeventeen = new Card ("What will I bring back in time to convince people that I am a powerful wizard?", 17);
var blackEighteen = new Card ("But before I kill you, Mr. Bond, I must show you __________.", 18);
var blackNineteen = new Card ("While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on __________.", 19);
var blackTwenty = new Card ("Daddy, why is mommy crying?", 20);
// end of black cards - Start of white Cards
var whiteOne = new Card("Daddy issues.", 1);
var whiteTwo = new Card("White people.", 2);
var whiteThree = new Card("Vikings.", 3);
var whiteFour = new Card("A can of whoop ass.", 4);
var whiteFive = new Card ("Republicans", 5);
var whiteSix = new Card ("A lifetime of sadness.", 6);
var whiteSeven = new Card ("A cooler full of organs.", 7);
var whiteEight = new Card ("Puppies!", 8);
var whiteNine = new Card ("Brown people", 9);
var whiteTen = new Card ("Nazis", 10);
var whiteEleven = new Card ("The Big Bang", 11);
var whiteTwelve = new Card ("Switching to Geico.", 12);
var whiteThirteen = new Card ("Soup that is too hot.", 13);
var whiteFourteen = new Card ("Dropping a chandelier on your enemies and riding the rope up.", 14);
var whiteFifteen = new Card ("pulling out.", 15);
var whiteSixteen = new Card ("Hormone injections.", 16);
var whiteSeventeen = new Card ("Giving 110%.", 17);
var whiteEighteen = new Card ("Giving birth to the Antichrist.", 18);
var whiteNineteen = new Card ("Assless chaps.", 19);
var whiteTwenty = new Card ("The miracle of childbirth.", 20);
var whiteTwentyOne = new Card ("waiting 'til marriage.'", 21);
var whiteTwentyTwo = new Card ("The glass ceiling.", 22);
var whiteTwentyThree = new Card ("Hot People", 23);
var whiteTwentyFour = new Card ("Dark and mysterious forces beyond our control.", 24);
var whiteTwentyFive = new Card ("The hustle.", 25);
var whiteTwentySix = new Card ("The Underground Railroad.", 26);
var whiteTwentySeven = new Card ("Hope.", 27);
var whiteTwentyEight = new Card ("Natural selection.", 28);
var whiteTwentyNine = new Card ("A gassy antelope.", 29);
var whiteThirty = new Card ("Getting really high.", 30);
var whiteThirtyOne = new Card ("Smallpox blankets.", 31);
var whiteThirtyTwo = new Card ("Third base.", 32);
var whiteThirtyThree = new Card ("Taking off your shirt.", 33);
var whiteThirtyFour = new Card ("Arnold Schwarzenegger.", 34);
var whiteThirtyFive = new Card ("An ugly face.", 35);
var whiteThirtySix = new Card ("BATMAN!!!", 36);
var whiteThirtySeven = new Card ("Homeless people", 37);
var whiteThirtyEight = new Card ("Seppuku.", 38);
var whiteThirtyNine = new Card ("My black ass.", 39);
var whiteForty = new Card ("Pixelated bukkake.", 40);
var whiteFortyOne = new Card ("72 virgins.", 41);
var whiteFortyTwo = new Card ("An icepick lobotomy.", 42);
var whiteFortyThree = new Card ("A salty surprise.", 43);
var whiteFortyFour = new Card ("Genuine human connection.", 44);
var whiteFortyFive = new Card ("Autocannibalism", 45);
var whiteFortySix = new Card ("Being rich.", 46);
var whiteFortySeven = new Card ("Dick fingers.", 47);
var whiteFortyEight = new Card ("The folly of man.", 48);
var whiteFortyNine = new Card ("Grandma", 49);
var whiteFifty = new Card ("The Make-A-Wish Foundation.", 50);
var whiteFiftyOne = new Card ("Leprosy.", 51);
var whiteFiftyTwo = new Card ("Penis breath.", 52);
var whiteFiftyThree = new Card("Poor people.", 53);
var whiteFiftyFour = new Card ("Laying an egg.", 54);
var whiteFiftyFive = new Card ("World peace.", 55);
var whiteFiftySix = new Card ("shiny objects.", 56);
var whiteFiftySeven = new Card ("Riding off into the sunset.", 57);
var whiteFiftyEight = new Card ("Flesh-eating bacteria", 58);
var whiteFiftyNine = new Card ("Poor life choices.", 59);
var whiteSixty = new Card ("My vagina.", 60);
var whiteSixtyOne = new Card ("Active listening.", 61);
var whiteSixtyTwo = new Card ("The KKK.", 62);
var whiteSixtyThree = new Card ("Black people.", 63);
var whiteSixtyFour = new Card ("Hospice care.", 64);
var whiteSixtyFive = new Card ("Not wearing pants.", 65);
var whiteSixtySix = new Card ("Hospice care.", 66);
var whiteSixtySeven = new Card ("Crumbs all over the god damn carpet.", 67);
var whiteSixtyEight = new Card ("Cards Against Humanity.", 68);
var whiteSixtyNine = new Card ("Cuddling.", 69);
var whiteSeventy = new Card ("Being a motherfucking sorcerer.", 70);
var whiteSeventyOne = new Card ("kanye West", 71);
var whiteSeventyTwo = new Card ("The American Dream.", 72);
var whiteSeventyThree = new Card ("GoGurt.", 73);
var whiteSeventyFour = new Card ("White-man scalps.", 74);
var whiteSeventyFive = new Card ("The invisible hand.", 75);
var whiteSeventySix = new Card ("Crippling debt.", 76);
var whiteSeventySeven = new Card ("The Trail of Tears.", 77);
var whiteSeventyEight = new Card ("The light of a billion suns.", 78);
var whiteSeventyNine = new Card ("The Boy Scouts of America.", 79);
var whiteEighty = new Card ("Being marginalzed.", 80);
// end of white cards
var blackCards = [blackOne, blackTwo, blackThree, blackFour, blackFive, blackSix, blackSeven, blackEight, blackNine, blackTen, blackEleven, blackTwelve, blackThirteen, blackFourteen, blackFifteen, blackSixteen, blackSeventeen, blackEighteen, blackNineteen, blackTwenty];
var whiteCards = [whiteOne, whiteTwo, whiteThree, whiteFour, whiteFive, whiteSix, whiteSeven, whiteEight, whiteNine, whiteTen, whiteEleven, whiteTwelve, whiteThirteen, whiteFourteen, whiteFifteen, whiteSixteen, whiteSeventeen, whiteEighteen, whiteNineteen, whiteTwenty, whiteTwentyOne, whiteTwentyTwo, whiteTwentyThree, whiteTwentyFour, whiteTwentyFive, whiteTwentySix, whiteTwentySeven, whiteTwentyEight, whiteTwentyNine, whiteThirty, whiteThirtyOne, whiteThirtyTwo, whiteThirtyThree, whiteThirtyFour, whiteThirtyFive, whiteThirtySix, whiteThirtySeven, whiteThirtyEight, whiteThirtyNine, whiteForty, whiteFortyOne, whiteFortyTwo, whiteFortyThree, whiteFortyFour, whiteFortyFive, whiteFortySix, whiteFortySeven, whiteFortyEight, whiteFortyNine, whiteFifty, whiteFiftyOne, whiteFiftyTwo, whiteFiftyThree, whiteFiftyFour, whiteFiftyFive, whiteFiftySix, whiteFiftySeven, whiteFiftyEight, whiteFiftyNine, whiteSixty, whiteSixtyOne, whiteSixtyTwo, whiteSixtyThree, whiteSixtyFour, whiteSixtyFive, whiteSixtySix, whiteSixtySeven, whiteSixtyEight, whiteSixtyNine, whiteSeventy, whiteSeventyOne, whiteSeventyTwo, whiteSeventyThree, whiteSeventyFour, whiteSeventyFive, whiteSeventySix, whiteSeventySeven, whiteSeventyEight, whiteSeventyNine, whiteEighty];

player.prototype.drawBlack = function(){
  var cardDraw = Math.floor(Math.random() * blackCards.length);
  return cardDraw
}

player.prototype.drawWhite = function(){
  var cardDraw = Math.floor(Math.random() * whiteCards.length);
  return cardDraw
}

player.prototype.drawBlackHand = function(playerNumber){
  var cardNumber = this.drawBlack();
  playerNumber.blackCard.push(blackCards[cardNumber].info);
 blackCards.splice(cardNumber,1);
}

player.prototype.drawHand = function(playerNumber){
  for (var i = playerNumber.hand.length; i <= 5; i++) {
    var cardNumber = this.drawWhite();
    playerNumber.hand.push(whiteCards[cardNumber].info);
   whiteCards.splice(cardNumber,1);
  }
}
player.prototype.reset = function(playerNumber) {
  playerNumber.blackCard = [];
}
player.prototype.pointsToggle = function(playerNumber) {
  playerNumber.points += 1;
}
player.prototype.checkForWin = function(playerNumber) {
  if (playerNumber.points === 6) {
    return true
  }
}


var player1 = new player("cool", 1);
var player2 = new player("uncool", 2);
var player3 = new player("MaxCool", 3);
var player4 = new player("2Cool", 4);

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);

player1.drawHand(player1);
console.log(player1.hand);
player2.drawHand(player2);
console.log(player2.hand);
player3.drawHand(player3);
console.log(player3.hand);
player4.drawHand(player4);
console.log(player4.hand);

console.log(whiteCards);
console.log(whiteCards.length);

// function viewManager() {
//   // $("div#start-view").hide();
//   $("div#black-card-draw").hide();
//   $("div#player-hand-view").hide();
//   $("div#winner-pick-view").hide();
//   }

//start front end

$(document).ready(function() {
  $("form#player-name").submit(function(event) {
    event.preventDefault();
    var playerOneName = $("input#player1-name").val();
    var playerTwoName = $("input#player2-name").val();
    var playerThreeName = $("input#player3-name").val();
    var playerFourName = $("input#player4-name").val();
    // Things we need here on this button click:
    //call function for white card draw
    // draw black card for playesr
    // hide start view, reveal black-card-draw and player-hand-view
    $("#Player-one-name-display").text(playerOneName);
    $("div#load").addClass('hide');
  });

  $("form#player-hand").submit(function(event) {
    event.preventDefault();
    var playerSelectWhiteCard = $("input[name='player-hand']:checked").val();
    alert("cool");
    //Things we need here on this button click:
    // Assign card to empty array for player
    // Trigger function/Reset for next player selection (2x)
    // on the last player's turn, hide view, and show winner-pick-view

  });

  $("button#judge-your-card").submit(function(event) {
    event.preventDefault();
      var selectTheWinner = $("input[name='player-hand']:checked").val();

      //Things we need here on this button click:
      // Pick the winner and award the point
      // Check each player's total against the goal
      // If game continues to next round, draw new card and start new hand
  });

});
