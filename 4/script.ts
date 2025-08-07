class Person {
    firstname: string;
    lastname: string;
    profession: string;
    experience_years: number;
  
    constructor(firstname: string, lastname: string, profession: string, experience_years: number) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.profession = profession;
      this.experience_years = experience_years;
    }
  

    class Person {
        firstname: string;
        lastname: string;
        profession: string;
        experience_years: number;
      
        constructor(
          firstname: string = "John",
          lastname: string = "Doe",
          profession: string = "Unemployed",
          experience_years: number = 0
        ) {
          this.firstname = firstname;
          this.lastname = lastname;
          this.profession = profession;
          this.experience_years = experience_years;
        }
      
        getInfo(): string {
          return `${this.firstname} ${this.lastname} is a ${this.profession} with ${this.experience_years} years of experience.`;
        }
      }


      class Skills extends Person {
        getList() {
          return ["PHP", "JavaScript", "React", "Angular", "Vue", "TypeScript", "Node.js", "CSS", "HTML", "SASS"];
        }
      }



      class Person {
        firstname: string;
        lastname: string;
        profession: string;
        experience_years: number;
      
        constructor(
          firstname: string,
          lastname: string,
          profession: string,
          experience_years: number
        ) {
          this.firstname = firstname;
          this.lastname = lastname;
          this.profession = profession;
          this.experience_years = experience_years;
        }
      
        getInfo(): string {
          return `${this.firstname} ${this.lastname} is a ${this.profession} with ${this.experience_years} years of experience.`;
        }
      }

const nini = new Person("Nini", "Rostiashvili", "Frontend Student", 1);


const outputDiv = document.getElementById("person-info");

if (outputDiv) {
  outputDiv.textContent = nini.getInfo(); 
}