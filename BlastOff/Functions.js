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
