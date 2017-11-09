function Player(userName, playerNumber){
  this.name = userName;
  this.playerNumber = playerNumber;
  this.points = 0;
  this.hand = [];
  this.blackCard = [];
  this.hold = [];
  this.turn = false;
  this.turnPlay = true;
}

function Card(info) {
  this.info = info;
  this.active = true;
}
// Start of black cards
var blackOne = new Card("I got 99 problems but __________ ain't one.");
var blackTwo = new Card("Alternative medicine is now embracing the curative powers of __________.");
var blackThree = new Card("Why can't I sleep at night?");
var blackFour = new Card("What's that sound?");
var blackFive= new Card ("What is Batman's guilty pleasure?");
var blackSix = new Card ("I'm sorry, Dave, but I couldn't complete my homework because of __________.");
var blackSeven = new Card ("What's a coder's best friend?");
var blackEight = new Card ("I get by with a little help from __________.");
var blackNine = new Card ("__________. Betcha can't have just one!");
var blackTen = new Card ("Programmers like __________.");
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
var whiteTwo = new Card("King Kong.");
var whiteThree = new Card("Vikings.");
var whiteFour = new Card("An unexpected token.");
var whiteFive = new Card ("Republicans");
var whiteSix = new Card ("A lifetime of sadness.");
var whiteSeven = new Card ("A cooler full of organs.");
var whiteEight = new Card ("Puppies!");
var whiteNine = new Card ("Developers.");
var whiteTen = new Card ("Soccer moms.");
var whiteEleven = new Card ("The Big Bang");
var whiteTwelve = new Card ("Switching to Geico.");
var whiteThirteen = new Card ("Soup that is too hot.");
var whiteFourteen = new Card ("Dropping a chandelier on your enemies and riding the rope up.");
var whiteFifteen = new Card ("Circus clowns.");
var whiteSixteen = new Card ("Hormone injections.");
var whiteSeventeen = new Card ("Giving 110%.");
var whiteEighteen = new Card ("Giving birth to the Antichrist.");
var whiteNineteen = new Card ("Javascript.");
var whiteTwenty = new Card ("Debugger");
var whiteTwentyOne = new Card ("waiting 'til marriage.'");
var whiteTwentyTwo = new Card ("The glass ceiling.");
var whiteTwentyThree = new Card ("Hot People");
var whiteTwentyFour = new Card ("Dark and mysterious forces beyond our control.");
var whiteTwentyFive = new Card ("The hustle.");
var whiteTwentySix = new Card ("TechCrunch.");
var whiteTwentySeven = new Card ("Hope.");
var whiteTwentyEight = new Card ("Natural selection.");
var whiteTwentyNine = new Card ("A gassy antelope.");
var whiteThirty = new Card ("Getting really high.");
var whiteThirtyOne = new Card ("Smallpox blankets.");
var whiteThirtyTwo = new Card ("Third base.");
var whiteThirtyThree = new Card ("Nicholas Cage.");
var whiteThirtyFour = new Card ("Arnold Schwarzenegger.");
var whiteThirtyFive = new Card ("An ugly face.");
var whiteThirtySix = new Card ("BATMAN!!!");
var whiteThirtySeven = new Card ("Homeless people");
var whiteThirtyEight = new Card ("Seppuku.");
var whiteThirtyNine = new Card ("Canadians.");
var whiteForty = new Card ("Debugging for 14 hours.");
var whiteFortyOne = new Card ("72 virgins.");
var whiteFortyTwo = new Card ("An icepick lobotomy.");
var whiteFortyThree = new Card ("A salty surprise.");
var whiteFortyFour = new Card ("Genuine human connection.");
var whiteFortyFive = new Card ("Autocannibalism");
var whiteFortySix = new Card ("Being rich.");
var whiteFortySeven = new Card ("A runtime error has occurred.");
var whiteFortyEight = new Card ("The folly of man.");
var whiteFortyNine = new Card ("Grandma");
var whiteFifty = new Card ("The Make-A-Wish Foundation.");
var whiteFiftyOne = new Card ("Leprosy.");
var whiteFiftyTwo = new Card ("You've entered an inifinite loop.");
var whiteFiftyThree = new Card("Poor people.");
var whiteFiftyFour = new Card ("Laying an egg.");
var whiteFiftyFive = new Card ("World peace.");
var whiteFiftySix = new Card ("Shiny objects.");
var whiteFiftySeven = new Card ("Riding off into the sunset.");
var whiteFiftyEight = new Card ("Flesh-eating bacteria");
var whiteFiftyNine = new Card ("Poor life choices.");
var whiteSixty = new Card ("Whoever invented the Internet.");
var whiteSixtyOne = new Card ("Active listening.");
var whiteSixtyTwo = new Card ("Al Gore.");
var whiteSixtyThree = new Card ("Git commit.");
var whiteSixtyFour = new Card ("Discovering a new library.");
var whiteSixtyFive = new Card ("Not wearing pants.");
var whiteSixtySix = new Card ("Hospice care.");
var whiteSixtySeven = new Card ("Crumbs all over the god damn carpet.");
var whiteSixtyEight = new Card ("Cards Against Coders.");
var whiteSixtyNine = new Card ("Cuddling.");
var whiteSeventy = new Card ("Being a motherfucking sorcerer.");
var whiteSeventyOne = new Card ("Kanye West");
var whiteSeventyTwo = new Card ("The American Dream.");
var whiteSeventyThree = new Card ("GoGurt.");
var whiteSeventyFour = new Card ("404 page not found.");
var whiteSeventyFive = new Card ("The invisible hand.");
var whiteSeventySix = new Card ("Crippling debt.");
var whiteSeventySeven = new Card ("The Trail of Tears.");
var whiteSeventyEight = new Card ("The light of a billion suns.");
var whiteSeventyNine = new Card ("The Boy Scouts of America.");
var whiteEighty = new Card ("Being marginalzed.");
var whiteEightyOne = new Card ("Being on fire");
var whiteEightyTwo = new Card ("Racism");
var whiteEightyThree = new Card ("Old people smell.");
var whiteEightyFour = new Card ("Dungeons and Dragons.");
var whiteEightyFive = new Card ("Coffee IV drip.");
var whiteEightySix = new Card ("Classist undertones.");
var whiteEightySeven = new Card ("Not giving a shit about the Third World.");
var whiteEightyEight = new Card ("Zombie Steve Jobs.");
var whiteEightyNine = new Card ("Court-ordered rehab.");
var whiteNinety = new Card ("A windmill full of corpses.");
var whiteNinetyOne = new Card ("Hotdog || !Hotdog.");
var whiteNinetyTwo = new Card ("An oversized lollipop");
var whiteNinetyThree = new Card ("Have you tried turning it off and back on again.");
var whiteNinetyFour = new Card ("Pied Piper.");
var whiteNinetyFive = new Card ("Bingeing and purging.");
var whiteNinetySix = new Card ("Twitter.");
var whiteNinetySeven = new Card ("An Oedipus complex.");
var whiteNinetyEight = new Card ("A tiny horse.");
var whiteNinetyNine = new Card ("Boogers.");
var whiteOneHundred = new Card ("It’s a syntactical error..");
var whiteOneHundredOne = new Card ("Barack Obama.");
var whiteOneHundredTwo = new Card ("My humps.");
var whiteOneHundredThree = new Card ("The Tempur-Pedic Swedish Sleep System.");
var whiteOneHundredFour = new Card ("Scientology.");
var whiteOneHundredFive = new Card ("Dry heaving.");
var whiteOneHundredSix = new Card ("Skeletor.");
var whiteOneHundredSeven = new Card ("Darth Vader.");
var whiteOneHundredEight = new Card ("Figgy pudding.");
var whiteOneHundredNine = new Card ("Advice from a wise, old man.");
var whiteOneHundredTen = new Card ("Five-Dollar Footlongs.");
var whiteOneHundredEleven = new Card ("Hackers.");
var whiteOneHundredTwelve = new Card ("Free samples.");
var whiteOneHundredThirteen = new Card ("Estrogen.");
var whiteOneHundredFourteen = new Card ("Sexual tension.");
var whiteOneHundredFifteen = new Card ("Famine.");
var whiteOneHundredSixteen = new Card ("Steve Buscemi eyes.");
var whiteOneHundredSeventeen = new Card ("Men.");
var whiteOneHundredEighteen = new Card ("Heartwarming orphans.");
var whiteOneHundredNineteen = new Card ("Chunks of dead hitchhiker.");
var whiteOneHundredTwenty = new Card ("A bag of magic beans.");
var whiteOneHundredTwentyOne = new Card ("Repression.");
var whiteOneHundredTwentyTwo = new Card ("Prancing.");
var whiteOneHundredTwentyThree = new Card ("Overcompensation.");
var whiteOneHundredTwentyFour = new Card ("Peeing a little bit.");
var whiteOneHundredTwentyFive = new Card ("Pooping back and forth. Forever.");
var whiteOneHundredTwentySix = new Card ("Fake news.");
var whiteOneHundredTwentySeven = new Card ("NaN.");
var whiteOneHundredTwentyEight = new Card ("The Devil Himself.");
var whiteOneHundredTwentyNine = new Card ("The World of Warcraft.");
var whiteOneHundredThirty = new Card ("Dick Cheney.");
var whiteOneHundredThirtyOne = new Card ("Always float left.");
var whiteOneHundredThirtyTwo = new Card ("Being fabulous.");
var whiteOneHundredThirtyThree = new Card ("Epicodus.");
var whiteOneHundredThirtyFour = new Card ("Electronic music.");
var whiteOneHundredThirtyFive = new Card ("The Amish.");
var whiteOneHundredThirtySix = new Card ("Truthy. Falsey.");
var whiteOneHundredThirtySeven = new Card ("[Object Object]");
var whiteOneHundredThirtyEight = new Card ("The Pope.");
// end of white cards
var blackCards = [blackOne, blackTwo, blackThree, blackFour, blackFive, blackSix, blackSeven, blackEight, blackNine, blackTen, blackEleven, blackTwelve, blackThirteen, blackFourteen, blackFifteen, blackSixteen, blackSeventeen, blackEighteen, blackNineteen, blackTwenty];
var whiteCards = [whiteOne, whiteTwo, whiteThree, whiteFour, whiteFive, whiteSix, whiteSeven, whiteEight, whiteNine, whiteTen, whiteEleven, whiteTwelve, whiteThirteen, whiteFourteen, whiteFifteen, whiteSixteen, whiteSeventeen, whiteEighteen, whiteNineteen, whiteTwenty, whiteTwentyOne, whiteTwentyTwo, whiteTwentyThree, whiteTwentyFour, whiteTwentyFive, whiteTwentySix, whiteTwentySeven, whiteTwentyEight, whiteTwentyNine, whiteThirty, whiteThirtyOne, whiteThirtyTwo, whiteThirtyThree, whiteThirtyFour, whiteThirtyFive, whiteThirtySix, whiteThirtySeven, whiteThirtyEight, whiteThirtyNine, whiteForty, whiteFortyOne, whiteFortyTwo, whiteFortyThree, whiteFortyFour, whiteFortyFive, whiteFortySix, whiteFortySeven, whiteFortyEight, whiteFortyNine, whiteFifty, whiteFiftyOne, whiteFiftyTwo, whiteFiftyThree, whiteFiftyFour, whiteFiftyFive, whiteFiftySix, whiteFiftySeven, whiteFiftyEight, whiteFiftyNine, whiteSixty, whiteSixtyOne, whiteSixtyTwo, whiteSixtyThree, whiteSixtyFour, whiteSixtyFive, whiteSixtySix, whiteSixtySeven, whiteSixtyEight, whiteSixtyNine, whiteSeventy, whiteSeventyOne, whiteSeventyTwo, whiteSeventyThree, whiteSeventyFour, whiteSeventyFive, whiteSeventySix, whiteSeventySeven, whiteSeventyEight, whiteSeventyNine, whiteEighty, whiteEightyOne, whiteEightyTwo, whiteEightyThree, whiteEightyFour, whiteEightyFive, whiteEightySix, whiteEightySeven, whiteEightyEight, whiteEightyNine, whiteNinety, whiteNinetyOne, whiteNinetyTwo, whiteNinetyThree, whiteNinetyFour, whiteNinetyFive, whiteNinetySix, whiteNinetySeven, whiteNinetyEight, whiteNinetyNine, whiteOneHundred, whiteOneHundredOne, whiteOneHundredTwo, whiteOneHundredThree, whiteOneHundredFour, whiteOneHundredFive, whiteOneHundredSix, whiteOneHundredSeven, whiteOneHundredEight, whiteOneHundredNine, whiteOneHundredTen, whiteOneHundredEleven, whiteOneHundredTwelve, whiteOneHundredThirteen, whiteOneHundredFourteen, whiteOneHundredFifteen, whiteOneHundredSixteen, whiteOneHundredSeventeen, whiteOneHundredEighteen, whiteOneHundredNineteen, whiteOneHundredTwenty, whiteOneHundredTwentyOne, whiteOneHundredTwentyTwo, whiteOneHundredTwentyThree, whiteOneHundredTwentyFour, whiteOneHundredTwentyFive, whiteOneHundredTwentySix, whiteOneHundredTwentySeven, whiteOneHundredTwentyEight, whiteOneHundredTwentyNine, whiteOneHundredThirtyOne, whiteOneHundredThirtyTwo, whiteOneHundredThirtyThree, whiteOneHundredThirtyFour, whiteOneHundredThirtyFive, whiteOneHundredThirtySix, whiteOneHundredThirtySeven, whiteOneHundredThirtyEight];

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

// player1.drawHand(player1);
// console.log(player1.hand);
// player2.drawHand(player2);
// console.log(player2.hand);
// player3.drawHand(player3);
// console.log(player3.hand);
// player4.drawHand(player4);
// console.log(player4.hand);
// draw black card for playesr


// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player4);
//

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
    player1.turn = true;
    player1.turnPlay = false;
    // hide start view, reveal black-card-draw and player-hand-view
    $("div#load").hide();
    $("#game").show();


    $("button#button-black-card-draw").click(function() {
      drawAction();
      if (player1.turn === true) {
        player1.drawBlackHand(player1);
        $("span#black-card-content").text(player1.blackCard);
      } else if ( player2.turn === true) {
        player2.drawBlackHand(player2);
        $("span#black-card-content").text(player2.blackCard);
      } else if ( player3.turn === true) {
        player3.drawBlackHand(player3);
        $("span#black-card-content").text(player3.blackCard);
      }else if( player4.turn === true) {
        player4.drawBlackHand(player4);
        $("span#black-card-content").text(player4.blackCard);
      }
      $("div#play-turn").hide();
      $("div#black-card-draw").show();
      $("div#round-start-view").show();
    });

    $("button#round-start").click(function() {
      $("div#round-start-view").hide();
      checkTurn();
    });

    $("form#winner-pick").submit(function(event) {
      event.preventDefault();
        var selectTheWinner = $("input[name='player-hand']:checked").val();

        //Things we need here on this button click:
        // Pick the winner and award the point
        // Check each player's total against the goal
        // If game continues to next round, draw new card and start new hand
    });



    // Start of Interface functions

    var drawAction = function(){
      player1.drawHand(player1);
      player2.drawHand(player2);
      player3.drawHand(player3);
      player4.drawHand(player4);
    }

    var runPlayer1Turn = function(){
      $("#player1-name-display").text(player1.name);
      $("span#player1-card-content-one").text(player1.hand[0]);
      $("input#player1-one-card").val(player1.hand[0]);
      $("span#player1-card-content-two").text(player1.hand[1]);
      $("input#player1-two-card").val(player1.hand[0]);
      $("span#player1-card-content-three").text(player1.hand[2]);
      $("input#player1-three-card").val(player1.hand[0]);
      $("span#player1-card-content-four").text(player1.hand[3]);
      $("input#player1-four-card").val(player1.hand[0]);
      $("span#player1-card-content-five").text(player1.hand[4]);
      $("input#player1-five-card").val(player1.hand[0]);
      $("span#player1-card-content-six").text(player1.hand[5]);
      $("input#player1-six-card").val(player1.hand[0]);
      $("form#player1-hand").submit(function(event) {
        event.preventDefault();
        var whiteCardPlayed = $("input[name='player1-hand']:checked").val();
        console.log(whiteCardPlayed);
        player1.hold.push(whiteCardPlayed);
        //Things we need here on this button click:
        // Assign card to empty array for player
        // Trigger function/Reset for next player selection (2x)
        // on the last player's turn, hide view, and show winner-pick-view
        player1.turnPlay = false;
        console.log(player1);
        console.log(player1.turnPlay);
        $(this).trigger('reset');
        $("form#player1-hand").hide();
        checkTurn();
      });
    }

    var runPlayer2Turn = function(){
      $("#player2-name-display").text(player2.name);
      $("span#player2-card-content-one").text(player2.hand[0]);
      $("input#player2-one-card").val(player2.hand[0]);
      $("span#player2-card-content-two").text(player2.hand[1]);
      $("input#player2-two-card").val(player2.hand[1]);
      $("span#player2-card-content-three").text(player2.hand[2]);
      $("input#player2-three-card").val(player2.hand[2]);
      $("span#player2-card-content-four").text(player2.hand[3]);
      $("input#player2-four-card").val(player2.hand[3]);
      $("span#player2-card-content-five").text(player2.hand[4]);
      $("input#player2-five-card").val(player2.hand[4]);
      $("span#player2-card-content-six").text(player2.hand[5]);
      $("input#player2-six-card").val(player2.hand[5]);
      $("form#player2-hand").submit(function(event) {
        event.preventDefault();
        var whiteCardPlayed = $("input[name='player2-hand']:checked").val();
        console.log(whiteCardPlayed);
        player2.hold.push(whiteCardPlayed);
        //Things we need here on this button click:
        // Assign card to empty array for player
        // Trigger function/Reset for next player selection (2x)
        // on the last player's turn, hide view, and show winner-pick-view
        player2.turnPlay = false;
        console.log(player2);
        console.log(player2.turnPlay);
        $(this).trigger('reset');
        $("form#player2-hand").hide();
        checkTurn();
      });
    }

    var runPlayer3Turn = function(){
      $("#player3-name-display").text(player3.name);
      $("span#player3-card-content-one").text(player3.hand[0]);
      $("input#player3-one-card").val(player3.hand[0]);
      $("span#player3-card-content-two").text(player3.hand[1]);
      $("input#player3-two-card").val(player3.hand[1]);
      $("span#player3-card-content-three").text(player3.hand[2]);
      $("input#player3-three-card").val(player3.hand[2]);
      $("span#player3-card-content-four").text(player3.hand[3]);
      $("input#player3-four-card").val(player3.hand[3]);
      $("span#player3-card-content-five").text(player3.hand[4]);
      $("input#player3-five-card").val(player3.hand[4]);
      $("span#player3-card-content-six").text(player3.hand[5]);
      $("input#player3-six-card").val(player3.hand[5]);
      $("form#player3-hand").submit(function(event) {
        event.preventDefault();
        var whiteCardPlayed = $("input[name='player3-hand']:checked").val();
        console.log(whiteCardPlayed);
        player3.hold.push(whiteCardPlayed);
        //Things we need here on this button click:
        // Assign card to empty array for player
        // Trigger function/Reset for next player selection (2x)
        // on the last player's turn, hide view, and show winner-pick-view
        player3.turnPlay = false;
        console.log(player3);
        console.log(player3.turnPlay);
        $(this).trigger('reset');
        $("form#player3-hand").hide();
        checkTurn();
      });
    }
    var runPlayer4Turn = function(){
      $("#player4-name-display").text(player4.name);
      $("span#player4-card-content-one").text(player4.hand[0]);
      $("input#player4-one-card").val(player4.hand[0]);
      $("span#player4-card-content-two").text(player4.hand[1]);
      $("input#player4-two-card").val(player4.hand[1]);
      $("span#player4-card-content-three").text(player4.hand[2]);
      $("input#player4-three-card").val(player4.hand[2]);
      $("span#player4-card-content-four").text(player4.hand[3]);
      $("input#player4-four-card").val(player4.hand[3]);
      $("span#player4-card-content-five").text(player4.hand[4]);
      $("input#player4-five-card").val(player4.hand[4]);
      $("span#player4-card-content-six").text(player4.hand[5]);
      $("input#player4-six-card").val(player4.hand[5]);
      $("form#player4-hand").submit(function(event) {
        event.preventDefault();
        var whiteCardPlayed = $("input[name='player4-hand']:checked").val();
        console.log(whiteCardPlayed);
        player4.hold.push(whiteCardPlayed);
        //Things we need here on this button click:
        // Assign card to empty array for player
        // Trigger function/Reset for next player selection (2x)
        // on the last player's turn, hide view, and show winner-pick-view
        player4.turnPlay = false;
        console.log(player4);
        console.log(player4.turnPlay);
        $(this).trigger('reset');
        $("form#player4-hand").hide();
        checkTurn();
      });
    }

    var checkTurn = function(){
      if (player1.turnPlay === true) {
        $("form#player1-hand").show();
        runPlayer1Turn();
      } else if (player2.turnPlay === true){
        $("form#player2-hand").show();
        runPlayer2Turn();
      } else if (player3.turnPlay === true){
        $("form#player3-hand").show();
        runPlayer3Turn();
      } else if (player4.turnPlay === true){
        $("form#player4-hand").show();
        runPlayer4Turn();
      } else {
        ShowWhiteCardPlayed();
      }
    }

    var ShowWhiteCardPlayed = function(){
      $("div#winner-pick-view").show();
      $("div.hide").hide();
      if (player1.turn === false){
        $("div#card-one").show();
        $("span#played-white-card-one").text(player1.hold);
      }
      if (player2.turn === false) {
        $("div#card-two").show();
        $("span#played-white-card-two").html(player2.hold);
      }
      if (player3.turn === false) {
        $("div#card-three").show();
        $("span#played-white-card-three").text(player3.hold);
      }
      if (player4.turn === false) {
        $("div#card-four").show();
        $("span#played-white-card-four").text(player4.hold);
      }
    }
  });
});
