
// შექმენით ახალი ტიპი product ცვლადისთვის

type product = {
    brand: string;
    model: string;
    price: number;
};

// შექმენით ინტერფეისი user ცვლადისთვის 
interface TUser {
    name: string,
    surname: string,
    email:string;
    mobileNum:string;
}

// შექმენით ცვლადი user ნიშვნელობად მიანიჭეთ ობიექტი, რომელიც შეიცავს შემდეგ ველებს: სახელი, გვარი, ელ.ფოსტა და მობილური

const user:TUser = {
    name: "salome",
    surname: "gogokhia",
    email: "gogokh@gmail.com",
    mobileNum: '586786789',
}

const product: product = {
    brand: 'ajika',
    model: 'meg 9',
    price: 50,
}


// console.log("typeScript მუშაობს");
// document.body.innerHTML += "<h2>Hello</h2>" შემოწმების მიზნით დავწერე, ბრაუზერში არ მიჩვენებდა. 


// გამოიტანეთ მონაცემები product და user ობიექტებიდან DOM-ში


document.write( `user info: ${user.name} ${user.surname}, email: ${user.email}<br>`);
document.write(`product info: ${product.brand} ${product.model}, price: ${product.price}`);





