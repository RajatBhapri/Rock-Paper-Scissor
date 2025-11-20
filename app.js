let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const par = document.querySelector("#para");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score")
const compSc = document.querySelector("#comp-score")

const draw = () =>{
    par.innerText = "game draw";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
    
}

const random = () => {
    const options = ["rock","paper","scissor"];
    const num = Math.floor(Math.random()*3);
    return options[num];
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userch = choice.getAttribute("id");
    play(userch);
})
})

const showWin = (userWin) =>{
    if(userWin === true){
        par.innerText = "you won"
        msg.style.backgroundColor = "green";
        // msg.style.color = "black";
        userScore++;
        userSc.innerText = userScore;
    }else{
        par.innerText = "you lose"
        msg.style.backgroundColor = "red";
        // msg.style.color = "black";
        compScore++;
        compSc.innerText = compScore;
    }
}

const play = (userch) => {
    const compChoice = random();
    if (compChoice === userch) {
        draw();
    } else {
        let userWin = true;
        
        if(userch === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userch === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin);
    }
    
}

