//sets currTime, the current time on the blast off countdown
var currTime = 50

//counts down from 50 and blasts off
function blastOff(){
    document.getElementById("blastOffText").innerHTML = currTime;
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 5000);
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 10000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 15000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 20000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 25000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 30000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 35000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 40000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
    }, 45000);    
    setTimeout(function(){
        currTime = currTime - 5;
        console.log (currTime);
        document.getElementById("blastOffText").innerHTML = "You've Blasted Off!";
        alert("Blast Off!")
    }, 50000);
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
}