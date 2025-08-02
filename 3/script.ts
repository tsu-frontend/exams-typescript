type Product = {
  brand: string;
  model: string;
  price: string;
};

const product: Product = {
  brand: "bmw",
  model: "x5",
  price: "60000",
};

const user = {
  name: "ahmad",
  surname: "kaddour",
  email: "ahmad@gmail.com",
  number: "112",
};

interface User {
  name: string;
  surname: string;
  email: string;
  number: string;
}

document.body.innerHTML += `
<h1>products</h1>
<p>${product.brand}</p>
<p>${product.model}</p>
<p>${product.price}</p>
<h1>user</h1>
<p>${user.name}</p>
<p>${user.surname}</p>
<p>${user.email}</p>
<p>${user.number}</p>
`;
