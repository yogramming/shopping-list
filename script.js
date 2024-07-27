// Step 2
const itemList = document.getElementById("itemList");
const itemInput = document.getElementById("item");
const addButton = document.getElementById("addButton");

// Step 3
function addItemToList() {

    // Step 4
    const newItemText = itemInput.value.trim();

    // Step 5
    item.value = "";

    // Step 6
    const newItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    // Step 7
    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);

    // Step 8
    newSpan.textContent = newItemText;
    newButton.textContent = "Delete";

    // Step 9
    itemList.appendChild(newItem);

    // Step 10
    newButton.addEventListener("click", () => itemList.removeChild(newItem));

    // Step 11
    itemInput.focus();
}
addButton.addEventListener("click", addItemToList);