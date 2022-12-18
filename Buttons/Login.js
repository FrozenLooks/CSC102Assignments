function checkCreds(){
    console.log("Checking Credentials");
    //create the name and badge variables and fill them in
    var firstName = document.getElementById("firstName").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lastName").value;
    console.log("Last Name: " + lastName);
    var badgeNum = document.getElementById("badgeNumber").value;
    console.log("Badge Number: " + badgeNum);

    //name a fullName variable 
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);

    //check if full name is 20 chars or less
    var fullNameLen = fullName.length - 1;
    console.log("Full Name Length: " + fullNameLen);
    if(fullNameLen >20){
        document.getElementById("loginCheck").innerHTML = 
            "Full name has too many characters, please request a shorter name and resubmit.";
    }   else if(firstName == 0 || lastName == 0 || fullNameLen < 2) {
        document.getElementById("loginCheck").innerHTML = 
            "Invalid, please enter both a first and last name";
    }   
    //check if the badge number is less than 1000
        else if(badgeNum > 999 || badgeNum < 1){
        document.getElementById("loginCheck").innerHTML =
        "Invalid, please enter a proper badge number";
    }
    //if everything is ok, then grant access to the webpage
        else {
            alert("Access Granted, Welcome to UAT Space, " + fullName);
            location.replace("./StatsPage.html")
    }    
}