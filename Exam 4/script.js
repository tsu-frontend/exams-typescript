"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skills {
    getList() {
        return ["PHP", "JavaScript", "React", "Angular", "Vue"];
    }
}
class Person {
    firstname;
    lastname;
    profession;
    experience_years;
    skills;
    constructor(firstname, lastname, profession, experience_years) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.experience_years = experience_years;
        this.skills = new Skills();
    }
    getFullInfo() {
        return `
            სახელი: ${this.firstname}
            გვარი: ${this.lastname}
            პროფესია: ${this.profession}
            გამოცდილება: ${this.experience_years} წელი
            უნარები: ${this.skills.getList().join(", ")}
        `;
    }
}
const person = new Person("თამარ", "დევდარიანი", "Front-End Developer", 4);
const outputElement = document.createElement("pre");
outputElement.textContent = person.getFullInfo();
document.body.appendChild(outputElement);
//# sourceMappingURL=script.js.map