class Vehicle{
    constructor (make, model, year){
        this.make =make;
        this.model=model;
        this.year=year;
    }


    information(){
        console.log(`make ${this.make}, model ${this.model}, year ${this.year}`);

    }


}

class Cars extends Vehicle{
    constructor (make, model, year, doors){
        super(make, model,year);
        this.doors=doors;
    }

    information(){
        super.information();
        console.log(` Doors ${this.doors}`);
    }


}

mycar = new Cars(99, 88, 2019, 'wide');
mycar.information();