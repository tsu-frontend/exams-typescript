// task 2.1

const userNAme: string = "Zura";
const userAge: number = 40;

// task 2.2 && 2.3 & 2.4 && 2.5

function func1(name: string, age: number) {
  const userInfo: string = "Name: " + name + " " + "Age: " + age;

  type Tuser = {
    profession: string;
    city: string;
    country: string;
  };

  const user: Tuser = {
    profession: "Doctor",
    country: "Georgia",
    city: "Tbilsi",
  };

  const result = userInfo + " Country " + user.country + " City: " + user.city + " Profession: " + user.profession;

  return result;
}

let user1 = func1(userNAme, userAge);

console.log(user1);
