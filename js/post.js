
let hash = location.hash
let id = hash.slice(1)

let product = JSON.stringify(localStorage.getItem(`product_${id}`))
let openingPost = document.getElementById('openingPost')


function myPost(){

    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++){
        let product = JSON.parse(localStorage.getItem(`product_${i}`))

        if(product != null){

        openingPost.innerHTML += `
            <div class="post">
                <div class="postImg">
                    <img src="../img/${product.image}">
                </div>


                <div class="postInfo">
                        <div class="item-firstname">${product.firstname}</div>
                        <div class="item-lastname">${product.lastname}</div>
                        <div class="item-date">${product.date}
                        <span>&#127881;New Year</span>
                        </div>
                        <div class="item-phone">${product.phone}
                        <span>&#128241; Mobile Phone</span></div>
                        <div class="item-email">${product.email}
                            <span>&#128235; Mailbox</span>
                        </div>
                    </div>
                </div>
                `
            }
        }
    
    }
myPost()










