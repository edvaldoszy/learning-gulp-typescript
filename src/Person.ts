export default class Person {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public walk(): void {
        console.log(this.name + " is walking...")
    }

    public eat(): void {
        console.log(this.name + " is eating...");
    }

    public sleep(): void {
        console.log(this.name + " is now sleeping...");
    }
}
