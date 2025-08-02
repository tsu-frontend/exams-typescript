let userName: string = "Anna";
let userAge: number = 28;
let age: number = 28;
console.log(age);


function printUserInfo(name: string, age: number): void {
  const user: { profession: string; city: string; country: string } = {
    profession: "Software Developer",
    city: "Tbilisi",
    country: "Georgia"
  };
  console.log("User's name is " + name + " and their age is " + age + ".");
}


printUserInfo(userName, userAge);