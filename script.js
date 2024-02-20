const inputBar = document.getElementById("WriteList");
const itemsForm = document.querySelector("#form_id");
const inputList = document.querySelector("ul");
const addBtn = document.querySelector(".btn");
const clearBtn = document.querySelector("#cross");
const clearBtnall = document.getElementById("clear");

function addItem(e) {
  e.preventDefault();

  const addedItem = inputBar.value;
  if (addedItem === "") {
    alert("pleas enter the item first!");
    return;
  }

  //created a list item
  const listItems = document.createElement("li");
  listItems.appendChild(document.createTextNode(addedItem));

  //created a child in ul
  inputList.appendChild(listItems);
  console.log(inputList);

  checkUI();

  
  //created the cross button
  const button = document.createElement("button");
  button.id = "cross";
  button.className = "remove-btn";
  listItems.appendChild(button);
  inputBar.value = "";


  //created the icon
  const icon = document.createElement("i");
  icon.appendChild(document.createTextNode("X"));
  button.appendChild(icon);
}


function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-btn")) {
    e.target.parentElement.parentElement.remove();
  }
  console.log(e.target.parentElement);
}

function clearItems() {
  inputList.innerHTML = "";
  checkUI();
}

function checkUI() {
  const items = inputList.querySelectorAll("li");
  if (items.length === 0) {
    clearBtnall.style.display = "none";
  } else {
    clearBtnall.style.display = "Block";
  }
}

// Eventlisteners
inputList.addEventListener("click", removeItem);
itemsForm.addEventListener("submit", addItem);
clearBtnall.addEventListener("click", clearItems);

checkUI();
