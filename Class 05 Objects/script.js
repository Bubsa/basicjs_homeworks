console.log("I'm here");

const student = {
  // ova e objekt, sekoj objekt si ima key and value, vo ovoj sluchaj key e name, value e Bube. Se otvaraat so curly braces
  name: "Bube",
  lastName: "Simonovikj",
  age: "30",
  isAnActiveStudent: "True",
  subjects: ["HTML", "CSS", "JavaScript"],

  printSubjects: function () {
    console.log(`These are ${this.name} ${this.lastName}'s active subjects`); // koga sme vo klasa go refencira properties sho se vo object

    for (const subject of this.subjects) {
      // subject e basically varijabla sho moze da se imenuva na sekakov nachin, bilo sho moze da pishuva tamu
      console.log(subject);
    }
  },
};
console.log(student);

console.log(student.name); // vaka se povikuva samo imeto na studentot

console.log(`${student.name} ${student.lastName}`); // vaka se povikuvaat poveke stvari

student.printSubjects();

const student2 = {};
console.log(student2);

(student2.name = "Ivan"),
  (student2.age = "27"),
  (student2.email = "ivan.apostolovski@gmail.com"),
  console.log(student2);

student2.printNameAndAge = function () {
  console.log(`${this.name} has ${this.age} years.`);
};

student2.printNameAndAge();

console.log(student2["email"]); //

const itsActuallyMe = {
  nameOne: "Bubsa",
  surname: "Simonovikj",
  ageOne: "30",
  isMemberOfAcademy: "true",
  eatenBreakfast: "false",
  showsWatched: ["Saul", "BB", "Marvel", "Kapetnaese"],

  printItsActuallyMe: function () {
    console.log(
      `A person by the name of ${this.nameOne} ${this.surname} aged ${this.ageOne} has seen the following shows: ${this.showsWatched}`
    );
  },
};
itsActuallyMe.printItsActuallyMe();

itsActuallyMe.nameOne = "Vlatko";
console.log(itsActuallyMe);
itsActuallyMe.surname = "Krstevski";
console.log(itsActuallyMe);
itsActuallyMe.ageOne = "35";
itsActuallyMe.isMemberOfAcademy = "true";
itsActuallyMe.eatenBreakfast = "true";
// itsActuallyMe.showsWatched =
console.log(itsActuallyMe);
delete itsActuallyMe.nameOne;

const trainer = {
  name: "Bube",
  lastNameOne: "Simonovikj",
  academy: "SEDC",
  lecture: "Object",

  getFullName: function () {
    //funkcijata ja vikas da ja pokaze informacijata podole
    console.log(`This persons full name is ${this.name} ${this.lastNameOne}`); // moras so this da zemes i da gi vlechesh stvarite
  },
};
console.log(trainer);
trainer.getFullName(); // vaka ja povikuvas funkcijata t.e metodata
trainer.age = "30"; // vaka se dodavaat stvari vo object
console.log(trainer);

// Constructor notation the old way

function Student(name, age, skills = [], isEnrolled = true) {
  // Initialize the properties

  this.name = name;
  this.age = age;
  this.skills = skills;
  this.isEnrolled = isEnrolled;

  this.printSkills = function () {
    console.log(`${this.name}'s Skills:`);

    for (const skill of this.skills) {
      console.log(skill);
    }
  };
}

const student3 = new Student("Bube", 30, ["JavaScript", "TypeScript"], false);
console.log(student3);

function test() {
  // this koga ne e povrzano so neshto, togas go asocira so samiot window. Koga this e vnatre ondak referencira nesho vnatre, ako e nadvor togas na window
  console.log(this);
}
test();

// Constructor class (the new way - ES6)

class BootcampStudent {
  constructor(
    studentName,
    studentAge,
    studentSkills = [],
    studentIsEnrolled = true
  ) {
    this.name = studentName;
    this.age = studentAge;
    this.skills = studentSkills;
    this.isEnrolled = studentIsEnrolled;
  }
  printSkills() {
    console.log(`${this.name}'s skills:`);
    for (const skill of this.skills) {
      console.log(skill);
    }
  }
  addSkill(skill) {
    // zborot skill moze da bide bilo kakov zbor,
    this.skills.push(skill);
    console.log(`Added skill ${skill} for ${this.name}`);
  }
}
const student4 = new BootcampStudent("Bob", 55, ["C++", "Rust"]);
console.log(student4);
student4.printSkills();
student4.addSkill("JavaScript");
console.log(student4);

class Car {
  constructor(
    modelCar,
    modelColor,
    modelYear,
    modelFuel,
    modelFuelConsumption
  ) {
    this.modelCar = modelCar;
    this.modelColor = modelColor;
    this.modelYear = modelYear;
    this.modelFuel = modelFuel;
    this.modelFuelConsumption = modelFuelConsumption;
  }
  calculateFuelForDistance(distance) {
    return distance * (this.modelFuelConsumption / 100);
  }
}

const Car1 = new Car("Kia", "Red", "2007", 100, 50);
console.log(Car1);
const fuelWasted = Car1.calculateFuelForDistance(50);
console.log(fuelWasted);
