var userName = "Arzu";
var userAge = 25;
function printUserInfo(name, age) {
    var message = "Name: " + name + ", Age: " + age;
    var user = {
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
