// const body = document.body
// const div = document.createElement("div")
// div.innerText= "lmaaaao"
// // div.textContent = "Kireh"
// const sth = document.getElementById("sth");
// sth.innerText = "Goru Marka";
// console.log("sth");

// body.append(div)


// body.append("lmaaao")

// // const div = document.createElement("div")
// // document.querySelector('div')
// // console.log(div.innerText)
// // console.log(div.textContent)

const newShopForm = document.getElementById("newShop");
newShopForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.shopName.value);
    const shopEntry ={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({  
            shopName : e.target.shopName.value,
            shopType : e.target.shopType.value,
            shopZone : e.target.shopZone.value,
            shopOwner : e.target.shopOwner.value,
            shopContact : e.target.shopContact.value,
        })
    };

    fetch("http://localhost:3000/api/v1/venue/", shopEntry)
        .then(res => res.json())
        .then(data => {
            if(data){
                window.location.href = "http://localhost:3000/shops";
            }
        });
})

const disButton = document.getElementById("subButton")
disButton.disabled = true;

const checkBox = document.getElementById("checkie")
checkBox.addEventListener('change', (e) =>{
    if (e.target.checked){
        disButton.disabled = false;
    }
    else{
    disButton.disabled = true;
    }
})