class Person {
  firstName: string;
  lastName: string;
  profession: string;
  experience_years: string;

  constructor() {
    this.firstName = "salome";
    this.lastName = "gogokhia";
    this.profession = "developer";
    this.experience_years = "14";
  }
}

// შექმენით Skills კლასი, რომელიც შეიცავს getList () მეთოდს. აღნიშნულმა მეთოდმა უნდა დააბრუნოს სხვდასხვა
// პროგრამული ტექნოლოგიების ჩამონათვალი - მაგალითად: PHP JS, React ..)

class Skills extends Person {
  getList() {
    return " Css, HTML,  React, Angular, Vue";
  }
}


const user1 = new Person()
console.log(user1)

document.write('<br> =========== <br> <br> <br>');
document.write('user: ${user1.firstname} ${user1.lastName}, user is ${user1.profession} for ${user1.experience_years} year/years, <br><br>  user is working   ')





