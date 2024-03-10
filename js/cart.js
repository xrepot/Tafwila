//element selector
const cartContainer = document.getElementById("cart-products");
const menuContainer = document.querySelector(".menu-items-container");
const buyDetails = document.querySelector(".buy-details");
const cartTable = document.querySelector(".cart-table thead tr th");
let notification = document.querySelector("large-header .cart-icon-link");
const priceUi = document.querySelector(".price span");
const shippingPUi = document.querySelector(".ship-price span");
const subTotalPriceUI = document.querySelector(".total-price span");
let itemsData = [];
let totalItemPrice = 0;
let subTotalPrice = 0;
let shippingPrice = 30;
let itemLength;

//event bubbling
menuContainer?.addEventListener("click", function (e) {
  const target = e.target.closest(".add-to-cart");
  if (!target) return;
  const item = target.closest(".food-item-details");
  if (!item) return;
  const productName = item.querySelector(".product-name").textContent.trim();
  const checkElement = JSON.parse(localStorage.getItem("tafwilaItems"))?.some(
    (element) => element.itemName === productName
  );
  if (checkElement) return;

  const itemObj = {
    itemName: productName,
    itemPrice: item.querySelector(".product-item-price").textContent,
    itemPhoto: item.querySelector(".product-item-image").getAttribute("src"),
    itemCount: 1,
    itemId: itemsData.length,
  };
  itemsData.push(itemObj);
  showItemsData(itemsData);
});

// save the items in localStorage
function setLocalStorage(itemsData) {
  localStorage.setItem("tafwilaItems", JSON.stringify(itemsData));
}

// when the user will click on any item to cart shopping the data of the item will be stored in local storage and the notification icon will appear and the html elements will be generated with item data that there in LocalSorage
function showItemsData(itemsData) {
  setLocalStorage(itemsData);
  showUi();
  genereateItems();
}
function showUi() {
  //notification icon will be show here
  notification.style.display = "flex";
  // buydetails container will be show
  buyDetails?.classList.remove("hide");
}
function hideUi() {
  //notification icon will be hidden here
  notification.style.display = "none";
  // buydetails container will be hidden
  buyDetails?.classList.add("hide");
}

// get data in local storage and check if there a data on it or no
function getLocalStorage() {
  const checkLocalStorage = JSON.parse(localStorage.getItem("tafwilaItems"));
  if (checkLocalStorage && checkLocalStorage.length > 0) {
    itemsData = checkLocalStorage;
    showUi();
    genereateItems();
    calcTotalPrice();
  } else {
    hideUi();
  }
  changeText();
}
// calc price depend on items details on cart shopping
function calcTotalPrice() {
  totalItemPrice = itemsData.reduce(
    (sum, price) => sum + parseFloat(price.itemPrice) * price.itemCount,
    0
  );
  priceUi.textContent = `${totalItemPrice}ج`;
  if (totalItemPrice > 0) {
    shippingPUi.textContent = `${shippingPrice}ج`;
    subTotalPrice = shippingPrice + totalItemPrice;
  } else {
    shippingPUi.textContent = `${shippingPrice - shippingPrice}ج`;
    subTotalPrice = 0;
  }
  subTotalPriceUI.textContent = `${subTotalPrice}ج`;
}

// generated the items data on html on cart container
function genereateItems() {
  itemsData.forEach((item) => {
    let itemElement = `<tr>
    <td>
      <img src=${item.itemPhoto} alt="" />
      <div class="product-info">
        <h2>${item.itemName}</h2>
        <span>${item.itemPrice}</span>
      </div>
    </td>
    <td>
      <div class="countity">
        <i class="uil uil-plus" data-number=${item.itemCount} data-id=${item.itemId} onclick='updateItems(event.target)' ></i>
        <span class="number">${item.itemCount}</span>
        <i class="uil uil-minus" onclick='updateItems(event.target)'></i>
      </div>
    </td>
    <td>
      <span>${item.itemPrice}</span>
    </td>
  </tr>`;
    cartContainer?.insertAdjacentHTML("beforeend", itemElement);
  });
}

//update items data if user click on plus icon or minus icon
function updateItems(e) {
  const targetElement = e.closest(".countity");
  let elementNumber = targetElement.querySelector(".number");
  const id = itemsData.findIndex(
    (el) => el.itemId == targetElement.querySelector(".uil-plus").dataset.id
  );
  if (!targetElement) return;
  if (e.classList.contains("uil-plus")) {
    elementNumber.textContent = itemsData[id].itemCount += 1;
  } else if (
    e.classList.contains("uil-minus") &&
    itemsData[id]?.itemCount > 0
  ) {
    elementNumber.textContent = itemsData[id].itemCount -= 1;
  }
  itemsData[id].itemCount === 0 && itemsData.splice(id, 1) && location.reload();

  calcTotalPrice();
  setLocalStorage(itemsData);
  changeText();
}

// change cartTable text depened on items count on cart shopping
function changeText() {
  if (itemsData.length > 0) {
    itemLength = itemsData.reduce((sum, count) => sum + count.itemCount, 0);
    cartTable.textContent = `سلة التسوق (${itemLength})`;
  } else {
    cartTable.textContent = `سلة التسوق فارغة`;
  }
}
getLocalStorage();
