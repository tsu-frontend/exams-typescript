const product = {
    brand: "Apple",
    model: "iPhone 14",
    price: 999
};
const user = {
    firstName: "Arzu",
    lastName: "Jalalova",
    email: "arzu@example.com",
    phone: "+995599000000"
};
// DOM-ში გამოტანა
const productDiv = document.getElementById("product-info");
const userDiv = document.getElementById("user-info");
if (productDiv) {
    productDiv.innerHTML = `
    <h2>Product Info</h2>
    <p>Brand: ${product.brand}</p>
    <p>Model: ${product.model}</p>
    <p>Price: $${product.price}</p>
  `;
}
if (userDiv) {
    userDiv.innerHTML = `
    <h2>User Info</h2>
    <p>Name: ${user.firstName} ${user.lastName}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
  `;
}
