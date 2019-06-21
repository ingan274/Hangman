// VARIABLES

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
        "image": "../images/n/naka.jpg",
        "hint": "She attended culinary school in Pasadena, after which she worked at Mori Sushie is partners with her Sous Chef"
    },
    {
        "name": "Alex Atala",
        "restaurant": "D.O.M",
        "location": "São Paulo, Brazil",
        "image": "../images/D.O.M.jpg",
        "hint": "He's known for transforming traditional Brazilian dishes, adapting French and Italian culinary techniques to native Brazilian ingredients."
    },
    {
        "name": "Jeong Kwan",
        "restaurant": "She doesn't own a restaurant!",
        "location": " Baegyangsa Temple, South Korean",
        "image": "../images/jeongkwan.jpg",
        "hint": "A monk with no traditional culinary training."
    },
    {
        "name": "Virgilio Martinez Veliz",
        "restaurant": "Central",
        "location": "Lima, Peru",
        "image": "../images/central.jpg",
        "hint": "He is known for his use of unique ingredients such as a potato grown at 5,000 meters above sea level."
    },
    {
        "name": "Nancy Silverton",
        "restaurant": "MOZZA",
        "location": "Los Angeles, CA, USA",
        "image": "../images/mozza.jpg",
        "hint": "She created LaBrea Bakery."
    },
    {
        "name": "Grant Achatz",
        "restaurant": "Alinea",
        "location": "Chicago, IL, USA",
        "image": "../images/alinea.jpg",
        "hint": "He was diagnosed with stage 4 squamous cell carcinoma of the mouth."
    },
    {
        "name": "Asma Khan",
        "restaurant": "Darjeeling Express",
        "location": "London, United Kingdom",
        "image": "../images/asmadarjeeling.jpg",
        "hint": "She created her restaurant with chefs that had no culinary background, but rather a love for food."
    },
    {
        "name": "Bo Songvisava",
        "restaurant": "Bo.Lan",
        "location": "Bangkok, Thailand",
        "image": "../images/Bo.Lan.jpg",
        "hint": "She makes real Thai cuisine without the any western infleunce."
    },
    {
        "name": "Francis Mallmann",
        "restaurant": "Patagonia Sur",
        "location": "Buenos Aires, Argentina",
        "image": "../images/PatagoniaSur.jpg",
        "hint": "He focuses on various Patagonian methods of barbecuing food."
    },
    {
        "name": "Albert Adria",
        "restaurant": "Tickets",
        "location": "Barcelona, Spain",
        "image": "../images/Tickets.jpg",
        "hint": "He ramained in this older bother's shadow until her created his restaurant, Tickets."
    },
]

// References to HTML

var remaining = 10
var remainT = document.getElementById('remain');

var guess;
var guessT = document.getElementById('guess');
var usedletters = [];

var hintT = document.getElementById('hint');

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

var resultT = document.getElementById('result');

var nextbutton = document.getElementById('next');

// hover hint feature
var hintT = document.getElementById('hint')

// PLAY THE GAME (FUNCTIONS)

// start button //

forkbutton.onclick = function () {
    forkbutton.style.display = "none";
    opening.style.display = "none";
    game.style.display = "block";
    initializeGame();
    console.log(FORK)
};

spoonbutton.onclick = function () {
    spoonbutton.style.display = "none";
    opening.style.display = "none";
    game.style.display = "block";
    initializeGame();
    console.log(SPOON)
};

knifebutton.onclick = function () {
    knifebutton.style.display = "none";
    opening.style.display = "none";
    game.style.display = "block";
    initializeGame();
    console.log(KNIFE)
};

chopbutton.onclick = function () {
    chopbutton.style.display = "none";
    opening.style.display = "none";
    game.style.display = "block";
    initializeGame();
    console.log(CHOPSTICK)
};

// FUNCTIONS

function initializeGame() {
    document.onkeyup = playTurn;
    // setting remaining to 10
    remaining = 10;
    remainT.textContent = remaining;
    // allowing letters used to be displayed
    usedletters = [];
    guessT.textContent = usedletters;
    // choosing current chef via random selection
    currentchef = selectchef();
    currentchef = chef.name;
    // allowing the word display to be converted to _
    displayword = underscorechange();
    displaychef.textContent = displayword;
    // hiding final image and setting it up
    chefface = chef.image;
    chefpic.src = chefface;
    chefpic.style.display = "none";
    // mute all stats
    chefstatT.textContent = "";
    resultT.textContent = "";
}

// select chef
function selectchef () {
    var randomchef = chef[Math.floor(Math.random() * chef.length)];
    console.log("chef chosen");
};

//conver to underscore
function underscorechange() {
    var displayunderscore = chefname.replace(/[a-z]/, "_");
    return displayunderscore;
    console.log("change to underscore");
};


//reset function
var guessreset = function () {
    remaining = 10;
    document.getElementById('guess').innerHTML = "";
    usedletters = [];
}

function playTurn () {
    var userplay = play.key;

}

//next button
