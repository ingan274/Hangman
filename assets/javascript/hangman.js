// VARIABLES =======================================================================

var opening = document.getElementById('opening');
var forkbutton = document.getElementById('fork');
var spoonbutton = document.getElementById('spoon');
var knifebutton = document.getElementById('knife');
var chopbutton = document.getElementById('chopstick');
var game = document.getElementById('game');

//list of check chefs 

var chef = [
    {
        "name": "Niki Nakayama",
        "restaurant": "n/naka",
        "donde": "Los Angeles, CA, USA",
        "image": "./assets/images/nnaka.jpg",
        "hint": "She attended culinary school in Pasadena, after which she worked at Mori Sushie is partners with her Sous Chef"
    },
    {
        "name": "Alex Atala",
        "restaurant": "D.O.M",
        "donde": "São Paulo, Brazil",
        "image": "./assets/images/DOM.jpg",
        "hint": "He's known for transforming traditional Brazilian dishes, adapting French and Italian culinary techniques to native Brazilian ingredients."
    },
    {
        "name": "Jeong Kwan",
        "restaurant": "She doesn't own a restaurant!",
        "donde": " Baegyangsa Temple, South Korean",
        "image": "./assets/images/jeongkwan.jpg",
        "hint": "A monk with no traditional culinary training."
    },
    {
        "name": "Virgilio Martinez Veliz",
        "restaurant": "Central",
        "donde": "Lima, Peru",
        "image": "./assets/images/central.jpg",
        "hint": "He is known for his use of unique ingredients such as a potato grown at 5,000 meters above sea level."
    },
    {
        "name": "Nancy Silverton",
        "restaurant": "MOZZA",
        "donde": "Los Angeles, CA, USA",
        "image": "./assets/images/mozza.jpg",
        "hint": "She created LaBrea Bakery."
    },
    {
        "name": "Grant Achatz",
        "restaurant": "Alinea",
        "donde": "Chicago, IL, USA",
        "image": "./assets/images/alinea.jpg",
        "hint": "He was diagnosed with stage 4 squamous cell carcinoma of the mouth."
    },
    {
        "name": "Asma Khan",
        "restaurant": "Darjeeling Express",
        "donde": "London, United Kingdom",
        "image": "./assets/images/asmadarjeeling.jpg",
        "hint": "She created her restaurant with chefs that had no culinary background, but rather a love for food."
    },
    {
        "name": "Bo Songvisava",
        "restaurant": "Bo.Lan",
        "donde": "Bangkok, Thailand",
        "image": "./assets/images/Bo.Lan.jpg",
        "hint": "She makes real Thai cuisine without the any western infleunce."
    },
    {
        "name": "Francis Mallmann",
        "restaurant": "Patagonia Sur",
        "donde": "Buenos Aires, Argentina",
        "image": "./assets/images/PatagoniaSur.jpg",
        "hint": "He focuses on various Patagonian methods of barbecuing food."
    },
    {
        "name": "Albert Adria",
        "restaurant": "Tickets",
        "donde": "Barcelona, Spain",
        "image": "./assets/images/Tickets.jpg",
        "hint": "His had created over 1.800 dishes for his former restaurant, El Bulli"
    },
]

// References to HTML =======================================================================

var remaining = 10;

var guess;
var guessT = document.getElementById('guess');
var usedletters = [];
var rightletters = [];

var wordremain = document.getElementById('wordsremain');
wordremain.textContent = chef.length;

var gamewins = 0;
var gamewinT = document.getElementById('wins');


var currentchef;

var chefname;
var displayword;
var displaychef = document.getElementById('displayword');

//result features

var chefface;
var chefpic = document.getElementById('chefimage');

var donde;

var restaurant;

var resultT = document.getElementById('result');

var outcome = document.getElementById('outcome')

var nextbutton = document.getElementById('next');

// hover hint feature
var hintlink;

// PLAY THE GAME (FUNCTIONS) =======================================================================

// start button //

function start(button) {
    button.onclick = function () {
        button.style.display = "none";
        opening.style.display = "none";
        game.style.display = "block";
        initializeGame();
    }

};

start(chopbutton);
start(knifebutton);
start(forkbutton);
start(spoonbutton);



// PLAY THE GAME

// select chef
function selectchef() {
    var randomchef = chef[Math.floor(Math.random() * chef.length)];
    currentchef = randomchef;
    // pulling name
    chefname = currentchef.name;
    console.log(chefname);
    // set hint = 
    hintlink = currentchef.hint;
    // set image = 
    chefface = currentchef.image;
    // restaurant
    restaurant = currentchef.restaurant;
    document.getElementById('restaurant').innerHTML = restaurant;
    // location
    donde = currentchef.donde
    document.getElementById('donde').innerHTML = donde;
};

// Reset
var guessreset = function () {
    document.getElementById('guess').innerHTML = "";
    usedletters = [];
    rightletters = [];
}


//Initialize the GAME 

function initializeGame() {
    // setting remaining to 10
    remaining = 10;
    document.getElementById('remain').textContent = remaining;
    // allowing letters used to be displayed
    usedletters = [];
    rightletters = [];
    guessT.textContent = usedletters;
    // choosing current chef and all details
    currentchef = selectchef();
    // allowing the word display to be converted to _
    displayword = underscorechange();
    displaychef.textContent = displayword;
    // hiding final image and setting it up
    chefpic.src = chefface;
    resultT.style.display = "none";
    outcome.textContent = "";
    // hint for chef
    document.getElementById('hint').innerHTML = hintlink;
    // guess reset
    document.getElementById('guess').innerHTML = "";
    usedletters = [];
    // show words remain
    document.getElementById('wordsremain').innerHTML = chef.length;
    document.onkeyup = playTurn;
}

//convert to underscore
function underscorechange() {
    var displayunderscore = chefname.toLowerCase().replace(/[a-z]/g, "_")
    return displayunderscore;
}

// Updated status of Wins thus far 
function byechef() {
    var byecheflist = chef.indexOf(currentchef);
    console.log (byecheflist)
    chef.splice(byecheflist, 1);
    
    wordremain.textContent = chef.length;
}

// Actually Playing the game
function playTurn(play) {
    guess = play.key;
    guess = guess.toUpperCase();
    chefname = chefname.toUpperCase();
    // limiting to just letters pressed
    if (parseInt(guess) || guess === "0" || guess === "," || guess === "." || guess === ";" || guess === "'") {
        return;
    }

    // pushing the letters into the right array
    // preventing from being pressed twice and affecting guess change
    if (usedletters.indexOf(guess) >= 0 || rightletters.indexOf(guess) >= 0) {
        return
    } else if (chefname.includes(guess)) {
        // pushing word letters to right letter array
        rightletters.push(guess);
    } else {
        //this pushes the players incorrect guess to the usedArray and writes it to the HTML and remian goes down
        usedletters.push(guess);
        var guess = usedletters.join(", ");
        document.getElementById('guess').innerHTML = guess.toUpperCase();
        remaining--;
        document.getElementById('remain').innerHTML = remaining;
    }

    if (remaining < 0) {
        nextbutton.style.display = "none";
        document.getElementById('wordsremain').innerHTML = wordsremain;
        initializeGame();
    }
    // User Guess match Letter ======

    for (var i = 0; i < chefname.length; i++) {
        // displaying correct letter
        if (rightletters.includes(chefname[i])) {
            var split = displayword.split("");
            split[i] = chefname[i];
            displayword = split.join("");
            displaychef.textContent = displayword.toUpperCase();
        }
    }


    // win
    if (displayword === chefname) {
        gamewins++;
        gamewinT.textContent = gamewins;
        console.log(gamewins)
        outcome.textContent = "You Got it! Nice Job!";
        chefpic.style.display = "block";
        resultT.style.display = "block";
        nextbutton.style.display = 'block';
        gamestatus();
        byechef()
    } else if (remaining === 0) { // losing the game
        displaychef.textContent = chefname;
        chefpic.style.display = "block";
        resultT.style.display = "block";
        outcome.textContent = "Oops! Better luck next time.";
        nextbutton.style.display = 'block';
        gamestatus();
        byechef()
    }

}

// next button
nextbutton.onclick = function () {
    nextbutton.style.display = "none";
    document.getElementById('wordsremain').innerHTML = wordsremain;
    initializeGame();
}

// Updated status  of Wins thus far 
function gamestatus() {
    if (chef.length > 0) {
        nextbutton.style.display = "block";
    } else if (chef.length === 0) {
        outcome.innerHTML = outcome.textContent + "<br> xThanks for playing! Refresh to Play Again.";
        console.log(outcome)
        wordsremain = 0;
        nextbutton.style.display = "none";
    }
}

// why my current chef is not leaving the array? and why is my 0 going to negative?