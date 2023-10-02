const products = [
  {
    id: 1,
    name: "Eclate Elegance Couch",
    marke: "roche",
    preis: 799,
    img: "Eclaté Elegance Couch.jpg",
  },
  {
    id: 2,
    name: "Aristokratische Ambiance Kommode",
    marke: "hm",
    preis: 99,
    img: "Aristokratische Ambiance Kommode.jpg",
  },
  {
    id: 3,
    name: "Diamant Deluxe Beistelltisch",
    marke: "bb",
    preis: 839,
    img: "Diamant Deluxe Beistelltisch.jpg",
  },
  {
    id: 4,
    name: "Erlesen-Eiche Organizer",
    marke: "roche",
    preis: 389,
    img: "Erlesen-Eiche Organizer.jpg",
  },
  {
    id: 5,
    name: "Exquisite Entspannungs-Emperor",
    marke: "hm",
    preis: 550,
    img: "Exquisite Entspannungs-Emperor.jpg",
  },
  {
    id: 6,
    name: "Opulente Oase Chaiselongue",
    marke: "bb",
    preis: 799,
    img: "Opulente Oase Chaiselongue.jpg",
  },
  {
    id: 7,
    name: "Prunkvolle Palast-Perch",
    marke: "roche",
    preis: 299,
    img: "Prunkvolle Palast-Perch.jpg",
  },
  {
    id: 8,
    name: "Regal Royale Esstisch",
    marke: "hm",
    preis: 1099,
    img: "Regal Royale Esstisch.jpg",
  },
];

// toggle btn
const openBtn = document.querySelector(".bars");
const mainToggle = document.querySelector(".main-toggle");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  if (!mainToggle.classList.contains("show-toggle")) {
    mainToggle.classList.add("show-toggle");
  }
});
closeBtn.addEventListener("click", () => {
  if (mainToggle.classList.contains("show-toggle")) {
    mainToggle.classList.remove("show-toggle");
  }
});

// =========
// Dynamic Btns (Marken)
// =========

const productContainer = document.querySelector(".product-container");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  displayBtns();
});

// display dynamic btns
function displayBtns() {
  const productMarke = products.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.marke)) {
        acc.push(curr.marke);
      }

      return acc;
    },
    ["all"]
  );
  const markeEinzeln = productMarke
    .map((marke) => {
      return `<button class="btn" data-id="${marke}">${marke}</button>`;
    })
    .join("");
  btnContainer.innerHTML = markeEinzeln;

  // filrer btns
  const filterBtns = document.querySelectorAll(".btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const marke = products.filter((product) => {
        if (product.marke === id) {
          return product.marke;
        }
        if (id === "all") {
          return products;
        }
      });
      displayProducts(marke);
    });
  });
}

// display products
function displayProducts(item) {
  const productsDOM = item
    .map((product) => {
      const { name, marke, preis, img } = product;
      return `<div class="single-produkt produkt">
          <img src="./Bilder/${img}" alt="img" />
          <h4 class="produkt-header">${name}</h4>
          <h4 class="produkt-price">${preis}€</h4>
        </div>`;
    })
    .join("");
  productContainer.innerHTML = productsDOM;
}

// =========
// Btns (Preise,search)
// =========

// search btn
const input = document.querySelector(".suchen");
input.addEventListener("keyup", () => {
  const value = input.value.toLowerCase();
  console.log(value);
  const itemName = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const notFoundText = document.querySelector('.not-found-text')

    if (productName.includes(value)) {
      return product;
    }
    if (!productName.includes(value)) {
    //  wie mache ich ein 'not found text rein'
    }
    if (value === "") {
      return products;
    }
  });
    displayProducts(itemName);
    
});
// preise

const btnPreis = document.querySelectorAll(".btn-preis");
const preisContainer = document.querySelector(".preis-container");

btnPreis.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    const produktPreis = products.filter((product) => {
      if (product.preis <= id) {
        return product;
      }
      if (id === "600+") {
        return product;
      }
    });
    displayProducts(produktPreis);
  });
});

// =========
// Btns in Kombination
// =========

function btnCombination() {}
