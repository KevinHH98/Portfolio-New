// ###### select items #######
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const input = document.querySelector(".input");
const einkaufContainer = document.querySelector(".einkauf-container");
const einkaufTitle = document.querySelector(".einkauf-title");

const clearBtn = document.querySelector(".clear-btn");
const einkaufsListe = document.querySelector(".einkaufsliste");
const einkauf_liste = document.querySelector(".einkauf-liste");
const einkaufItem = document.querySelector(".einkauf-item");

// ####### Event Listener #######
einkaufsListe.addEventListener("submit", displayItem);
clearBtn.addEventListener("click", clearBtnFunction);

// ####### Functions #######

function displayItem(e) {
  const inputValue = input.value;
  e.preventDefault();

  if (inputValue) {
    // einkaufTitle.innerText = inputValue;
    einkaufContainer.classList.add("show-einkauf-container");
    clearBtn.classList.add("clear-btn-show");
    input.value = "";
    // neuen article erstellen
    const createdEinkauf = document.createElement("article");
    createdEinkauf.classList.add("einkauf-item");
    createdEinkauf.innerHTML = `<p class="einkauf-title">${inputValue}</p>
    <div class="btn-container">
    <button class="delete-btn" type="button">
    <i class="fas fa-trash"></i>
    </button>
    </div>`;
    einkauf_liste.appendChild(createdEinkauf);
     // end of neuen article erstellen
     
    alertFunction("green", "hinzugefügt");
  }

  // delete btn (kein zurgiff ausserhalb) muss die in der funktion sein?
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const removeArticle = e.currentTarget.parentElement.parentElement;
      alertFunction("red", "gelöscht");
      removeArticle.remove();
    });
  });
}

// clear btn

function clearBtnFunction() {
  clearBtn.classList.remove("clear-btn-show");
  einkauf_liste.innerHTML = "";
  alertFunction("red", "gelöscht");
 
  
}

// anzeigen des Alerts
function alertFunction(color, text) {
  alert.classList.add("show-alert");
  alert.style.color = color;
  alert.textContent = text;
  setTimeout(() => {
    alert.classList.remove("show-alert");
  }, 1000);
}

// es fehlt nur noch: wenn kein item mehr drin ist weil ich alle mit dem deletebtn gelöscht habe, das mir der clearBtn auch nicht mehr angezeigt wird