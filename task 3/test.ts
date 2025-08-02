type TProduct ={
    brand: string,
    model: string,
    price: number
}

interface IUser{
    name: string,
    surname: string,
    mail: string,
    tel_number: number
}

const product: TProduct ={
    brand: 'lenovo',
    model: 'pro 50',
    price: 500
}


const user: IUser = {
    name: 'natia',
    surname: 'karamnishvili',
    mail: 'karamnishvilinatia@gmail.com',
    tel_number: 1234556
}

document.write(`user is ${user.name} ${user.surname} <br> <br> contact info:<br> mail- ${user.mail}<br>tel: ${user.tel_number}`)
document.write(`<br> <br> <br><br>product info: <br> product is ${product.brand} ${product.model}, it costs ${product.price}$`)