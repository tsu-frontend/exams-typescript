class Person {
    firstName;
    lastName;
    profession;
    experienceYears;
    constructor(firstName, lastName, profession, experienceYears) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
}
class Skills extends Person {
    getList() {
        return ["PHP", "JavaScript", "React", "Angular", "Vue", "TypeScript", "Node.js", "CSS", "HTML", "SASS"];
    }
}
const person = new Person("ahmad", "kaddour", "frontend dev", 100);
document.body.innerHTML += `
<p>${person.firstName}</p>
<p>${person.lastName}</p>
<p>${person.profession}</p>
<p>${person.experienceYears}</p>
`;
export {};
//# sourceMappingURL=script.js.map