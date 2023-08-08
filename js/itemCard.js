export default function itemCard(item) {
  return `
        <div class="col col-12 col-sm-6 col-md-4 col-lg-3 p-1 overflow-hidden item" data-aos="flip-left" data-aos-duration="500" key='${item.id}'>
            <img src='${item.imageurl}' alt="" class="w-100 h-100" data-image="${item.imageurl}" data-catagory="${item.catagory}">
        </div>
        `
}
