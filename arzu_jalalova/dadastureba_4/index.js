// Skills კლასი
class Skills {
    getList() {
        return ['PHP', 'JS', 'REACT', 'ANGULAR', 'VUE'];
    }
}
// Person კლასი
class Person {
    constructor(firstname, lastname, profession, experience_years) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.experience_years = experience_years;
        this.skills = new Skills();
    }
    getFullInfo() {
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
