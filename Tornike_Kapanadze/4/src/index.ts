class Person {
  _firstname: string;
  _lastname: string;
  _profession: string;
  _experience_years: number;

  constructor(firsname: string = "Zaza", lastname: string = "Manjgaladze", profession: string = "Web Developer", experience_years: number = 23) {
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
