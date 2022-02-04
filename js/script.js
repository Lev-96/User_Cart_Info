let cartBox = document.getElementById('cartBox')
let cartItems = document.getElementById('cartItems')
let totalBox = document.getElementById('total')
let countBox = document.getElementById('cartCount')
let items = document.getElementById('items')

function getProducts(){
    items.innerHTML = ''
    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++){
        let product = JSON.parse(localStorage.getItem(`product_${i}`))

        if(product != null){
            items.innerHTML += `
            
                <div class="item">
                    <div class="item-img">
                        <img src="../img/${product.image}" alt="toys">
                    </div>
                    <div class="item-info">
                        <div class="infos">
                            <div class="item-firstname">${product.firstname}</div>
                            <div class="item-lastname">${product.lastname}</div>
                            <div class="item-date">${product.date}</div>
                            <div class="item-phone">${product.phone}</div>
                            <div class="item-email">${product.email}</div>
                        </div>
                        <a href="../post/post.html" id="mybtn" onclick="addToCart(this, ${product.id})">Info User</a>
                        <em class="mous">Click on me</em>
                    </div>
                </div>
            `
         
        }
    } 
}



function cartShow(){
    cartBox.classList.toggle('show')
    show()
}

function addToCart(a, id){
    let firstname = a.previousElementSibling.innerText
    let lastname = a.parentElement.nextElementSibling.firstElementChild.innerText
    let email = a.parentElement.nextElementSibling.firstElementChild.innerText
    let phone = a.parentElement.nextElementSibling.firstElementChild.innerText
    let image = a.parentElement.previousElementSibling.firstElementChild.getAttribute("src")

    let count = 1

    if(localStorage.getItem(`product_cart_${id}`) != null){
        let oldProduct = JSON.parse(localStorage.getItem(`product_cart_${id}`))
        oldProduct.count++
        oldProduct.price = price * oldProduct.count

        localStorage.setItem(`product_cart_${id}`, JSON.stringify(oldProduct))
    }else{
        let product = {
            id: id,
            firstname: firstname,
            lastname: lastname,
            email:email,
            date:date,
            phone:phone,
            image:image
        }
    
        localStorage.setItem(`product_cart_${id}`, JSON.stringify(product))
    }

    show()
}

function show(){
    let id = localStorage.getItem('id')
    let total = 0
    cartItems.innerHTML = ''
    totalBox.innerHTML = `Cart is empty !!`
    
    for(let i = 1; i <= id; i++){
        let product = JSON.parse(localStorage.getItem(`product_cart_${i}`))
        
        if(product != null){
            
            total += +product.price
            totalBox.innerHTML = `Total: ${total}$`
            
            cartItems.innerHTML += `
            <div class="cartItem">
                <img src="${product.image}">
                <div class="cartItemInfo">
                <p>${product.name}</p>
                <p>${product.price} $</p>
                </div>
                <i onclick="remove(${product.id})" class="fa fa-trash-alt"></i>
                <span>x${product.count}</span>
            </div>
            `
        }

        let cartItem = document.getElementsByClassName('cartItem').length
        countBox.innerHTML = cartItem
    }
}

function remove(id){
    localStorage.removeItem(`product_cart_${id}`)
    show()
}

getProducts()
show()






/************************************************************/





