// selectors
const form = document.querySelector(".generator-form");
const input = document.querySelector(".input");
const password = document.querySelector(".password");
const btnSpeichern = document.querySelector(".speicher-btn");
const btnGenerator = document.querySelector(".generator-btn");
const liste = document.querySelector(".liste");
const listItem = document.querySelector(".list-item");
const listPassword = document.querySelector(".list-password");

// end of selectors

let edit = "";
let editFlag = false;
let editElement;

// wenn ich enter drücke ist alles weg? lösung bitte
// arrays

const passwordNew = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "€",
  "$",
  "%",
  "&",
  "#",
  "!",
  "?",
];

// add event listeners
btnGenerator.addEventListener("click", generate);
btnSpeichern.addEventListener("click", speichern);

// functions

// math random function

function random() {
  let newP = "";
  for (let i = 0; i < 9; i++) {
    const randomNumber = Math.floor(Math.random() * passwordNew.length);
    newP += passwordNew[randomNumber];
  }
  return newP;
}

function generate() {
  password.innerText = random();
}

function speichern() {
  
  const inputValue = input.value;
  liste.classList.add("show-liste");
  //   listItem.innerText = inputValue;
  //   listPassword.innerText = password.textContent;
  if(!editFlag){
      
    input.value = "";
    const nextLine = `<div class="single-list">
    <p class="list-item">${inputValue}</p>
    <div class="password-btn-container">
    <p class="list-password">${password.textContent}</p>
    
    <button class="delete-btn">
    <i class="fa-solid fa-trash trash"></i>
    </button>
    <button class="edit-btn">
    <i class="fa-solid fa-file-pen edit"></i>
    </button>
    </div>
    </div>`;
    liste.innerHTML += nextLine;
    password.textContent = "passwort";
  }else{
    editElement.innerHTML = inputValue
    input.value = ''
    editFlag = false
  }
  
  // delete button
    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const item = e.currentTarget.parentElement.parentElement;
        item.remove();
      });
  });
  // edit button

  // editBtn.addEventListener("click", () => {
  //   // edit = password.innerText;
  //   // const editedValue = (input.value = edit);
  //   editFlag = true
  //  editElement
  // });
  const editBtn = document.querySelectorAll(".edit-btn");
  
  editBtn.forEach((btn)=>{
  
    btn.addEventListener("click", editItem);
  })

    
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // edit item
  editElement = e.currentTarget.previousElementSibling.previousElementSibling;
  // set form Value
  input.value = editElement.innerHTML
editFlag = true
}

