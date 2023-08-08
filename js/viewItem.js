export default function viewItem() {
    
    const item = document.getElementsByClassName("item")
    const imgViewer =  document.getElementById("view-image")
    const imgTag = document.getElementById("viewImage-imageUrl")
    const imgcat = document.getElementById("viewImage-catagory")
    const closeBtn = document.getElementById("close")

    for (let i = 0; i < item.length; i++) {
       item[i].addEventListener("click", (e) => {
        
        let imgURL = e.target.dataset.image;
        let imgCAT = e.target.dataset.catagory

        imgTag.setAttribute("src",imgURL);
        imgcat.innerHTML = imgCAT;

        imgViewer.style.visibility = 'visible'
        closeBtn.addEventListener("click",() => {
            imgViewer.style.visibility = 'hidden'
        })
       })
        
    }
}
