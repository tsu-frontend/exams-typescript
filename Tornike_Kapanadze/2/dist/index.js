// task 2.1
const userNAme = "Zura";
const userAge = 40;
// task 2.2 && 2.3 & 2.4 && 2.5
function func1(name, age) {
    const userInfo = "Name: " + name + " " + "Age: " + age;
    const user = {
        profession: "Doctor",
        country: "Georgia",
        city: "Tbilsi",
    };
    const result = userInfo + " Country " + user.country + " City: " + user.city + " Profession: " + user.profession;
    return result;
}
let user1 = func1(userNAme, userAge);
console.log(user1);
