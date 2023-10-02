const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".jokes-btn");
const container = document.querySelector(".joke");

async function fetchData() {
  const response = await fetch(url, {
    // diese URL fordert dies Explizit
    headers: {
      accept: "application/json",
      "User-Agent": "learning app",
    },
  });
  const data = await response.json();
  const dataText = data.joke;
  container.innerHTML = `<p>${dataText}</p>`;
}

btn.addEventListener("click", () => {
  fetchData();
});
