const product: {
  brand: string;
  model: string;
  price: number;
} = {
  brand: "Apple",
  model: "MacBook Air M2",
  price: 1200,
};

console.log("ბრენდი:", product.brand);
console.log("მოდელი:", product.model);
console.log("ფასი:", product.price + " USD");

type Product = {
  brand: string;
  model: string;
  price: number;
};

const product: Product = {
  brand: "Apple",
  model: "iPhone 15",
  price: 1000,
};

console.log("Product info:");
console.log("Brand:", product.brand);
console.log("Model:", product.model);
console.log("Price:", product.price + " USD");

const user = {
  firstName: "Nini",
  lastName: "Rostiashvili",
  email: "ninirostiashvili27@gmial.com",
  mobile: "59122494",
};

console.log("User Info:");
console.log("Name:", user.firstName, user.lastName);
console.log("Email:", user.email);
console.log("Mobile:", user.mobile);

interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

const user: User = {
  firstName: "Nini",
  lastName: "Rostiashvili",
  email: "ninirostiashvili27@gmial.com",
  mobile: "+995599123456",
};

console.log("User:", user);
