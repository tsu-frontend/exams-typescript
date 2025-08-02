class PersonInfo {
    constructor() {
        this.firstName = 'natia';
        this.lastname = 'karamnishvili';
        this.profession = 'front-end programmer';
        this.experience_Years = 1;
    }
}
class SkilledPerson extends PersonInfo {
    getList() {
        return 'html, css, js, react, typescript';
    }
}
const person = new SkilledPerson();
document.write(`person ${person.firstName} ${person.lastname} is ${person.profession}, with ${person.experience_Years} year/years experience in ${person.getList()} `);
