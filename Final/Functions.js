//audio variables
const dialUpAudio = new Audio("DialUpModem.mp3")
const receiverClick = new Audio("ReceiverClick.mp3")
const cardFlip = new Audio("Cardflip.mp3")

//Page Navigation
function goToLogin(){
    location.replace("./LoginPage.html")
}
function goToGames(){
    location.replace("./GamesPage.html")
}
function goToStats(){
    location.replace("./StatsPage.html")
}

//These are games
function betterBlastOff(){
    //Initializes all useful variables in BlastOff
    var startTime = 10
    var currTime = 10
    var increment = 1
    //console.log helps keep track of errors and current site happenings
    console.log(currTime + " seconds left until Blast Off!");
    //sets up a for loop that runs until it's incremented enough to hit the startTime
    for(var i = 0; i <= startTime; i += increment){
        setTimeout(function(){ 
        console.log(currTime + " seconds left!");
            document.getElementById("blastOffText").innerHTML = currTime;
            //allows for different outcomes based on what number is currently on screen, if it hit 0, you've blasted off, if you're at 1/2 of the starting time, you're halfway there
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "We've Blasted Off!";
            }
            else if(currTime == startTime / 2){
                document.getElementById("blastOffText").innerHTML = currTime + "! Halfway there!";
            }
            else{
                document.getElementById("blastOffText").innerHTML = currTime + " seconds left!";
            }
            //reduces the current time so the text is accurate
            currTime = currTime - increment;
        }, 1000 * i);
    }
}
//variable needs to be global so that the other function can see it
var yourCardName = "Blank of Blank"
//defines the card that you pick
function yourCard(){
    //sets up each local variable, randomSuit and randomValue pull from the craps example of choosing a random number, cardSuit and cardValue are just initializing
    var randomSuit = Math.ceil(Math.random()*4);
    var randomValue = Math.ceil(Math.random()*13);
    var cardSuit = "Hearts";
    var cardValue = "Ace";
    console.log(randomSuit + " and " + randomValue)
    //turns the randomSuit number into a common card suit
    if (randomSuit == 1){
        cardSuit = "Hearts";
    }
    else if (randomSuit == 2){
        cardSuit = "Spades";
    }
    else if (randomSuit == 3){
        cardSuit = "Diamonds";
    }
    else {
        cardSuit = "Clubs";
    };
    console.log(cardSuit);
    //turns randomValue's commonly exchanged numbers into works, like Ace for 1, King for 13, etc. Leaves other values alone
    if (randomValue == 1){
        cardValue = "Ace";
    }
    else if (randomValue == 11){
        cardValue = "Jack";
    }
    else if (randomValue == 12){
        cardValue = "Queen";
    }
    else if (randomValue == 13){
        cardValue = "King";
    }
    else {
        cardValue = randomValue;
    };
    console.log(cardValue);
    //turns the value and suit into a proper card title
    yourCardName = cardValue + " of " + cardSuit;
    //makes your picked card a part of the website
    document.getElementById("yourCard").innerHTML = "*You picked " + yourCardName + "*";
    //checks if he got your card right, by picking the same card as you or not
    if (pickedCardName == yourCardName){
        document.getElementById("isThisYourCard").innerHTML = "I was right!"
    }
    else {
        document.getElementById("isThisYourCard").innerHTML = "Just kidding! Pick again!"
    }
    //plays audio of a card being flipped
    cardFlip.play()
    cardFlip.cloneNode().play()
}
//variable needs to be global so the other function can see it
var pickedCardName = "Value of Suit"
//defines the card that the website picks
function pickedCard(){
    //sets up each local variable, randomSuit and randomValue pull from the craps example of choosing a random number, cardSuit and cardValue are just initializing
    var randomSuit = Math.ceil(Math.random()*4);
    var randomValue = Math.ceil(Math.random()*13);
    var cardSuit = "Suit";
    var cardValue = "Value";
    console.log(randomSuit + " and " + randomValue)
    //turns the randomSuit number into a common card suit
    if (randomSuit == 1){
        cardSuit = "Hearts";
    }
    else if (randomSuit == 2){
        cardSuit = "Spades";
    }
    else if (randomSuit == 3){
        cardSuit = "Diamonds";
    }
    else {
        cardSuit = "Clubs";
    };
    console.log(cardSuit);
    //turns randomValue's commonly exchanged numbers into works, like Ace for 1, King for 13, etc. Leaves other values alone
    if (randomValue == 1){
        cardValue = "Ace";
    }
    else if (randomValue == 11){
        cardValue = "Jack";
    }
    else if (randomValue == 12){
        cardValue = "Queen";
    }
    else if (randomValue == 13){
        cardValue = "King";
    }
    else {
        cardValue = randomValue;
    };

    console.log(cardValue);
    //turns the value and suit into a proper card title
    pickedCardName = cardValue + " of " + cardSuit;
    //makes the guessed card a part of the website
    document.getElementById("pickedCard").innerHTML = "Your card is " + pickedCardName + "!";
    //checks if he got your card right, by picking the same card as you or not
    if (pickedCardName == yourCardName){
        document.getElementById("isThisYourCard").innerHTML = "I was right!"
    }
    else {
        document.getElementById("isThisYourCard").innerHTML = "Just kidding! Pick again!"
    }
    //plays audio of a card being flipped
    cardFlip.play()
    cardFlip.cloneNode().play()
}

//This is for the statistics page
function buttonStart(){
    console.log("Start disabled, Stop enabled");
    //starts and loops the dialUpAudio sound when start is pressed
    dialUpAudio.loop = true;
    dialUpAudio.play();
    //updates the table to act like it's getting data
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function buttonStop(){
    console.log("Stop disabled, Start enabled")
    //pauses the dialUpAudio audio and plays a click, as if someone had hung up the dialup
    dialUpAudio.pause();
    receiverClick.play();
    //resets the seconds row to its original state
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td></tr>"
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

