function Player(userName, playerNumber){
  this.name = userName;
  this.playerNumber = playerNumber;
  this.points = 0;
  this.hand = [];
  this.blackCard = [];
  this.hold = [1];
  this.turn = false;
  this.turnPlay = true;
  this.win = false;
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
var blackSix = new Card ("I'm sorry Dave. But I couldn't complete my homework because of __________.");
var blackSeven = new Card ("What's a coder's best friend?");
var blackEight = new Card ("I get by with a little help from __________.");
var blackNine = new Card ("__________. Betcha can't have just one!");
var blackTen = new Card ("Programmers like __________.");
var blackEleven = new Card ("__________. High five bro.");
var blackTwelve = new Card ("In 1000 years, when paper money is a distant memory, how will we pay for goods and services?");
var blackThirteen = new Card ("What are my parents hiding from me?");
var blackFourteen = new Card ("How am I maintaining my relationship status?");
var blackFifteen = new Card ("__________. It's a trap!");
var blackSixteen = new Card ("The class field trip was completely ruined by __________.");
var blackSeventeen = new Card ("What will I bring back in time to convince people that I am a powerful wizard?");
var blackEighteen = new Card ("But before I kill you Mr. Bond. I must show you __________.");
var blackNineteen = new Card ("While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on __________.");
var blackTwenty = new Card ("Daddy? why is mommy crying?");
//Start of Expansion Pack of Black Cards:
var blackTwentyOne = new Card ("Undefined is null or not ______.");
var blackTwentyTwo = new Card ("________ error has occurred. Do you wish to continue?");
var blackTwentyThree = new Card ("programmer: An organism that turns _______ into software.");
var blackTwentyFour = new Card ("________ invented the Internet.");
var blackTwentyFive = new Card ("1 in 5 coders will experiment with ____________.");
var blackTwentySix = new Card (" ___________ is out of date.");
var blackTwentySeven = new Card ("________ are here because you broke something.");
var blackTwentyEight = new Card ("Why did the programmer quit his/her job?");
var blackTwentyNine = new Card ("______ write code that optimizes itself.");
var blackThirty = new Card ("Bill Gates, Mark Zuckerberg and _________ walk into a bar.");
var blackThirtyOne = new Card ("There's an app for ___________.");
var blackThirtyTwo = new Card ("And the Webby goes to _________.");
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
//Expansion Pack for White Cards:
var whiteOneHundredThirtyNine = new Card ("That doesn't look right");
var whiteOneHundredForty = new Card ("Computer Science");
var whiteOneHundredFortyOne = new Card ("Internet Explorer");
var whiteOneHundredFortyTwo = new Card ("Google it.");
var whiteOneHundredFortyThree = new Card ("Agile");
var whiteOneHundredFortyFour = new Card ("Foo bar");
var whiteOneHundredFortyFive = new Card ("Hello World!");
var whiteOneHundredFortySix = new Card ("Y2K");
var whiteOneHundredFortySeven = new Card ("Homestar runner.");
var whiteOneHundredFortyEight = new Card ("Nyan cat.");
var whiteOneHundredFortyNine = new Card ("Whiteboarding");
var whiteOneHundredFifty = new Card ("Siri");
var whiteOneHundredFiftyOne = new Card ("The Millennium Falcon");

// end of white cards
var blackCards = [blackOne, blackTwo, blackThree, blackFour, blackFive, blackSix, blackSeven, blackEight, blackNine, blackTen, blackEleven, blackTwelve, blackThirteen, blackFourteen, blackFifteen, blackSixteen, blackSeventeen, blackEighteen, blackNineteen, blackTwenty, blackTwentyOne, blackTwentyTwo, blackTwentyThree, blackTwentyFour, blackTwentyFive, blackTwentySix, blackTwentySeven, blackTwentyEight, blackTwentyNine, blackThirty, blackThirtyOne, blackThirtyTwo];
var whiteCards = [whiteOne, whiteTwo, whiteThree, whiteFour, whiteFive, whiteSix, whiteSeven, whiteEight, whiteNine, whiteTen, whiteEleven, whiteTwelve, whiteThirteen, whiteFourteen, whiteFifteen, whiteSixteen, whiteSeventeen, whiteEighteen, whiteNineteen, whiteTwenty, whiteTwentyOne, whiteTwentyTwo, whiteTwentyThree, whiteTwentyFour, whiteTwentyFive, whiteTwentySix, whiteTwentySeven, whiteTwentyEight, whiteTwentyNine, whiteThirty, whiteThirtyOne, whiteThirtyTwo, whiteThirtyThree, whiteThirtyFour, whiteThirtyFive, whiteThirtySix, whiteThirtySeven, whiteThirtyEight, whiteThirtyNine, whiteForty, whiteFortyOne, whiteFortyTwo, whiteFortyThree, whiteFortyFour, whiteFortyFive, whiteFortySix, whiteFortySeven, whiteFortyEight, whiteFortyNine, whiteFifty, whiteFiftyOne, whiteFiftyTwo, whiteFiftyThree, whiteFiftyFour, whiteFiftyFive, whiteFiftySix, whiteFiftySeven, whiteFiftyEight, whiteFiftyNine, whiteSixty, whiteSixtyOne, whiteSixtyTwo, whiteSixtyThree, whiteSixtyFour, whiteSixtyFive, whiteSixtySix, whiteSixtySeven, whiteSixtyEight, whiteSixtyNine, whiteSeventy, whiteSeventyOne, whiteSeventyTwo, whiteSeventyThree, whiteSeventyFour, whiteSeventyFive, whiteSeventySix, whiteSeventySeven, whiteSeventyEight, whiteSeventyNine, whiteEighty, whiteEightyOne, whiteEightyTwo, whiteEightyThree, whiteEightyFour, whiteEightyFive, whiteEightySix, whiteEightySeven, whiteEightyEight, whiteEightyNine, whiteNinety, whiteNinetyOne, whiteNinetyTwo, whiteNinetyThree, whiteNinetyFour, whiteNinetyFive, whiteNinetySix, whiteNinetySeven, whiteNinetyEight, whiteNinetyNine, whiteOneHundred, whiteOneHundredOne, whiteOneHundredTwo, whiteOneHundredThree, whiteOneHundredFour, whiteOneHundredFive, whiteOneHundredSix, whiteOneHundredSeven, whiteOneHundredEight, whiteOneHundredNine, whiteOneHundredTen, whiteOneHundredEleven, whiteOneHundredTwelve, whiteOneHundredThirteen, whiteOneHundredFourteen, whiteOneHundredFifteen, whiteOneHundredSixteen, whiteOneHundredSeventeen, whiteOneHundredEighteen, whiteOneHundredNineteen, whiteOneHundredTwenty, whiteOneHundredTwentyOne, whiteOneHundredTwentyTwo, whiteOneHundredTwentyThree, whiteOneHundredTwentyFour, whiteOneHundredTwentyFive, whiteOneHundredTwentySix, whiteOneHundredTwentySeven, whiteOneHundredTwentyEight, whiteOneHundredTwentyNine, whiteOneHundredThirtyOne, whiteOneHundredThirtyTwo, whiteOneHundredThirtyThree, whiteOneHundredThirtyFour, whiteOneHundredThirtyFive, whiteOneHundredThirtySix, whiteOneHundredThirtySeven, whiteOneHundredThirtyEight, whiteOneHundredThirtyNine, whiteOneHundredForty, whiteOneHundredFortyOne, whiteOneHundredFortyTwo, whiteOneHundredFortyThree, whiteOneHundredFortyFour, whiteOneHundredFortyFive, whiteOneHundredFortySix, whiteOneHundredFortySeven, whiteOneHundredFortyEight, whiteOneHundredFortyNine, whiteOneHundredFifty, whiteOneHundredFiftyOne];

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
  playerNumber.hold = [1];
  playerNumber.turn = false;
  playerNumber.turnPlay = true;
}

Player.prototype.pointsToggle = function(playerNumber) {
  playerNumber.points += 1;
}

Player.prototype.checkForWin = function(playerNumber) {
  if (playerNumber.points === 3) {
    playerNumber.win = true;
  }
}

//start front end

$(document).ready(function() {
  $("form#player-name").submit(function(event) {
    event.preventDefault();
    var playerOneName = $("input#player1-name").val();
    var playerTwoName = $("input#player2-name").val();
    var playerThreeName = $("input#player3-name").val();
    var playerFourName = $("input#player4-name").val();

    var player1 = new Player(playerOneName, 1);
    var player2 = new Player(playerTwoName, 2);
    var player3 = new Player(playerThreeName, 3);
    var player4 = new Player(playerFourName, 4);

    player1.turn = true;
    player1.turnPlay = false;

    $("#player-name-one").text(player1.name);
    $("#player-name-two").text(player2.name);
    $("#player-name-three").text(player3.name);
    $("#player-name-four").text(player4.name);
    $("span#player1-score").text(player1.points);
    $("span#player2-score").text(player2.points);
    $("span#player3-score").text(player3.points);
    $("span#player4-score").text(player4.points);
    $("div#load").hide();
    $("#game").show();

    $("button#button-black-card-draw").click(function() {
      drawAction();
      drawBlackCard();
      $("div#play-turn").hide();
      $("div#black-card-draw").show();
      $("div#round-start-view").show();
    });

    $("button#round-start").click(function() {
      $("div#round-start-view").hide();
      runPlayer1Turn();
    });

    $("form#winner-pick").submit(function(event) {
      event.preventDefault();
      var selectTheWinner = $("input[name='player-hand-selected']:checked").val();
      selectWinner(selectTheWinner);
      $(this).trigger('reset');
      endGame();
      $("div#winner-pick-view").hide();
      $("div#play-next-round-view").show();
    });

    $("button#play-next-round").click(function() {
      drawAction();
      drawBlackCard();
      $("div#play-next-round-view").hide();
      $("div#black-card-draw").show();
      $("div#round-start-view").show();
    });

    var selectWinner = function(selectTheWinner){
      if (selectTheWinner === "1") {
        player1.points += 1;
        $("span#player1-score").text(player1.points);
      } else if (selectTheWinner === "2") {
        player2.points += 1;
        $("span#player2-score").text(player2.points);
      } else if (selectTheWinner === "3") {
        player3.points += 1;
        $("span#player3-score").text(player3.points);
      } else if (selectTheWinner === "4") {
        player4.points += 1;
        $("span#player4-score").text(player4.points);
      }
    }

    var endGame = function() {
      var players = [player1, player2, player3, player4];
      players.forEach(function(player) {
        player.checkForWin(player);
      });
      if(player1.win === true || player2.win === true || player3.win === true || player4.win === true){
        players.forEach(function (player){
          if (player.win === true) {
            $("#winner-name").text(player.name);
            $(".hooray").show();
          } else {
            $("#losers").append(" " + player.name + ",");
          }
        });
      }

      if (player1.turn === true) {
        player1.reset(player1);
        player2.reset(player2);
        player3.reset(player3);
        player4.reset(player4);
        player2.turn = true;
        player2.turnPlay = false;
      } else if (player2.turn === false) {
        player1.reset(player1);
        player2.reset(player2);
        player3.reset(player3);
        player4.reset(player4);
        player2.turn = true;
        player2.turnPlay = false;
      } else if (player3.turn === false) {
        player1.reset(player1);
        player2.reset(player2);
        player3.reset(player3);
        player4.reset(player4);
        player4.turn = true;
        player4.turnPlay = false;
      } else if (player4.turn === false) {
        player1.reset(player1);
        player2.reset(player2);
        player3.reset(player3);
        player4.reset(player4);
        player1.turn = true;
        player1.turnPlay = false;
      }
    }

    var drawAction = function(){
      player1.drawHand(player1);
      player2.drawHand(player2);
      player3.drawHand(player3);
      player4.drawHand(player4);
    }

    var runPlayer1Turn = function(){
      if (player1.turnPlay === true) {
        $("form#player1-hand").show();
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
          if (player1.hand[0] === whiteCardPlayed) {
            player1.hand.splice(0,1);
          }
          if (player1.hand[1] === whiteCardPlayed) {
            player1.hand.splice(1,1);
          }
          if (player1.hand[2] === whiteCardPlayed) {
            player1.hand.splice(2,1);
          }
          if (player1.hand[3] === whiteCardPlayed) {
            player1.hand.splice(3,1);
          }
          if (player1.hand[4] === whiteCardPlayed) {
            player1.hand.splice(4,1);
          }
          if (player1.hand[5] === whiteCardPlayed) {
            player1.hand.splice(5,1);
          }
          player1.hold.push(whiteCardPlayed);
          player1.turnPlay = false;
          $(this).trigger('reset');
          $("form#player1-hand").hide();
          runPlayer2Turn();
        });
      } else {
        runPlayer2Turn();
      }
    }

    var runPlayer2Turn = function(){
      if (player2.turnPlay === true) {
        $("form#player2-hand").show();
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
          if (player2.hand[0] === whiteCardPlayed) {
            player2.hand.splice(0,1);
          }
          if (player2.hand[1] === whiteCardPlayed) {
            player2.hand.splice(1,1);
          }
          if (player2.hand[2] === whiteCardPlayed) {
            player2.hand.splice(2,1);
          }
          if (player2.hand[3] === whiteCardPlayed) {
            player2.hand.splice(3,1);
          }
          if (player2.hand[4] === whiteCardPlayed) {
            player2.hand.splice(4,1);
          }
          if (player2.hand[5] === whiteCardPlayed) {
            player2.hand.splice(5,1);
          }
          player2.hold.push(whiteCardPlayed);
          player2.turnPlay = false;
          $(this).trigger('reset');
          $("form#player2-hand").hide();
          runPlayer3Turn();
        });
      } else {
        runPlayer3Turn();
      }
    }

    var runPlayer3Turn = function(){
      if (player3.turnPlay === true) {
        $("form#player3-hand").show();
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
          if (player3.hand[0] === whiteCardPlayed) {
            player3.hand.splice(0,1);
          }
          if (player3.hand[1] === whiteCardPlayed) {
            player3.hand.splice(1,1);
          }
          if (player3.hand[2] === whiteCardPlayed) {
            player3.hand.splice(2,1);
          }
          if (player3.hand[3] === whiteCardPlayed) {
            player3.hand.splice(3,1);
          }
          if (player3.hand[4] === whiteCardPlayed) {
            player3.hand.splice(4,1);
          }
          if (player3.hand[5] === whiteCardPlayed) {
            player3.hand.splice(5,1);
          }
          player3.hold.push(whiteCardPlayed);
          player3.turnPlay = false;
          $(this).trigger('reset');
          $("form#player3-hand").hide();
          runPlayer4Turn();
        });
      }else {
        runPlayer4Turn();
      }
    }

    var runPlayer4Turn = function(){
      if (player4.turnPlay === true) {
        $("form#player4-hand").show();
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
          if (player4.hand[0] === whiteCardPlayed) {
            player4.hand.splice(0,1);
          }
          if (player4.hand[1] === whiteCardPlayed) {
            player4.hand.splice(1,1);
          }
          if (player4.hand[2] === whiteCardPlayed) {
            player4.hand.splice(2,1);
          }
          if (player4.hand[3] === whiteCardPlayed) {
            player4.hand.splice(3,1);
          }
          if (player4.hand[4] === whiteCardPlayed) {
            player4.hand.splice(4,1);
          }
          if (player4.hand[5] === whiteCardPlayed) {
            player4.hand.splice(5,1);
          }
          player4.hold.push(whiteCardPlayed);
          player4.turnPlay = false;
          $(this).trigger('reset');
          $("form#player4-hand").hide();
          ShowWhiteCardPlayed();
        });
      }else {
        ShowWhiteCardPlayed();
      }
    }

    var ShowWhiteCardPlayed = function(){
      $("div#winner-pick-view").show();
      $("div.hide").hide();
      if (player1.turn === false){
        $("div#card-one").show();
        $("span#played-white-card-one").text(player1.hold[1]);
      }
      if (player2.turn === false) {
        $("div#card-two").show();
        $("span#played-white-card-two").text(player2.hold[1]);
      }
      if (player3.turn === false) {
        $("div#card-three").show();
        $("span#played-white-card-three").text(player3.hold[1]);
      }
      if (player4.turn === false) {
        $("div#card-four").show();
        $("span#played-white-card-four").text(player4.hold[1]);
      }
    }

    var drawBlackCard = function() {
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
    }
  });
});
