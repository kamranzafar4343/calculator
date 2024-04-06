const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "+", "-", "=", "/", "*"];
let output = "";


//define function to calculate base on button click
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        //if output has % replace it with /
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue==="AC"){
        //all data in input field will be removed, when user click AC
        output = "";
    }
    else if(btnValue==="DEL"){
        //when user click DEL it deletes last one character
        output= output.toString().slice(0, -1);
    }

    else{
        if(btnValue === "" && specialChars.includes(btnValue)) return;
         output += btnValue;
    }
    display.value=output;
};


//add event listener to buttons, call calculate on click
buttons.forEach((button) => {
    //button click listener calls calculate() with dataset value as argument
    button.addEventListener("click", (e)=> calculate(e.target.dataset.value));   
});