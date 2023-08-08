import displayItem from "./displayItem.js";
import { items } from "./items.js"
import viewItem from "./viewItem.js";

export default function selectCatagory() {
    const catogry = document.getElementsByClassName('catagory')
    const AllItems = items
    for (let i = 0; i < catogry.length; i++) {
        catogry[i].addEventListener('click', (element) => {

            for (let i = 0; i < catogry.length; i++) {
                catogry[i].classList.remove('active')
                }

            catogry[i].classList.add('active')
            const catagory = element.target.id
            const filterCatagory = AllItems.filter(e => e.catagory === catagory )
            filterCatagory.length > 0 ? displayItem(filterCatagory) : displayItem(AllItems)
            viewItem()
        })
    }
    
}