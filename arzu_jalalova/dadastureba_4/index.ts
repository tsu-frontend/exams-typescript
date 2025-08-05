// Skills კლასი
class Skills {
  getList(): string[] {
    return ['PHP', 'JS', 'REACT', 'ANGULAR', 'VUE'];
  }
}

// Person კლასი
class Person {
  firstname: string;
  lastname: string;
  profession: string;
  experience_years: number;
  skills: Skills;

  constructor(firstname: string, lastname: string, profession: string, experience_years: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;
    this.experience_years = experience_years;
    this.skills = new Skills();
  }

  getFullInfo(): string {
    return `
      <p>სახელი: ${this.firstname}</p>
      <p>გვარი: ${this.lastname}</p>
      <p>პროფესია: ${this.profession}</p>
      <p>გამოცდილება: ${this.experience_years} წელი</p>
      <p>უნარები: ${this.skills.getList().join(', ')}</p>
    `;
  }
}

// მომხმარებლის ობიექტი
const person = new Person("არზუ", "ჯალალოვა", "Front-End დეველოპერი", 2);

// DOM-ში მონაცემების გამოტანა
const userInfoDiv = document.getElementById("user-info");
if (userInfoDiv) {
  userInfoDiv.innerHTML = person.getFullInfo();
}
