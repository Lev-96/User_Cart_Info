
function add() {
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let date =  document.getElementById('date').value    
    let phone = document.getElementById('phone').value
    let image = document.getElementById('img').files[0]['name']

    let id = 1

    if (localStorage.getItem('id') != null) {
        id = +localStorage.getItem('id') + 1
    }

    let product = {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email:email,
        date:date,
        phone:phone,
        image:image
    }

    localStorage.setItem(`product_${id}`, JSON.stringify(product))
    localStorage.setItem(`id`, id)

    location.href = 'admin/add.html'

}


function setImg(){
    let imgName = document.getElementById('img').files[0]['name']
    document.getElementById('imgTag').setAttribute("src", `./img/${imgName}`)
}
