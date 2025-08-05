let userName: string = "Nina";
let userAge: number = 28; 


function greetUser(name: string, age: number): string {
     let user: {
        profession: string; 
        city: string;
        country: string;
    };

    user = {
        profession: "Developer", 
        city: "Bari", 
        country: "Italy"
    }; 


    let message: string =
    "Hello, " + name + " ! You are " + age + " years old." +
    "You work as a " + user.profession + " in " +
    user.city + ", " + user.country + " ,"; 

    return message;
 
     
}

let result = greetUser("Nina", 28);
console.log(result);


// let greeting: string = greetUser(userName, userAge);
// console.log(greeting);
