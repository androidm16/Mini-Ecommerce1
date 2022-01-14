let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart"))
: [];

function readCart(cart) {
  document.querySelector("#cart").innerHTML = "";
  cart.forEach((cart, position) => {
      document.querySelector("#cart").innerHTML += `
    <div class="card" style="width:400px">
        <img src="${cart.img}" class="card-img-top" alt="${cart.title}"/>
        <div class="card-body">
          <h5 class="card-title">${cart.title}</h5>
          <p class="card-text">R${cart.price}</p>
          <button type="button" class="btn btn-danger" onclick="deleteProduct(${position})" >
          Delete
        </button>
          </div>
          </div>
    `;
  });
}
readCart(cart);

console.log(cart);

// Remove from Cart
function deleteProduct(position) {
    let confirmation = confirm(
      "Are you sure you want to delete the selected product?"
    );
  
    if (confirmation) {
      cart.splice(position, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      readCart(cart);
    }
  }
  console.log(cart);