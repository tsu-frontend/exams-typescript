//4/1
class Person {
  firstname: string;
  lastname: string;
  profession: string;
  experience_years: number;
  skills: Skill;

// 4/2

  constructor(firstname: string = "Elene", lastname: string = "Maisuradze", profession: string = "Developer", experience_years: number = 5, skills: Skill = new Skill()) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;
    this.experience_years = experience_years;
    this.skills = skills;
  }
}

const person = new Person();
console.log(person);


//4/3  4/4
class Skill extends Person { 
  getList(): string[] {
    return ["PHP", "JS", "REACT", "ANGULAR", "VUE"];
  }
}




//4/5
const myPerson =  new Skill()
document.body.innerHTML += `<h2>User Info</h2>
First Name: ${myPerson.firstname}<br>
Last Name: ${myPerson.lastname}<br>
Profession: ${myPerson.profession}<br>
Experience Years: ${myPerson.experience_years}<br>
Skills: ${myPerson.getList().join(", ")}`;


