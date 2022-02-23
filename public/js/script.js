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
if (newShopForm) {
  newShopForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.shopName.value);
    const shopEntry = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shopName: e.target.shopName.value,
        shopType: e.target.shopType.value,
        shopZone: e.target.shopZone.value,
        shopOwner: e.target.shopOwner.value,
        shopContact: e.target.shopContact.value,
      }),
    };

    fetch(`${window.location.origin}/api/v1/venue/`, shopEntry)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.href = `${window.location.origin}/shops`;
        }
      });
  });
}

const shopUpdate = document.getElementById("updateShop");
if (shopUpdate) {
  shopUpdate.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.shopName.value);
    const shopUpdate = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shopName: e.target.shopName.value,
        shopType: e.target.shopType.value,
        shopZone: e.target.shopZone.value,
        shopOwner: e.target.shopOwner.value,
        shopContact: e.target.shopContact.value,
      }),
    };

    fetch(
      `${window.location.origin}/api/v1/venue/${
        window.location.pathname.split("/updateShop/")[1]
      }`,
      shopUpdate
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.href = `${window.location.origin}/shops`;
        }
      });
  });
}

function shopDlt(id) {
  const dltShop = {
    method: "DELETE",
  };
  console.log(id, "vung vang");

  fetch(`${window.location.origin}/api/v1/venue/${id}`, dltShop)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        window.location.href = `${window.location.origin}/shops`;
      }
    });
}

const disButton = document.getElementById("subButton");
if (disButton) disButton.disabled = true;

const checkBox = document.getElementById("checkie");
if (checkBox) {
  checkBox.addEventListener("change", (e) => {
    if (e.target.checked) {
      disButton.disabled = false;
    } else {
      disButton.disabled = true;
    }
  });
}
