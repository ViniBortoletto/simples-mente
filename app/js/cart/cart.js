// Client from Contentful -----------------------------------------------------------------------------
const client = contentful.createClient({
  space: "dsfbqtjs2w7x",
  accessToken: "nGCoarI8AWuvW7D6RQNLtKDiALXngKQ47RYb5P8ELRo"
});

// CartBtn from Navbar --------------------------------------------------------------------------------
const cartBtn = document.getElementById("nav__icon--cart");
const cartMarker = document.getElementById("cart__marker");

// Cart component -------------------------------------------------------------------------------------
const closeCartBtn = document.getElementById("cart__closeBtn");
const emptyCartBtn = document.getElementById("cart__btn--empty");
const emptyCartWarning = document.querySelector(".cart__item--empty");
const cartDOM = document.getElementById("cart");
const cartOverlay = document.getElementById("cart__overlay");
const cartTotal = document.getElementById("cart__total--value");
const cartContent = document.getElementById("cart__content");

// Products page --------------------------------------------------------------------------------------
const productsDOM = document.getElementById("produtos__gallery");

// Arrays ---------------------------------------------------------------------------------------------
let cart = [];
let buttonsDOM = [];

// Excutes only when the DOM Content is loaded---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  ui.setupAPP();

  products
    .getProducts()
    .then(products => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getGalleryItemBtns();
      ui.cardLogic();
    });
});

/* 

  1. ToggleCard and setupAPP (UI)
  2. Get products (Products)
  3. Display products (UI)
    - Instance products (DOMContentLoaded)
  4. Save products (Storage)
    -Instacnce saveProducts (DOMContentLoaded)
  5. getGalleryItemBtns (UI) 
*/