function Player(userName, playerNumber){
  this.name = userName;
  this.playerNumber = playerNumber;
  this.points = 0;
  this.hand = [];
  this.blackCard = [];
}

function Card(info) {
  this.info = info;
  this.active = true;
}
// Start of black cards
var blackOne = new Card("I got 99 problems but __________ ain't one.");
var blackTwo = new Card("Alternative medicine is now embracing the curative powers of __________.");
var blackThree = new Card("Why can't I sleep at night?");
var blackFour = new Card("Whats that sound?");
var blackFive= new Card ("What is Batman's guilty pleasure?");
var blackSix = new Card ("I'm sorry, Dave, but I couldn't complete my homework because of __________.");
var blackSeven = new Card ("What's a girl's best friend?");
var blackEight = new Card ("I get by with a little help from __________.");
var blackNine = new Card ("__________. Betcha can't have just one!");
var blackTen = new Card ("White people like __________.");
var blackEleven = new Card ("__________. High five, bro.");
var blackTwelve = new Card ("In 1000 years, when paper money is a distant memory, how will we pay for goods and services?");
var blackThirteen = new Card ("What are my parents hiding from me?");
var blackFourteen = new Card ("How am I maintaining my relationship status?");
var blackFifteen = new Card ("__________. It's a trap!");
var blackSixteen = new Card ("The class field trip was completely ruined by __________.");
var blackSeventeen = new Card ("What will I bring back in time to convince people that I am a powerful wizard?");
var blackEighteen = new Card ("But before I kill you, Mr. Bond, I must show you __________.");
var blackNineteen = new Card ("While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on __________.");
var blackTwenty = new Card ("Daddy, why is mommy crying?");
// end of black cards - Start of white Cards
var whiteOne = new Card("Daddy issues.");
var whiteTwo = new Card("White people.");
var whiteThree = new Card("Vikings.");
var whiteFour = new Card("A can of whoop ass.");
var whiteFive = new Card ("Republicans");
var whiteSix = new Card ("A lifetime of sadness.");
var whiteSeven = new Card ("A cooler full of organs.");
var whiteEight = new Card ("Puppies!");
var whiteNine = new Card ("Brown people");
var whiteTen = new Card ("Nazis");
var whiteEleven = new Card ("The Big Bang");
var whiteTwelve = new Card ("Switching to Geico.");
var whiteThirteen = new Card ("Soup that is too hot.");
var whiteFourteen = new Card ("Dropping a chandelier on your enemies and riding the rope up.");
var whiteFifteen = new Card ("pulling out.");
var whiteSixteen = new Card ("Hormone injections.");
var whiteSeventeen = new Card ("Giving 110%.");
var whiteEighteen = new Card ("Giving birth to the Antichrist.");
var whiteNineteen = new Card ("Assless chaps.");
var whiteTwenty = new Card ("The miracle of childbirth.");
var whiteTwentyOne = new Card ("waiting 'til marriage.'");
var whiteTwentyTwo = new Card ("The glass ceiling.");
var whiteTwentyThree = new Card ("Hot People");
var whiteTwentyFour = new Card ("Dark and mysterious forces beyond our control.");
var whiteTwentyFive = new Card ("The hustle.");
var whiteTwentySix = new Card ("The Underground Railroad.");
var whiteTwentySeven = new Card ("Hope.");
var whiteTwentyEight = new Card ("Natural selection.");
var whiteTwentyNine = new Card ("A gassy antelope.");
var whiteThirty = new Card ("Getting really high.");
var whiteThirtyOne = new Card ("Smallpox blankets.");
var whiteThirtyTwo = new Card ("Third base.");
var whiteThirtyThree = new Card ("Taking off your shirt.");
var whiteThirtyFour = new Card ("Arnold Schwarzenegger.");
var whiteThirtyFive = new Card ("An ugly face.");
var whiteThirtySix = new Card ("BATMAN!!!");
var whiteThirtySeven = new Card ("Homeless people");
var whiteThirtyEight = new Card ("Seppuku.");
var whiteThirtyNine = new Card ("My black ass.");
var whiteForty = new Card ("Pixelated bukkake.");
var whiteFortyOne = new Card ("72 virgins.");
var whiteFortyTwo = new Card ("An icepick lobotomy.");
var whiteFortyThree = new Card ("A salty surprise.");
var whiteFortyFour = new Card ("Genuine human connection.");
var whiteFortyFive = new Card ("Autocannibalism");
var whiteFortySix = new Card ("Being rich.");
var whiteFortySeven = new Card ("Dick fingers.");
var whiteFortyEight = new Card ("The folly of man.");
var whiteFortyNine = new Card ("Grandma");
var whiteFifty = new Card ("The Make-A-Wish Foundation.");
var whiteFiftyOne = new Card ("Leprosy.");
var whiteFiftyTwo = new Card ("Penis breath.");
var whiteFiftyThree = new Card("Poor people.");
var whiteFiftyFour = new Card ("Laying an egg.");
var whiteFiftyFive = new Card ("World peace.");
var whiteFiftySix = new Card ("shiny objects.");
var whiteFiftySeven = new Card ("Riding off into the sunset.");
var whiteFiftyEight = new Card ("Flesh-eating bacteria");
var whiteFiftyNine = new Card ("Poor life choices.");
var whiteSixty = new Card ("My vagina.");
var whiteSixtyOne = new Card ("Active listening.");
var whiteSixtyTwo = new Card ("The KKK.");
var whiteSixtyThree = new Card ("Black people.");
var whiteSixtyFour = new Card ("Hospice care.");
var whiteSixtyFive = new Card ("Not wearing pants.");
var whiteSixtySix = new Card ("Hospice care.");
var whiteSixtySeven = new Card ("Crumbs all over the god damn carpet.");
var whiteSixtyEight = new Card ("Cards Against Humanity.");
var whiteSixtyNine = new Card ("Cuddling.");
var whiteSeventy = new Card ("Being a motherfucking sorcerer.");
var whiteSeventyOne = new Card ("kanye West");
var whiteSeventyTwo = new Card ("The American Dream.");
var whiteSeventyThree = new Card ("GoGurt.");
var whiteSeventyFour = new Card ("White-man scalps.");
var whiteSeventyFive = new Card ("The invisible hand.");
var whiteSeventySix = new Card ("Crippling debt.");
var whiteSeventySeven = new Card ("The Trail of Tears.");
var whiteSeventyEight = new Card ("The light of a billion suns.");
var whiteSeventyNine = new Card ("The Boy Scouts of America.");
var whiteEighty = new Card ("Being marginalzed.");
var whiteEightyOne = new Card ("Being on fire");
var whiteEightyTwo = new Card ("Racism");
var whiteEightyThree = new Card ("Old people smell");
var whiteEightyFour = new Card ("A micropenis");
var whiteEightyFive = new Card ("Women in yogurt commercials.");
var whiteEightySix = new Card ("Classist undertones.");
var whiteEightySeven = new Card ("Not giving a shit about the Third World.");
var whiteEightyEight = new Card ("Inserting a mason jar into my anus.");
var whiteEightyNine = new Card ("Court-ordered rehab.");
var whiteNinety = new Card ("A windmill full of corpeses.");
var whiteNinetyOne = new Card ("The gays.");
var whiteNinetyTwo = new Card ("An oversized lollipop");
var whiteNinetyThree = new Card ("African children.");
var whiteNinetyFour = new Card ("An asymetric boob job.");
var whiteNinetyFive = new Card ("Bingeing and purging.");
var whiteNinetySix = new Card ("The hardworking Mexican.");
var whiteNinetySeven = new Card ("An Oedipus complex.");
var whiteNinetyEight = new Card ("A tiny horse.");
var whiteNinetyNine = new Card ("Boogers.");
var whiteOneHundred = new Card ("Penis envy.");
var whiteOneHundredOne = new Card ("Barack Obama.");
var whiteOneHundredTwo = new Card ("My humps.");
var whiteOneHundredThree = new Card ("The Tempur-Pedic Swedish Sleep System.");
var whiteOneHundredFour = new Card ("Scientology.");
var whiteOneHundredFive = new Card ("Dry heaving.");
var whiteOneHundredSix = new Card ("Skeletor.");
var whiteOneHundredSeven = new Card ("Darth Vader.");
var whiteOneHundredEight = new Card ("Figgy pudding.");
var whiteOneHundredNine = new Card ("Advise from a wise, old black man.");
var whiteOneHundredTen = new Card ("Five-Dollar Footlongs.");
var whiteOneHundredEleven = new Card ("Elderly Japanese men.");
var whiteOneHundredTwelve = new Card ("Free samples.");
var whiteOneHundredThirteen = new Card ("Estrogen.");
var whiteOneHundredFourteen = new Card ("Sexual tension.");
var whiteOneHundredFifteen = new Card ("Famine.");
var whiteOneHundredSixteen = new Card ("A stray pube.");
var whiteOneHundredSeventeen = new Card ("Men.");
var whiteOneHundredEighteen = new Card ("Heartwarming orphans.");
var whiteOneHundredNineteen = new Card ("Chunks of dead hitchhiker.");
var whiteOneHundredTwenty = new Card ("A bag of magic beans.");
var whiteOneHundredTwentyOne = new Card ("Repression.");
var whiteOneHundredTwentyTwo = new Card ("Prancing.");
var whiteOneHundredTwentyThree = new Card ("Overcompensation.");
var whiteOneHundredTwentyFour = new Card ("Peeing a little bit.");
var whiteOneHundredTwentyFive = new Card ("Pooping back and forth. Forever.");
var whiteOneHundredTwentySix = new Card ("A ball of earwax, semen, and toenail clippings.");
var whiteOneHundredTwentySeven = new Card ("Testicular torsion.");
var whiteOneHundredTwentyEight = new Card ("The Devil Himself.");
var whiteOneHundredTwentyNine = new Card ("The World of Warcraft.");
var whiteOneHundredThirty = new Card ("Dick Cheney.");
var whiteOneHundredThirtyOne = new Card ("MechaHitler.");
var whiteOneHundredThirtyTwo = new Card ("Being fabulous.");
var whiteOneHundredThirtyThree = new Card ("Pictures of boobs.");
var whiteOneHundredThirtyFour = new Card ("A gentle caress of the inner thigh.");
var whiteOneHundredThirtyFive = new Card ("The Amish.");
var whiteOneHundredThirtySix = new Card ("The rhythms of Africa.");
var whiteOneHundredThirtySeven = new Card ("Lance Armstrong's missing testicle");
var whiteOneHundredThirtyEight = new Card ("The Pope.");
// end of white cards
var blackCards = [blackOne, blackTwo, blackThree, blackFour, blackFive, blackSix, blackSeven, blackEight, blackNine, blackTen, blackEleven, blackTwelve, blackThirteen, blackFourteen, blackFifteen, blackSixteen, blackSeventeen, blackEighteen, blackNineteen, blackTwenty];
var whiteCards = [whiteOne, whiteTwo, whiteThree, whiteFour, whiteFive, whiteSix, whiteSeven, whiteEight, whiteNine, whiteTen, whiteEleven, whiteTwelve, whiteThirteen, whiteFourteen, whiteFifteen, whiteSixteen, whiteSeventeen, whiteEighteen, whiteNineteen, whiteTwenty, whiteTwentyOne, whiteTwentyTwo, whiteTwentyThree, whiteTwentyFour, whiteTwentyFive, whiteTwentySix, whiteTwentySeven, whiteTwentyEight, whiteTwentyNine, whiteThirty, whiteThirtyOne, whiteThirtyTwo, whiteThirtyThree, whiteThirtyFour, whiteThirtyFive, whiteThirtySix, whiteThirtySeven, whiteThirtyEight, whiteThirtyNine, whiteForty, whiteFortyOne, whiteFortyTwo, whiteFortyThree, whiteFortyFour, whiteFortyFive, whiteFortySix, whiteFortySeven, whiteFortyEight, whiteFortyNine, whiteFifty, whiteFiftyOne, whiteFiftyTwo, whiteFiftyThree, whiteFiftyFour, whiteFiftyFive, whiteFiftySix, whiteFiftySeven, whiteFiftyEight, whiteFiftyNine, whiteSixty, whiteSixtyOne, whiteSixtyTwo, whiteSixtyThree, whiteSixtyFour, whiteSixtyFive, whiteSixtySix, whiteSixtySeven, whiteSixtyEight, whiteSixtyNine, whiteSeventy, whiteSeventyOne, whiteSeventyTwo, whiteSeventyThree, whiteSeventyFour, whiteSeventyFive, whiteSeventySix, whiteSeventySeven, whiteSeventyEight, whiteSeventyNine, whiteEighty, whiteEightyOne, whiteEightyTwo, whiteEightyThree, whiteEightyFour, whiteEightyFive, whiteEightySix, whiteEightySeven, whiteEightyEight, whiteEightyNine, whiteNinety, whiteNinetyOne, whiteNinetyTwo, whiteNinetyThree, whiteNinetyFour, whiteNinetyFive, whiteNinetySix, whiteNinetySeven, whiteNinetyEight, whiteNinetyNine, whiteOneHundred, whiteOneHundredOne, whiteOneHundredTwo, whiteOneHundredThree, whiteOneHundredFour, whiteOneHundredFive, whiteOneHundredSix, whiteOneHundredSeven, whiteOneHundredEigth, whiteOneHundredNine, whiteOneHundredTen, whiteOneHundredEleven, whiteOneHundredTwelve, whiteOneHundredThirteen, whiteOneHundredFourteen, whiteOneHundredFifteen, whiteOneHundredSixteen, whiteOneHundredSeventeen, whiteOneHundredEighteen, whiteOneHundredNineteen, whiteOneHundredTwenty, whiteOneHundredTwentyOne, whiteOneHundredTwentyTwo, whiteOneHundredTwentyThree, whiteOneHundredTwentyFour, whiteOneHundredTwentyFive, whiteOneHundredTwentySix, whiteOneHundredTwentySeven, whiteOneHundredTwentyEight, whiteOneHundredTwentyNine, whiteOneHundredThirtyOne, whiteOneHundredThirtyTwo, whiteOneHundredThirtyThree, whiteOneHundredThirtyFour, whiteOneHundredThirtyFive, whiteOneHundredThirtySix, whiteOneHundredThirtySeven, whiteOneHundredThirtyEight];

Player.prototype.drawBlack = function(){
  var cardDraw = Math.floor(Math.random() * blackCards.length);
  return cardDraw
}

Player.prototype.drawWhite = function(){
  var cardDraw = Math.floor(Math.random() * whiteCards.length);
  return cardDraw
}

Player.prototype.drawBlackHand = function(playerNumber){
  var cardNumber = this.drawBlack();
  playerNumber.blackCard.push(blackCards[cardNumber].info);
  blackCards.splice(cardNumber,1);
}

Player.prototype.drawHand = function(playerNumber){
  for (var i = playerNumber.hand.length; i <= 5; i++) {
    var cardNumber = this.drawWhite();
    playerNumber.hand.push(whiteCards[cardNumber].info);
    whiteCards.splice(cardNumber,1);
  }
}

Player.prototype.reset = function(playerNumber) {
  playerNumber.blackCard = [];
}

Player.prototype.pointsToggle = function(playerNumber) {
  playerNumber.points += 1;
}

Player.prototype.checkForWin = function(playerNumber) {
  if (playerNumber.points === 6) {
    return true
  }
}



// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player4);
//
// player1.drawHand(player1);
// console.log(player1.hand);
// player2.drawHand(player2);
// console.log(player2.hand);
// player3.drawHand(player3);
// console.log(player3.hand);
// player4.drawHand(player4);
// console.log(player4.hand);
//
// console.log(whiteCards);
// console.log(whiteCards.length);

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
    var player1 = new Player(playerOneName, 1);
    var player2 = new Player(playerTwoName, 2);
    var player3 = new Player(playerThreeName, 3);
    var player4 = new Player(playerFourName, 4);

    var sure = function(){
      var players = {1,2,3,4};
      players.forEach(function(playerNumber)) {
        player+playerNumber.drawHand(player);
      }
    }
    players.drawHand(player);
    // draw black card for playesr
    player1.drawBlackHand(player1);

    // hide start view, reveal black-card-draw and player-hand-view
    $("#Player-one-name-display").text(playerOneName);
    $("div#load").addClass('hide');
    $("#game").show();
  });

  $("form#player-hand").submit(function(event) {
    event.preventDefault();
    var playerSelectWhiteCard = $("input[name='player-hand']:checked").val();
    //Things we need here on this button click:
    // Assign card to empty array for player
    // Trigger function/Reset for next player selection (2x)
    // on the last player's turn, hide view, and show winner-pick-view

  });

  $("form#winner-pick").submit(function(event) {
    event.preventDefault();
      var selectTheWinner = $("input[name='player-hand']:checked").val();

      //Things we need here on this button click:
      // Pick the winner and award the point
      // Check each player's total against the goal
      // If game continues to next round, draw new card and start new hand
  });

});
