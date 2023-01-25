// SECTION arrays
const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

let cart = []

function drawToppings(){
    let toppingElem = document.getElementById('topping-cards')
    let template = ''

    toppings.forEach(p => {
        template += `<div class="col-4">
        <div class="card">
          <img
            src="${p.image}"
            class="card-img-top"
            alt="${p.name}"
          />
          <div class="card-body">
          <div class="d-flex justify-content-between">
          <h5 class="card-title">${p.name}</h5> <span class="text-end">$${p.price}</span>
          </div>
            <button onclick="addToCart('${p.name}')" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>`
    })

    toppingElem.innerHTML = template
}

function drawVessels(){
    let vesselElem = document.getElementById('vessel-cards')
    let template = ''

    containers.forEach(p => {
        template += `<div class="col-4">
        <div class="card">
          <img
            src="${p.image}"
            class="card-img-top"
            alt="${p.name}"
          />
          <div class="card-body">
          <div class="d-flex justify-content-between">
          <h5 class="card-title">${p.name}</h5> <span class="text-end">$${p.price}</span>
          </div>
            <button onclick="addToCart('${p.name}')" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>`
    })

    vesselElem.innerHTML = template
}

function drawIceCream(){
    let iceCreamElem = document.getElementById('ice-cream-cards')
    let template = ''

    iceCream.forEach(p => {
        template += `<div class="col-4">
        <div class="card">
          <img
            src="${p.image}"
            class="card-img-top"
            alt="${p.name}"
          />
          <div class="card-body">
          <div class="d-flex justify-content-between">
          <h5 class="card-title">${p.name}</h5> <span class="text-end">$${p.price}</span>
          </div>
            <button onclick="addToCart('${p.name}')" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>`
    })

    iceCreamElem.innerHTML = template
}

function drawCart(){

}

function addToCart(name){
    console.log(name);
}


drawToppings()
drawVessels()
drawIceCream()