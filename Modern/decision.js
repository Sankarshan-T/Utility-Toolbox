function generateChoice() {
    const choicesraw = document.getElementById("choices");
    const result = document.getElementById("randomChoice");

    const choices = choicesraw.value.split(",").map((choice) => choice.trim());

    console.log(choices);

    if (choices.length === 0 || choices.length === 1 || (choices.length === 1 && choices[0] === "")) {
        choicesraw.value = "";
        result.textContent = "Please enter more choices"
        setTimeout(() => {
            result.textContent = "Random Choice: _______________";
        }, 1200)
    }
    else {
        const randomIndex = Math.floor(Math.random() * choices.length);

        const randomchoice = choices[randomIndex];

        result.textContent = `Random Choice: ${randomchoice}`;
    };
    
}

function clearText() {
    document.getElementById("choices").value = "";
    document.getElementById("randomChoice").textContent = "Random Choice: _______________";
}