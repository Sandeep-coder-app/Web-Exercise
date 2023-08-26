// OOP class
class Employee {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    print() {
        console.log(this.id + " "+ this.name);
    }
}

var n1 = new Employee(10, "Sandeep Singh");
var n2 = new Employee(100, "Akash Yadav");

n1.print();
n2.print();