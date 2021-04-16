var dodgeCheck = 0;
var doubtCheck = 0;
var mcGovCard = document.getElementById("mcgovernCard");
var mcGovBtn = document.getElementById("mcgovernBtn");
var mcGovImg = document.getElementById("mcgovernImg");
var nixonBtn = document.getElementById("nixonBtn");


function voteNixon(){
    alert("Thank you for voting! Feel free to do so again.");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

mcGovBtn.onclick = e => {
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

    }
        
    doubtCheck++;
}

let dodge = (event) => {
    console.log(`trigger`);
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
        // mcGovImg.style.rotate ***** STOPPED HERE FOR THE DAY *****
    }   
    
}

window.onload = function(){
    this.prompt('Enter valid voter id:', );
}

let mouseEvent = (event) => {
    var voteCheck = confirm('Did you want to vote for Nixon?');
    if(voteCheck == true){
        voteNixon();
    }else{
        mcGovCard.addEventListener('mouseenter', mouseEvent2);
    }
    mcGovCard.removeEventListener('mouseenter', mouseEvent);
}

let mouseEvent2 = (event) => {
    var voteCheck = confirm("Are sure you didn't want to vote for Nixon?");
    if(voteCheck == true){
        mcGovCard.removeEventListener('mouseenter', mouseEvent2);
    }else{
        voteNixon();
    }
}

mcGovCard.addEventListener('mouseenter', mouseEvent);


