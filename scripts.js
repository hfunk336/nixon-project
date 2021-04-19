var dodgeCheck = 0;
var doubtCheck = 0;
var mcGovCard = document.getElementById("mcgovernCard");
var mcGovBtn = document.getElementById("mcgovernBtn");
var mcGovImg = document.getElementById("mcgovernImg");
var nixonBtn = document.getElementById("nixonBtn");


function voteNixon(){
    this.alert("Thank you for voting! Feel free to do so again.");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

mcGovBtn.onclick = () => {
    if(doubtCheck == 0){
        var voteCheck = confirm("Did you mean to vote for Nixon?");
        if(voteCheck == true){
            voteNixon();
        }else{
            alert("Fine then vote for McGovern already...");
            mcGovBtn.innerHTML = `Vote Nixon :3`
        }
    }else if(doubtCheck == 1){
        var voteCheck = confirm("You want Nixon to win, right? uWu");
        if(voteCheck == true){
            voteNixon();
        }else{
            mcGovBtn.addEventListener("mouseenter", dodge);
            alert("If you want McGovern then just click on the button");
            mcGovBtn.innerHTML = `Vote McGovern D:`
        }
    }else if(doubtCheck == 2){
        var voteCheck = confirm("You still want to vote for McGovern??");
        if(voteCheck == true){
            alert("Fine be that way...");
        }else{
            voteNixon();
        }
        mcGovBtn.style.position = `relative`;
        mcGovBtn.style.left = `0px`;
        mcGovBtn.style.top = `0px`;
        mcGovBtn.removeEventListener("mouseenter", dodge);
        window.addEventListener("mousemove", follow);
    }
        
    doubtCheck++;
}

let dodge = (event) => {
    mcGovBtn.style.position = `fixed`;
    var newX = 0;
    var newY = 0;
    if(dodgeCheck < 5){
        var newX = getRandomInt(800);
        var newY = getRandomInt(500);
        mcGovBtn.style.left = `${newX}px`;
        mcGovBtn.style.top = `${newY}px`;
        dodgeCheck++;
    }else{
        mcGovBtn.style.left = `100px`;
        mcGovBtn.style.top = `100px`;
    }   
    
}

let follow = (event) => {
    console.log(`check`);
    newX = event.clientX - 25;
    newY = event.clientY - 13;
    nixonBtn.style.position = `fixed`;
    nixonBtn.style.left = `${newX}px`;
    nixonBtn.style.top = `${newY}px`;
    nixonBtn.style.index = 1;

    nixonBtn.removeAttribute('onclick');
    nixonBtn.addEventListener('click', maybeNixon);
}

let maybeNixon = () => {
    var voteCheck = confirm("So you finally came around to voting for Nixon?")
    if(voteCheck == true){
        voteNixon();
    }else{
        alert("You're only making this harder on yourself :3");
    }
    nixonBtn.style.position = `relative`;
    nixonBtn.style.left = `0px`;
    nixonBtn.style.top = `0px`;
    window.removeEventListener("mousemove", follow);
    
}

window.onload = function(){
    this.prompt('Enter valid voter id:', );
}

let cardEvent = (event) => {
    var voteCheck = confirm('Did you want to vote for Nixon?');
    if(voteCheck == true){
        voteNixon();
    }else{
        mcGovCard.addEventListener('mouseenter', cardEvent2);
    }
    mcGovCard.removeEventListener('mouseenter', cardEvent);
}

let cardEvent2 = (event) => {
    var voteCheck = confirm("Are sure you didn't want to vote for Nixon?");
    if(voteCheck == true){
        mcGovCard.removeEventListener('mouseenter', cardEvent2);
    }else{
        voteNixon();
    }
}

mcGovCard.addEventListener('mouseenter', cardEvent);


