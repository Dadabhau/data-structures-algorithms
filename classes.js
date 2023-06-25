// reference type
var object1 = { value: 10 };
var object2 = object1;
var object = { vaule: 10 };
[] === [] // False

// context vs scope

const object4 = {
    a: function () {
        console.log(this);
    }
}
console.log(object4.a())

// instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`We I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
