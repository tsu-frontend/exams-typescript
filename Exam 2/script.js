const userName = "დავითი";
const userAge = 32;
function processAndLogUserData(name, age) {
    const concatenatedString = `მომხმარებლის სახელია ${name}, ასაკი: ${age}.`;
    const user = {
        profession: "Software Engineer",
        city: "თბილისი",
        country: "საქართველო"
    };
    console.log("--- კონკატენაციის შედეგი ---");
    console.log(concatenatedString);
    console.log("--- ობიექტის მონაცემები ---");
    console.log(user);
}
processAndLogUserData(userName, userAge);
export {};
//# sourceMappingURL=script.js.map