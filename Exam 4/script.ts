class Skills {
    getList(): string[] {
        return ["PHP", "JavaScript", "React", "Angular", "Vue"];
    }
}

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