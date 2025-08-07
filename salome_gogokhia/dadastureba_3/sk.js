// შექმენით ახალი ტიპი product ცვლადისთვის
// შექმენით ცვლადი user ნიშვნელობად მიანიჭეთ ობიექტი, რომელიც შეიცავს შემდეგ ველებს: სახელი, გვარი, ელ.ფოსტა და მობილური
const user = {
    name: "salome",
    surname: "gogokhia",
    email: "gogokh@gmail.com",
    mobileNum: '586786789',
};
const product = {
    brand: 'ajika',
    model: 'meg 9',
    price: 50,
};
// console.log("typeScript მუშაობს");
// document.body.innerHTML += "<h2>Hello</h2>" შემოწმების მიზნით დავწერე, ბრაუზერში არ მიჩვენებდა. 
// გამოიტანეთ მონაცემები product და user ობიექტებიდან DOM-ში
document.write(`user info: ${user.name} ${user.surname}, email: ${user.email}<br>`);
document.write(`product info: ${product.brand} ${product.model}, price: ${product.price}`);
