// task 3.1 && 3.2 && 3.3 && 3.4

type Tproduct = {
  brand: string;
  model: string;
  price: number;
};

interface IUser {
  name: string;
  surname: string;
  email: string;
  tel: string;
}

const product: Tproduct = {
  brand: "Nokia",
  model: "N73",
  price: 399,
};

const user: IUser = {
  name: "Gela",
  surname: "Gabunia",
  email: "ggabunia12@gmail.com",
  tel: "598451289",
};

document.writeln(`Brand: ${product.brand}, Model: ${product.model}, price: ${product.price}$ <br/>  <br/> `);
document.writeln(`User: ${user.name}, Surname: ${user.surname}, Email: ${user.email}, Tel: ${user.tel} <br /> <br /> `);
