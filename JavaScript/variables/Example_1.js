/*
    var is a function Scoap variable
    We can access the var anywhere the function
*/

function f1() {
    if (true) {
        //var a = 10;   //✔️    Initialization
        var a;          //✔️    Declaring
        a = 10;         //✔️    Assignment
    }
    console.log(a)
}
f1()


/*
    let is a Block Scoap { Block } variable
    We can't access the let outside the Block
*/

function f2() {
    if (true) {
        // let a = 20;  //✔️    Initialization
        let a;          //✔️    Declaring
        a = 20;         //✔️    Assignment
        console.log(a)  //✔️
    }
    // console.log(a)  ❌
}
f2()


/*
    Const is also a Block Scoap { Block } variable
    We can't access the Const outside the Block
    And value dose not be change
*/

function f3() {
    if (true) {
        const a = 30;       //✔️    Initialization
        // const a;        //❌
        // a = 12;         //❌
        console.log(a)  //✔️
    }
    // console.log(a)  ❌
}
f3()