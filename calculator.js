
class Calc {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    static addition (a, b) {
        return a + b;
    }

    static subtraction(a, b) {
      return  a - b;
    }
    static division(a, b){
        return a / b;
    }
    static multiplication(a, b){
        return a * b;
    }
}

module.exports = Calc