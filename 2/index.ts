const userName: string = "Nini";
const userAge: number = 22;

console.log(`${userName} is ${userAge} years old.`);

function printUserInfo(name: string, age: number): void {
  console.log(`სახელი: ${name}, ასაკი: ${age}`);
}

printUserInfo("ნინი", 22);

function printUserInfo(name: string, age: number): void {
  const result = "სახელი: " + name + ", ასაკი: " + age;
  console.log(result);
}
printUserInfo("ნინი", 22);

function printUserInfo(name: string, age: number): void {
  const result = "სახელი: " + name + ", ასაკი: " + age;
  console.log(result);

  const user: {
    profession: string;
    city: string;
    country: string;
  } = {
    profession: "Front-End Developer",
    city: "Tbilisi",
    country: "Georgia",
  };

  console.log("პროფესია: " + user.profession);
  console.log("ქალაქი: " + user.city);
  console.log("ქვეყანა: " + user.country);
}
