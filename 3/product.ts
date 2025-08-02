

//3/1
let product: Product = {
  brand: "Apple",
  model: "iPhone 15",
  price: 1200
};


// 3/2
type Product = {
  brand: string;
  model: string;
  price: number;
};

//3/3
let user: User = {
  name: "Nino",
  surname: "Maisuradze",
  email: "nino.maisuradze@example.com",
  mobile: "+995599123456"
};

//3/4
interface User {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

//3/5

document.body.innerHTML += `<h2>Product</h2>
Brand: ${product.brand}<br>
Model: ${product.model}<br>
Price: ${product.price}<br>
<h2>User</h2>
Name: ${user.name}<br>
Surname: ${user.surname}<br>
Email: ${user.email}<br>
Mobile: ${user.mobile}<br>`;