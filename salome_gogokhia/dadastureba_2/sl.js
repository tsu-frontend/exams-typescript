let userName = "Nina";
let userAge = 28;
function greetUser(name, age) {
    let user;
    user = {
        profession: "Developer",
        city: "Bari",
        country: "Italy"
    };
    let message = "Hello, " + name + " ! You are " + age + " years old." +
        "You work as a " + user.profession + " in " +
        user.city + ", " + user.country + " ,";
    return message;
}
let result = greetUser("Nina", 28);
console.log(result);
// let greeting: string = greetUser(userName, userAge);
// console.log(greeting);
