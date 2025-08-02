const userName:string = 'Natia'
const userAge:number = 22

type TUser = {
    [key:string]:string
} 

function testFn( name:string, age:number){
    const user: TUser = {
      profession: "front-end programmer",
      city: "tbilisi",
      country: "georgia",
    };
const result = `user name is ${name}, user age is ${age}, user profession is ${user.profession}. user is from ${user.city}, ${user.country}`
return result
}

const finalResult = testFn(userName, userAge)
console.log(finalResult)
