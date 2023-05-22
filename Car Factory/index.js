class car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription(){
        return `${this.make} ${this.model} ${this.year} `
    }
}

class ElectricCar extends car{
    constructor(make, model, year, range){
    super(make, model, year);
    this.range = range;
    
}
getDescriptionElectric(){
    return `${this.make} ${this.model} ${this.year} ${this.range}`
}
}
let myCar = new ElectricCar('telsa', 'Model S',2019, 300)
console.log(myCar)


