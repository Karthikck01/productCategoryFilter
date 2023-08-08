import { items } from "./items.js"
import displayItem from "./displayItem.js";
import selectCatagory from "./selectCatagory.js";
import viewItem from "./viewItem.js";

const AllItems = items;
displayItem(AllItems)
selectCatagory()

viewItem()
AOS.init();