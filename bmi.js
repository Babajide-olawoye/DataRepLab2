class BMI {
    constructor(height, weight){
        this.height=height;
        this.weight=weight;

    }

    calcBMIorm(){

        let bmi = this.weight/(this.height ** 2);
        return bmi;
    }


}

let yourBMI = new  BMI(2, 90);
let jk = yourBMI.calcBMIorm();

console.log(jk);