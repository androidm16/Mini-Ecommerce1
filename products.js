let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "The Alchemist",
        category: "Fiction",
        price: 9.99,
        img: "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Alchemist-book-cover.jpg",
      },
      {
        title: "Learning To Silence The Mind",
        category: "Motivational",
        price: 9.99,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385071906l/18879598.jpg",
      },
      {
        title: "Their Eyes Were Watching God",
        category: "Drama Fiction",
        price: 9.99,
        img: "https://media.takealot.com/covers_tsins/69659/cc266a6c6576a8616bde1aa92973716e-pdpxl.jpg",
      },
      {
        title: "Rule Of Four",
        category: "Fiction",
        price: 9.99,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347646186l/18434.jpg",
      },
      {
        title: "Adultery",
        category: "Drama",
        price: 9.99,
        img: "https://www.chicagotribune.com/resizer/KAqHVU2mouV8QtyRdue-HSIAnA8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/I3EOJY56YJHMTHMSIV4EU3OP2Q.jpg",
      },
      {
        title: "Othello",
        category: "Drama Fiction",
        price: 9.99,
        img: "https://images-na.ssl-images-amazon.com/images/I/71vx+-X-GQL.jpg",
      },
    ];

    let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart")) : [];

// READ
function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          <button type="button" class="btn btn-secondary" onclick="AddtoCart(${position})" >
            Add To Cart
  iction </button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
            Edit
          </button>
          <button type="button" class="btn btn-danger" onclick="deleteProduct(${position})" >
            Delete
          </button>

           
              <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                          <option value="Fiction">Fiction</option>
                          <option value="Drama">Drama</option>
                          <option value="Drama Fiction">Drama Fiction</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    `;
  });
}

readProducts(products);

// CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}

// Add to cart
  function AddtoCart(position){
   
    cart.push({...products[position]})
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }

