function Card(info, number) {
  this.info = info;
  this.number = number;
}

var blackCard = {
  one: new Card("I got 99 problems but __________ ain't one", 1),
  two: new Card("Alternative medicine is now embracing the curative powers of __________", 2),
  three: new Card("Why can't I sleep at night?", 3),
  four: new Card("Whats that sound?", 4),
  five: new Card ("What is Batman's guilty pleasure?", 5),
  six: new Card ("I'm sorry, Dave, but I couldn't complete my homework because of __________", 6),
  seven: new Card ("What's a girl's best friend?", 7),
  eight: new Card ("I get by with a little help from __________", 8),
  nine: new Card ("__________. Betcha can't have just one!", 9),
  ten: new Card ("White people like __________.", 10),
  eleven: new Card ("__________. High five, bro.", 11),
  twelve: new Card ("In 1000 years, when paper money is a distant memory, how will we pay for goods and services?", 12),
  thirteen: new Card ("What are my parents hiding from me?", 13),
  fourteen: new Card ("How am I maintaining my relationship status?", 14),
  fifteen: new Card ("__________. It's a trap!", 15),
  sixteen: new Card ("The class field trip was completely ruined by __________.", 16),
  seventeen: new Card ("What will I bring back in time to convince people that I am a powerful wizard?", 17),
  eighteen: new Card ("But before I kill you, Mr. Bond, I must show you __________.", 18),
  nineteen: new Card ("While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on __________.", 19),
  twenty: new Card ("Daddy, why is mommy crying?", 20)
};

var whiteCard = {
  one: new Card("Daddy issues.", 1),
  two: new Card("White people.", 2),
  three: new Card("Vikings.", 3),
  four: new Card("A can of whoop ass.", 4),
  five: new Card ("Republicans", 5),
  six: new Card ("A lifetime of sadness.", 6),
  seven: new Card ("A cooler full of organs.", 7),
  eight: new Card ("Puppies!", 8),
  nine: new Card ("Brown people", 9),
  ten: new Card ("Nazis", 10),
  eleven: new Card ("The Big Bang", 11),
  twelve: new Card ("Switching to Geico.", 12),
  thirteen: new Card ("Soup that is too hot.", 13),
  fourteen: new Card ("Dropping a chandelier on your enemies and riding the rope up.", 14),
  fifteen: new Card ("pulling out.", 15),
  sixteen: new Card ("Hormone injections.", 16),
  seventeen: new Card ("Giving 110%.", 17),
  eighteen: new Card ("Giving birth to the Antichrist.", 18),
  nineteen: new Card ("Assless chaps.", 19),
  twenty: new Card ("The miracle of childbirth.", 20),
  twentyOne: new Card ("waiting 'til marriage.'", 21),
  twentyTwo: new Card ("The glass ceiling.", 22),
  twentyThree: new Card ("Hot People", 23),
  twentyFour: new Card ("Dark and mysterious forces beyond our control.", 24),
  twentyFive: new Card ("The hustle.", 25),
  twentySix: new Card ("The Underground Railroad.", 26),
  twentySeven: new Card ("Hope.", 27),
  twentyEight: new Card ("Natural selection.", 28),
  twentyNine: new Card ("A gassy antelope.", 29),
  thirty: new Card ("Getting really high.", 30),
  thirtyOne: new Card ("Smallpox blankets.", 31),
  thirtyTwo: new Card ("Third base.", 32),
  thirtyThree: new Card ("Taking off your shirt.", 33),
  thirtyFour: new Card ("Arnold Schwarzenegger.", 34),
  thirtyFive: new Card ("An ugly face.", 35),
  thirtySix: new Card ("BATMAN!!!", 36),
  thirtySeven: new Card ("Homeless people", 37),
  thirtyEight: new Card ("Seppuku.", 38),
  thirtyNine: new Card ("My black ass.", 39),
  forty: new Card ("Pixelated bukkake.", 40),
  fortyOne: new Card ("72 virgins.", 41),
  fortyTwo: new Card ("An icepick lobotomy.", 42),
  fortyThree: new Card ("A salty surprise.", 43),
  fortyFour: new Card ("Genuine human connection.", 44),
  fortyFive: new Card ("Autocannibalism", 45),
  fortySix: new Card ("Being rich.", 46),
  fortySeven: new Card ("Dick fingers.", 47),
  fortyEight: new Card ("The folly of man.", 48),
  fortyNine: new Card ("Grandma", 49),
  fifty: new Card ("The Make-A-Wish Foundation.", 50),
  fiftyOne: new Card ("Leprosy.", 51),
  fiftyTwo: new Card ("Penis breath.", 52),
  fiftyThree: new Card("Poor people.", 53),
  fiftyFour: new Card ("Laying an egg.", 54),
  fiftyFive: new Card ("World peace.", 55),
  fiftySix: new Card ("shiny objects.", 56),
  fiftySeven: new Card ("Riding off into the sunset.", 57),
  fiftyEight: new Card ("Flesh-eating bacteria", 58),
  fiftyNine: new Card ("Poor life choices.", 59),
  sixty: new Card ("My vagina.", 60),
  sixtyOne: new Card ("Active listening.", 61),
  sixtyTwo: new Card ("The KKK.", 62),
  sixtyThree: new Card ("Black people.", 63),
  sixtyFour: new Card ("Hospice care.", 64),
  sixtyFive: new Card ("Not wearing pants.", 65),
  sixtySix: new Card ("Hospice care.", 66),
  sixtySeven: new Card ("Crumbs all over the god damn carpet.", 67),
  sixtyEight: new Card ("Cards Against Humanity.", 68),
  sixtyNine: new Card ("Cuddling.", 69),
  seventy: new Card ("Being a motherfucking sorcerer.", 70),
  seventyOne: new Card ("kanye West", 71),
  seventyTwo: new Card ("The American Dream.", 72),
  seventyThree: new Card ("GoGurt.", 73),
  seventyFour: new Card ("White-man scalps.", 74),
  seventyFive: new Card ("The invisible hand.", 75),
  seventySix: new Card ("Crippling debt.", 76),
  seventySeven: new Card ("The Trail of Tears.", 77),
  seventyEight: new Card ("The light of a billion suns.", 78),
  seventyNine: new Card ("The Boy Scouts of America.", 79),
  eighty: new Card ("Being marginalzed.", 80)
};



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
