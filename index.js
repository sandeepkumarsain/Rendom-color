
const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener("click", getRandomColor);

function getRandomColor() {
    const choices = "1234567890abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomChoice = choices[Math.floor(Math.random() * 16)];
        color = color + randomChoice
    }
    
    input.value = color;
    document.body.style.backgroundColor = color
}
