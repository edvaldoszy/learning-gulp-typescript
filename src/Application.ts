import Person from "./Person";

export default class Application {

    private person: Person;

    constructor() {
        this.person = new Person("Edvaldo Szymonek");
        this.person.walk();
    }
}
