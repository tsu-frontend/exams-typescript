let userName: string = "Arzu";
let userAge: number = 25;

function printUserInfo(name: string, age: number): void {
  const message: string = "Name: " + name + ", Age: " + age;

  const user: {
    profession: string;
    city: string;
    country: string;
  } = {
    profession: "Lawyer",
    city: "Tbilisi",
    country: "Georgia",
  };

  console.log(message);
  console.log("Profession:", user.profession);
  console.log("City:", user.city);
  console.log("Country:", user.country);
}

printUserInfo(userName, userAge);
