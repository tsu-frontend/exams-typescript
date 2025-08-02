const product = {
    brand: 'lenovo',
    model: 'pro 50',
    price: 500
};
const user = {
    name: 'natia',
    surname: 'karamnishvili',
    mail: 'karamnishvilinatia@gmail.com',
    tel_number: 1234556
};
document.write(`user is ${user.name} ${user.surname} <br> <br> contact info:<br> mail- ${user.mail}<br>tel: ${user.tel_number}`);
document.write(`<br> <br> <br><br>product info: <br> product is ${product.brand} ${product.model}, it costs ${product.price}$`);
