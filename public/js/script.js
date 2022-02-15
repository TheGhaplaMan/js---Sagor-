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
    fetch("http://localhost:3000/api/v1/venue/")

})
