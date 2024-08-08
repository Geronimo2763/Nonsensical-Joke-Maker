import { createRndJoke } from "./jokeGenerator.js";

const joke = document.getElementById("joke");
const punchLine = document.getElementById("punch-line");
const generateButton = document.getElementById("joke-button");


let buttonState = "joke";
const resetDash = ()=>{
    punchLine.style.opacity = 0;
    setTimeout(() => {
        punchLine.innerHTML = "";
        punchLine.style.opacity = 1;
    },150)
}
const generateJoke = (arr) => {
    resetDash()
    
    joke.style.opacity = 0;

    setTimeout(() => {
        joke.innerHTML = arr[0] + "?";
        joke.style.opacity = 1;
    }, 150);
};

const getPunchLine = (arr) => {
    punchLine.style.opacity = 0;

    setTimeout(() => {
        punchLine.innerHTML = arr[1];
        punchLine.style.opacity = 1;
    }, 150);
};

const handleButton = () => {
    let jokeArr = createRndJoke();
    console.log(jokeArr);
    if (buttonState === "joke") {
        generateJoke(jokeArr);
        buttonState = "punch";
        generateButton.innerHTML = "Get Punch Line";
    } else if (buttonState === "punch") {
        getPunchLine(jokeArr);
        buttonState = "reset";
        generateButton.innerHTML = "Generate New Joke";
    } else {
        buttonState = "joke";
        handleButton();
    }
};

generateButton.addEventListener("click", handleButton);
