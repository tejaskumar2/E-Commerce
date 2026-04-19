let con = document.querySelector(".pro");
let addbtn = document.getElementById("add");
function addproduct() {
    let adds = document.createElement("div");
    adds.classList.add("im");
    adds.innerHTML = `
            <img src=${img} alt="">
            <div class="des">
                <span>Campa</span>
                <h4> white and classic T-Shirts</h4>
                <span>Minimal floral line art printed on the lower right side</span>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>

                <h4><i class="fa-solid fa-rupee-sign"></i>500</h4>
            </div>
            <div class="cart">
                <i class="fa-solid fa-cart-plus"></i>
            </div>
    `;
    con.appendChild(adds);
}
addbtn.addEventListener("click", addproduct);





let carticon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carts");
let cartclose = document.querySelector("#cart-close");

carticon.addEventListener("click", () => cart.classList.add("active"));
cartclose.addEventListener("click", () => cart.classList.remove("active"));

document.querySelector(".btn-buy").addEventListener("click", () => {

    alert("Your cart is empty! Please add items.");
    
});