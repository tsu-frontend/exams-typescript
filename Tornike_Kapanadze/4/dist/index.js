class Person {
    constructor(firsname = "Zaza", lastname = "Manjgaladze", profession = "Web Developer", experience_years = 23) {
        this._firstname = firsname;
        this._lastname = lastname;
        this._profession = profession;
        this._experience_years = experience_years;
    }
}
class Skils extends Person {
    getList() {
        return "PHP, JS, REACT, ANGULAR, VUE";
    }
}
const person1 = new Person();
const person1Skils = new Skils();
document.writeln(`Name: ${person1._firstname}, Surname: ${person1._lastname} Profession: ${person1._profession}, Experience Years: ${person1._experience_years}, Skils: ${person1Skils.getList()}`);
