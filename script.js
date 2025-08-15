const cont = document.querySelector(".cont");
const div = document.createElement("div")
const modalBtn = document.createElement("button");
const gridRows = document.querySelectorAll(".gridRow")
let numSquares = 16;

modalBtn.textContent = "Custom Grid"
modalBtn.style.padding = "16px 20px"
modalBtn.style.backgroundColor = "#791dafff"
modalBtn.style.color = "#fff"
modalBtn.style.borderRadius = "4px"

modalBtn.addEventListener("click", () => {
    for (let i = 1; i <= numSquares; i++)
        cont.removeChild(cont.lastChild)
    numSquares = prompt("Set the number of squares");
    if (isNaN(numSquares) || numSquares <= 0 || numSquares > 100) {
        alert("invalid input, insert a number between 1 and 100")
    }
    else
        drawGrid(numSquares);
})

const genRandomColor = () => {
    return Math.floor(Math.random() * 255);
}

body.insertBefore(modalBtn, body.firstChild);

const drawGrid = (numSquares) => {
    for (let i = 1; i <= numSquares; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.style.width = "100%";
        rowDiv.style.height = "100%";
        rowDiv.style.display = "flex";
        rowDiv.classList = "gridRow"
        cont.appendChild(rowDiv)
        for (let j = 1; j <= numSquares; j++) {
            const colDiv = document.createElement("div")
            let numInteractions = 1;
            colDiv.style.width = "100%";
            colDiv.style.height = "100%";
            colDiv.style.border = "1px solid #000";
            colDiv.addEventListener("mouseenter", () => {
                colDiv.style.backgroundColor = `rgba(${genRandomColor()}, ${genRandomColor()}, ${genRandomColor()}, ${(numInteractions * 10) / 100})`;
                numInteractions++;
            });
            colDiv.addEventListener("mouseleave", () => { div.style.backgroundColor = "#fff"; });
            rowDiv.appendChild(colDiv);

        }
    }
}

drawGrid(numSquares);