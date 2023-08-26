var emp = class {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }

    print() {
        console.log(this.id +" "+this.name);
    }
}

var n1 = new emp(1010,"Sandeep Singh");

n1.print();