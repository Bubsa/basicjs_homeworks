class Dog {
  constructor(dogName, dogKind) {
    this.name = dogName;
    this.kind = dogKind;
  }
  printdogspeak() {
    console.log(
      `${this.name} the ${this.kind} says, "You uuhhhh, you gonna eat that?"`
    );
  }
}
const doggy = new Dog("Mittens", "Schnautzer");
doggy.printdogspeak();

console.log("=============================");

class Books {
  constructor(tittle, author, status) {
    this.tittle = tittle;
    this.author = author;
    this.status = status;
  }
  printUnreadBooks() {
    if (this.status === true) {
      console.log(`${this.tittle} by ${this.author} has been read`);
    } else {
      console.log(`You still need to read ${this.tittle} by ${this.author}`);
    }
  }
}
const entryOne = new Books("Frankenstein", "Marry Shelley", true);
const entryTwo = new Books("Blood Meridian", "Cormac Mcarthy", false);
const entryThree = new Books("Project Hail Mary", "Andy Weir", false);
const entryFour = new Books("Rendezvous with Rama", "Arthur.C.Clarke", true);
const entryFive = new Books("Inferno", "Dan Brown", true);

allBooks = [entryOne, entryTwo, entryThree, entryFour, entryFive]; // Mislev deka ako gi stavam vo array i ako ja povikam funkcijata na cel array, ke mi gi dade site ama
// valjda ke treba so for loop za da ide od edna vo druga? Iskreno ne znam, probav so for loop ama se gubam vo procesot. Ako moze da mi pokazete kako bi bilo so toa ovde.

console.log(allBooks);
entryOne.printUnreadBooks();
entryTwo.printUnreadBooks();
