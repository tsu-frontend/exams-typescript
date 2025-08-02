const userName: string = "დავითი";
const userAge: number = 32;

interface UserDetails {
    profession: string;
    city: string;
    country: string;
}

function processAndLogUserData(name: string, age: number): void {
    const concatenatedString = `მომხმარებლის სახელია ${name}, ასაკი: ${age}.`;

    const user: UserDetails = {
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