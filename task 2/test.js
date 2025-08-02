const userName = 'Natia';
const userAge = 22;
function testFn(name, age) {
    const user = {
        profession: "front-end programmer",
        city: "tbilisi",
        country: "georgia",
    };
    const result = `user name is ${name}, user age is ${age}`;
    const result2 = `user profession is ${user.profession}. user is from ${user.city}, ${user.country}`;
    console.log(result);
    console.log(result2);
}
testFn(userName, userAge);
