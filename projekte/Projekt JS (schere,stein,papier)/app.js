// selectors
const userCount = document.querySelector(".user-count");
const compCount = document.querySelector(".comp-count");
const winnerText = document.querySelector(".winner-text");
const winnerSpan = document.querySelector(".winner-span");
const buttons = document.querySelectorAll(".fa-solid");
const resetBtn = document.querySelector(".reset-btn");

let userCountNumber = 0;
let compCountNumber = 0;
console.log(compCountNumber);
// User auswahl
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userAuswahl = e.target.dataset.id;
    const compAuswahl = compAuswahlFunction();
    const vergleich = `${userAuswahl} ${compAuswahl}`;
    // console.log(userCountNumber);
    switch (vergleich) {
      // remis
      case "schere schere":
        winnerText.textContent = "schere schere / /";
        winnerSpan.textContent = "unentschieden";
        winnerSpan.style.color = "yellow";
        break;
      case "papier papier":
        winnerText.textContent = "papier papier / /";
        winnerSpan.textContent = "unentschieden";
        winnerSpan.style.color = "yellow";
        break;
      case "stein stein":
        winnerText.textContent = "stein stein / /";
        winnerSpan.textContent = "unentschieden";
        winnerSpan.style.color = "yellow";
        break;
      // gewonnen
      case "papier stein":
        winnerText.textContent = "papier schlägt stein / /";
        winnerSpan.textContent = "gewonnen";
        winnerSpan.style.color = "green";
        userCountNumber++;
        break;
      case "stein schere":
        winnerText.textContent = "stein schlägt schere / /";
        winnerSpan.textContent = "gewonnen";
        winnerSpan.style.color = "green";
        userCountNumber++;
        break;
      case "schere papier":
        winnerText.textContent = "schere schlägt papier / /";
        winnerSpan.textContent = "gewonnen";
        winnerSpan.style.color = "green";
        userCountNumber++;
        break;
      // verloren
      case "schere stein":
        winnerText.textContent = "stein schlägt schere / /";
        winnerSpan.textContent = "verloren";
        winnerSpan.style.color = "red";
        compCountNumber++;
        break;
      case "stein papier":
        winnerText.textContent = "papier schlägt stein / /";
        winnerSpan.textContent = "verloren";
        winnerSpan.style.color = "red";
        compCountNumber++;
        break;
      case "papier schere":
        winnerText.textContent = "schere schlägt papier / /";
        winnerSpan.textContent = "verloren";
        winnerSpan.style.color = "red";
        compCountNumber++;
        break;
    }
    compCount.textContent = compCountNumber;
    userCount.textContent = userCountNumber;
});
});
// reset btn
resetBtn.addEventListener("click", () => {
  compCount.textContent = compCountNumber = 0;
  userCount.textContent = userCountNumber = 0;
});

// comp auswahl
const auswahlArray = ["schere", "stein", "papier"];

function compAuswahlFunction() {
  const randomNumber = Math.floor(Math.random() * auswahlArray.length);
  const randomItem = auswahlArray[randomNumber];
  return randomItem;
}

