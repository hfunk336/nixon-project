var mouseEvent = 0;

window.onload = function(){
    this.prompt('Enter valid voter id:', );
}

document.getElementById("mcgovernCard").addEventListener('mousemove', e => {
    if(mouseEvent == 0){
        var mouseCheck = confirm('Did you want to vote for Nixon?');
        if(mouseCheck == true){
            mouseEvent = 3;
            alert("Thank you for voting! Feel free to do so again.");
        }else{
            mouseEvent++;
        }
    }else if(mouseEvent == 1){
        var mouseCheck = confirm("Are you sure you didn't want to vote for Nixon?");
        if(mouseCheck == true){
            mouseEvent = 3;
            alert("Thank you for voting! Feel free to do so again.");
        }else{
            mouseEvent++;
        }
    }
});

document.getElementById("mcgovernBtn").onclick = function(){
    var btnCheck = 0;
    if(btnCheck == 0){
        var onclickCheck = confirm("Did you mean to vote for Nixon?");
        btnCheck++;
    }

    if (onclickCheck == true){
        alert("Thank you for voting! Feel free to do so again.");
    }else{
        document.getElementById("mcgovernBtn").innerHTML = `Vote Nixon`;
        
        let div = document.createElement("div");
        document.getElementById("mcgovernCard").appendChild(div)
    }
}