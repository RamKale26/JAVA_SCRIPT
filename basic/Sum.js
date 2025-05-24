//  Use Class

// class Add
// {
//     setValue=(x,y)=>{
//         this.x=x;
//         this.y=y;
//     }
//     showAdd=()=>{
//         console.log("Addition is :"+(this.x+this.y));
//         }
// }
// let add=new Add();
// add.setValue(10,20);
// add.showAdd();



// pass parameter to constructor
// class Add {
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     calAdd() {
//         console.log("Addition is :"+(this.x+this.y));
//     }
// }
// let add=new Add(100,200);
// add.calAdd();


//use inheritance in JavaScript

class Value {
    setValues(x,y){
        this.x=x;
        this.y=y;
    }
}
class Add extends Value{
    getAdd(){
        return this.x+this.y;
    }
}
class Mul extends Value{
    getMul(){
        return this.x * this.y;
    }
}

let a = new Add();
a.setValues(100,200);
let Addition = a.getAdd();
console.log("Addition is :"+Addition);

let m = new Mul();
m.setValues(10,5);
let Multiply = m.getMul();
console.log("Multiplication is :"+Multiply);