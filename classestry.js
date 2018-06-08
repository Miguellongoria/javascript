class honda {
    constructor(name,bodyStyle) {
        this._name = name;
        this._bodyStyle = bodyStyle;
        this._mpg = 35;
        this._hpower = 160;
        this.topspeed =170;
    }

    get name() {
        return this._name;
    }

    coldAirIntake() {
        this._mpg += 4 ;
        console.log(`youre mpg is now ${this._mpg}`);
    }

    tuneUp(num) {
        this._hpower += num;
        console.log(`your car horsepower has increase to ${this._hpower}`);
    }
}

var car1 = new honda ("accord","coupe");
console.log(car1.name);
car1.coldAirIntake();
car1.tuneUp(56);

class bikes extends honda {
    constructor(name, bodyStyle, terrain) {
        super(name, bodyStyle);
        this._terrain = terrain;
        this._hp = 150;
    }

    get terrain() {
        return this.terrain;
    }
}

var magic = new bikes("Yamaha YZ250X", "250cc ", "dirt");
console.log(magic.name)
magic.tuneUp(5);
