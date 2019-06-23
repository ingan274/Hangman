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
        "location": "Los Angeles, CA, USA",
        "image": "./assets/images/n/naka.jpg",
        "hint": "She attended culinary school in Pasadena, after which she worked at Mori Sushie is partners with her Sous Chef"
    },
    {
        "name": "Alex Atala",
        "restaurant": "D.O.M",
        "location": "São Paulo, Brazil",
        "image": "./assets/images/D.O.M.jpg",
        "hint": "He's known for transforming traditional Brazilian dishes, adapting French and Italian culinary techniques to native Brazilian ingredients."
    },
    {
        "name": "Jeong Kwan",
        "restaurant": "She doesn't own a restaurant!",
        "location": " Baegyangsa Temple, South Korean",
        "image": "./assets/images/jeongkwan.jpg",
        "hint": "A monk with no traditional culinary training."
    },
    {
        "name": "Virgilio Martinez Veliz",
        "restaurant": "Central",
        "location": "Lima, Peru",
        "image": "./assets/images/central.jpg",
        "hint": "He is known for his use of unique ingredients such as a potato grown at 5,000 meters above sea level."
    },
    {
        "name": "Nancy Silverton",
        "restaurant": "MOZZA",
        "location": "Los Angeles, CA, USA",
        "image": "./assets/images/mozza.jpg",
        "hint": "She created LaBrea Bakery."
    },
    {
        "name": "Grant Achatz",
        "restaurant": "Alinea",
        "location": "Chicago, IL, USA",
        "image": "./assets/images/alinea.jpg",
        "hint": "He was diagnosed with stage 4 squamous cell carcinoma of the mouth."
    },
    {
        "name": "Asma Khan",
        "restaurant": "Darjeeling Express",
        "location": "London, United Kingdom",
        "image": "./assets/images/asmadarjeeling.jpg",
        "hint": "She created her restaurant with chefs that had no culinary background, but rather a love for food."
    },
    {
        "name": "Bo Songvisava",
        "restaurant": "Bo.Lan",
        "location": "Bangkok, Thailand",
        "image": "./assets/images/Bo.Lan.jpg",
        "hint": "She makes real Thai cuisine without the any western infleunce."
    },
    {
        "name": "Francis Mallmann",
        "restaurant": "Patagonia Sur",
        "location": "Buenos Aires, Argentina",
        "image": "./assets/images/PatagoniaSur.jpg",
        "hint": "He focuses on various Patagonian methods of barbecuing food."
    },
    {
        "name": "Albert Adria",
        "restaurant": "Tickets",
        "location": "Barcelona, Spain",
        "image": "./assets/images/Tickets.jpg",
        "hint": "He ramained in this older bother's shadow until her created his restaurant, Tickets."
    },
]

// References to HTML =======================================================================

var remaining = 10
var remainT = document.getElementById('remain');

var guess;
var guessT = document.getElementById('guess');
var usedletters = [];

var wordsremain = 10
var wordsremainT = document.getElementById('wordsremain');
wordsremainT.textContent = wordsremain;

var gamewins = 0;
var gamewinT = document.getElementById('wins');
gamewinT.textContent = gamewins;

var currentchef;

var chefname
var displayword;
var displaychef = document.getElementById('displayword');

//result features

var chefface;
var chefpic = document.getElementById('chefimage');

var chefstatT = document.getElementById('chefstat');

var locationT = document.getElementById('location');

var restaurantT = document.getElementById('restaurant');

var resultT = document.getElementById('result');

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
    // set hint = 
    hintlink = currentchef.hint;
    console.log(chefname);
    // set image = 
    chefface = currentchef.image;
};

//Initialize the GAME 

function initializeGame() {
    document.onkeyup = playTurn;
    // setting remaining to 10
    remaining = 10;
    remainT.textContent = remaining;
    // allowing letters used to be displayed
    usedletters = [];
    guessT.textContent = usedletters;
    // choosing current chef and all details
    currentchef = selectchef();
    // allowing the word display to be converted to _
    displayword = underscorechange();
    displaychef.textContent = displayword;
    // hiding final image and setting it up
    chefpic.src = chefface;
    chefpic.style.display = "none";
    // mute all stats
    chefstatT.style.display = "none";
    resultT.textContent = "";
    // hint for chef
    document.getElementById('hint').innerHTML = hintlink;
}

//convert to underscore
function underscorechange() {
    var displayunderscore = chefname.toLowerCase().replace(/[a-z]/g, "_")
    return displayunderscore
    console.log("change to underscore");
};


//reset function
var guessreset = function () {
    remaining = 10;
    document.getElementById('guess').innerHTML = "";
    usedletters = [];
}

// Show Stats
function showdeets() {
    locationT.textContent = currentchef.location;
    restaurantT.textContent = currentchef.restaurant;
}


// Updated status  of Wins thus far


// delete word from array

//next button
nextbutton.onclick = function () {
    nextbutton.style.display = "none";
    initializeGame();
}

// Actually Playing the games

function playTurn(play) {
    var userplay = play.key;
    userplay = userplay.toLowerCase();
    // limiting to just letters pressed
    if (parseInt(userplay) || userplay === "0") {
        return;
    }

    // Guess history
    if (usedletters.indexOf(guess) >= 0) {
        return;
        // this makes that repeating number not affect current changes
    } else {
        //this pushes the players incorrect guess to the usedArray and writes it to the HTML
        usedletters.push(guess);
        document.getElementById('guess').innerHTML = usedletters;
    }

    // replacing letters


}
