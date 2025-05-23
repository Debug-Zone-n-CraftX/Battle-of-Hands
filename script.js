let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let your_score = document.querySelector(".y-score");
let comp_score = document.querySelector(".c-score");
let res_btn = document.querySelector(".btn");
let y_choice; 
let y_ammo = document.getElementById("y-ammo");
let c_ammo = document.getElementById("c-ammo");

your_score.value = 0;
comp_score.value = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


function winner(y,c) {
    if (y == "ROCK" && c == "SCISSOR") {
        your_score.value = Number(your_score.value) + 1;
        return y
    }
    else if (y == "ROCK" && c == "PAPER") {
        comp_score.value = Number(comp_score.value) + 1;
        return c
    }
    else if (y == "ROCK" && c == "ROCK") {
        return "DRAW"
    }
    else if (y == "PAPER" && c == "SCISSOR") {
        comp_score.value = Number(comp_score.value) + 1;
        return c
    }
    else if (y == "PAPER" && c == "PAPER") {
        return "DRAW"
    }
    else if (y == "PAPER" && c == "ROCK") {
        your_score.value = Number(your_score.value) + 1;
        return y
    }
    else if (y == "SCISSOR" && c == "SCISSOR") {
        return "DRAW"
    }
    else if (y == "SCISSOR" && c == "PAPER") {
        your_score.value = Number(your_score.value) + 1;
        return y
    }
    else if (y == "SCISSOR" && c == "ROCK") {
        comp_score.value = Number(comp_score.value) + 1;
        return c
    }
};





let choice = ["ROCK", "PAPER", "SCISSOR"];
let c_choice; 




rock.addEventListener("click",() => {
    y_choice = "ROCK";
    console.log("Your Choice : ",y_choice);
    c_choice = getRandomItem(choice);
    console.log("Computer Choice : ",c_choice);
    y_ammo.innerText = "Your choice : " + y_choice
    c_ammo.innerText = "Computer choice : " + c_choice
    console.log("Winner : ",winner(y_choice,c_choice))
})


paper.addEventListener("click",() => {
    y_choice = "PAPER";
    console.log("Your Choice : ",y_choice);
    c_choice = getRandomItem(choice);
    console.log("Computer Choice : ",c_choice);
    y_ammo.innerText = "Your choice : " + y_choice
    c_ammo.innerText = "Computer choice : " + c_choice
    console.log("Winner : ",winner(y_choice,c_choice))
})


scissor.addEventListener("click",() => {
    y_choice = "SCISSOR";
    console.log("Your Choice : ",y_choice);
    c_choice = getRandomItem(choice);
    console.log("Computer Choice : ",c_choice);
    y_ammo.innerText = "Your choice : " + y_choice
    c_ammo.innerText = "Computer choice : " + c_choice
    console.log("Winner : ",winner(y_choice,c_choice))
})


res_btn.addEventListener("click",() => {
    your_score.value = 0;
    comp_score.value = 0;
    y_ammo.innerText = "Your choice : ";
    c_ammo.innerText = "Computer choice : ";
})