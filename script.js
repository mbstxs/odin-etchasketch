const cont = document.querySelector(".cont");

for (let i = 0; i <= 255; i++) {
    const div = document.createElement("div");
    div.classList = "gridDiv"
    div.style.width = "80px";
    div.style.height = "48px";
    div.style.border = "1px solid #000";
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    div.addEventListener("mouseenter", () => { div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})` })
    div.addEventListener("mouseleave", () => { div.style.backgroundColor = "#fff" })
    cont.appendChild(div);
}