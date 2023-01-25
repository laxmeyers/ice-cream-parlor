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

function drawToppings(id, array){
    let toppingElem = document.getElementById(`${id}`)
    let template = ''

    array.forEach(p => {
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
            <button onclick="addToCart('${p.name}')" class="btn btn-primary">ADD</button>
          </div>
        </div>
      </div>`
    })

    toppingElem.innerHTML = template
}

function drawCart(){
    let cartElem = document.getElementById('cart')
    let template = ''

    cart.forEach(p => {
        template += `<div class="col-4 p-3"><h4>${p.name}</h4></div>
        <div class="col-3 p-3"><h4>${p.quantity}</h4></div>
        <div class="col-2 p-3"><h4>$${p.price}</h4></div>
        <div class="col-3 p-3"><h4>${p.price * p.quantity}</h4></div>`
    })

    cartElem.innerHTML = template
    total()
}

function addToCart(name){
    let toppingItem = toppings.find(p => p.name == name)
    let vesselItem = containers.find(p => p.name == name)
    let iceCreamItem = iceCream.find(p => p.name == name)

    let productFound = cart.find(p => p.name == name)

    if (productFound){
        productFound.quantity++
    }else{
        if(toppingItem){
            cart.push({
                name: toppingItem.name,
                price: toppingItem.price,
                quantity: 1
            })
        } else if (vesselItem){
            cart.push({
                name: vesselItem.name,
                price: vesselItem.price,
                quantity: 1
            })
        } else {
            cart.push({
                name: iceCreamItem.name,
                price: iceCreamItem.price,
                quantity: 1
            })
        }
    }


    drawCart()

}

function total(){
    let total = document.getElementById('total')
    let totalCost = 0
    cart.forEach(p => {
        totalCost += p.price * p.quantity
    })

    total.innerText = totalCost
}

function buy(){
    cart = []
    drawCart()
}


drawToppings("topping-cards", toppings)
drawToppings("vessel-cards", containers)
drawToppings("ice-cream-cards", iceCream)