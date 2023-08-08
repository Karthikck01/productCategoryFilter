import itemCard from "./itemCard.js";

export default function displayItem(itemArray) {
    const itemsContainer = document.getElementById("items")  
    itemsContainer.innerHTML = ""

    itemArray.forEach(element => {
        itemsContainer.innerHTML += itemCard(element)
    });

    
}