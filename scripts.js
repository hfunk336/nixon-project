var dodgeCheck = 0;
var doubtCheck = 0;
var mcGovCard = document.getElementById("mcgovernCard");
var mcGovBtn = document.getElementById("mcgovernBtn");
var mcGovImg = document.getElementById("mcgovernImg");
var nixonBtn = document.getElementById("nixonBtn");

// sets a custom cursor when hovering over Mcgov card
// I, Beckham, signed here okay with the name of the png: BL 4/21/21 13:34
mcGovCard.style.cursor = "url(images/beckham.png) 0 0, url(images/nixon.png) 0 0, pointer"

// thanks the voter and changes the page when vote for Nixon
function voteNixon(){
    this.alert("Thank you for voting for Nixon!");
    window.location.assign(`finished.html`);
}

// Used later for the dodge function; creates random num
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// on click to see if user meant to vote for Nixon
mcGovBtn.onclick = () => {
    if(doubtCheck == 0){
        // when the user clicks the button the first time
        // prompts user to confirm they didn't want Nixon
        var voteCheck = confirm("Did you mean to vote for Nixon?");
        if(voteCheck == true){
            voteNixon();
        }else{
            alert("Fine then vote for McGovern already...");
            // changes Mcgov button text
            mcGovBtn.innerHTML = `Vote Nixon :3`
        }
    }else if(doubtCheck == 1){
        // when the user clicks a second time
        var voteCheck = confirm("You want Nixon to win, right? uWu");
        if(voteCheck == true){
            voteNixon();
        }else{
            // adds the dodge event to the button
            mcGovBtn.addEventListener("mouseenter", dodge);
            alert("If you want McGovern then just click on the button");
            mcGovBtn.innerHTML = `Vote McGovern D:`
        }
    }else if(doubtCheck == 2){
        // happens after the user is done with the dodge event
        var voteCheck = confirm("You still want to vote for McGovern??");
        if(voteCheck == true){
            alert("Fine be that way...");
        }else{
            voteNixon();
        }
        // resets the positon of the button back inside the Mcgov card
        mcGovBtn.style.position = `relative`;
        mcGovBtn.style.left = `0px`;
        mcGovBtn.style.top = `0px`;
        // removes the dodge event
        mcGovBtn.removeEventListener("mouseenter", dodge);
        // adds the follow event to the window
        window.addEventListener("mousemove", follow);
    }
        
    doubtCheck++;
}

// moves the Mcgov button when the mouse touches it
let dodge = (event) => {
    // fixed allows the button to be positioned anywhere
    mcGovBtn.style.position = `fixed`;
    var newX = 0;
    var newY = 0;
    // button will dodge 5 times
    if(dodgeCheck < 5){
        // gets random coordinates between 0-800 for x
        var newX = getRandomInt(800);
        // gets random coordinates between 0-500 for y
        var newY = getRandomInt(500);
        // sets the positon of the button to new coordinates
        mcGovBtn.style.left = `${newX}px`;
        mcGovBtn.style.top = `${newY}px`;
        dodgeCheck++;
    }else{
        // sets the button position to the same coordinate everytime so user can click
        // it afterwards
        mcGovBtn.style.left = `100px`;
        mcGovBtn.style.top = `100px`;
    }   
    
}

// makes the Nixon button track under the mouse
let follow = (event) => {
    // takes the position of the mouse and subtracts so the button remains underneath
    newX = event.clientX - 25;
    newY = event.clientY - 13;
    nixonBtn.style.position = `fixed`;
    nixonBtn.style.left = `${newX}px`;
    nixonBtn.style.top = `${newY}px`;
    // makes sure the button stays above every element on the page
    nixonBtn.style.index = 1;

    // the user cannot click anything else since the button remains underneath

    // removes the default onclick that instantly runs voteNixon
    nixonBtn.removeAttribute('onclick');
    // this confirms they want to vote for Nixon
    nixonBtn.addEventListener('click', maybeNixon);
}

// asks the user before they vote for Nixon so if not, they can continue through
// the remaining events
let maybeNixon = () => {
    var voteCheck = confirm("So you finally came around to voting for Nixon?")
    if(voteCheck == true){
        voteNixon();
    }else{
        alert("You're only making this harder on yourself :3");
    }
    // resets the position of the Nixon button
    nixonBtn.style.position = `relative`;
    nixonBtn.style.left = `0px`;
    nixonBtn.style.top = `0px`;

    // removes the event that makes the button follow the mouse
    window.removeEventListener("mousemove", follow);
    // adds a new click event to Mcgov button since the original onclick
    // is out of checks
    mcGovBtn.addEventListener("click", maybeMcGov);
}

// confirms that the user still wants to vote for Mcgov
let maybeMcGov = () => {
    var voteCheck = confirm("You REALLY want to vote for McGovern... Honestly?");
    if (voteCheck == true){
        // when the mouse leaves the card to click the prompt triggers doom event
        mcGovCard.addEventListener("mouseleave", doom);
        // adds a button below the cards to confirm their vote
        var falseHope = document.createElement("BUTTON");
        falseHope.innerHTML = `cOnFiRm VoTe`;
        falseHope.addEventListener("click", concede);
        document.getElementById("faker").appendChild(falseHope);
    }else{
        alert("It's okay, take your time. Nixon can wait.");
    }
}

// last event to trigger; spams the page with trap card images
let doom = () =>{
    alert(`BUT LITTLE DID YOU KNOW YOU JUST ACTIVATED MY TRAP CARD >:3`);
    // removes this doom event from the card so it cannot be triggered again
    mcGovCard.removeEventListener("mouseleave", doom);
    // creates 50 trap card images before the confirm vote button
    for(var j = 0; j <= 50; j++){
        // creates the image element
        var trapCard = document.createElement("IMG");
        trapCard.setAttribute("src", "images/trapHole.png");
        document.getElementById("trapZone").appendChild(trapCard);
        // creates a br so the cards start a new line each time
        var br = document.createElement("BR");
        document.getElementById("trapZone").appendChild(br);
    }
    
}

let concede = () => {
    var voteCheck = confirm('After all of this... you really want McGovern to win?');
    if (voteCheck == true){
        alert("Fine... I concede this time. For real...");
        // if they still want to vote for Mcgov after all this then stick bugs
        // and rick rolls them
        window.location.assign(`https://youtu.be/Tt7bzxurJ1I`);
    }
}

// onload that prompts for a valid voter id
window.onload = function(){
    this.prompt('Enter valid voter id:', );
    // doesn't do anything since we'll accept any person's vote for Nixon
}

// checks if the voter wants to vote for Nixon whenever the mouse enters
// Mcgov's card
let cardEvent = (event) => {
    var voteCheck = confirm('Did you want to vote for Nixon?');
    if(voteCheck == true){
        voteNixon();
    }else{
        mcGovCard.addEventListener('mouseenter', cardEvent2);
    }
    mcGovCard.removeEventListener('mouseenter', cardEvent);
}

// same as cardEvent2 but prompts a different question
let cardEvent2 = (event) => {
    var voteCheck = confirm("Are sure you didn't want to vote for Nixon?");
    if(voteCheck == true){
        mcGovCard.removeEventListener('mouseenter', cardEvent2);
    }else{
        voteNixon();
    }
}

// adds card event to the Mcgov card
mcGovCard.addEventListener('mouseenter', cardEvent);
// disables right click context menu
document.addEventListener('contextmenu', function(e) {
    alert("Be sure to choose which candidate you want to win!"); 
    e.preventDefault();
  }, false);


