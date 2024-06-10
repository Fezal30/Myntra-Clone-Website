let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items_container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
    <div class="item_container">
    <img class="item-image" src="${item.image}" alt="items_images" />
    <div class="item_rating">${item.rating.stars}⭐|${item.rating.count}</div>
    <div class="item_company">${item.company}</div>
    <div class="item_name">${item.item_name}</div>
    
    <div class="price">
      <span class="current_price">${item.current_price}</span>
      <span class="original_price">${item.original_price}</span>
      <span class="discount">${item.discount_percentage}</span>
    </div>
    <button class="btn-add-bag" onClick ="addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });

  itemsContainerElement.innerHTML = innerHtml;
}
