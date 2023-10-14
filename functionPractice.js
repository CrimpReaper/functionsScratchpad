function rollDie(){
    let roll = Math.floor(Math.random()*6) +1;
    console.log(`Rolled: ${roll}`);

}

rollDie();




function isValidPassword(user, pass){
if (pass.length < 8) {
    return false;
}
if(pass.indexOf(' ') !== -1){
    return false;
}
if(pass.indexOf(user) !== -1){
    return false;
}
return true;
}

function greet() {
    console.log("Hi, I love you!");
}

function repeatThreeTimes(func){
    func();
    func();
    func();
}
function repeat(num, func){
    for (let i = 0; i< num; i++) {
        func()
    }
}

let funcs = [greet, diss];

const myFunc = function add(x,y){
    return  x + y;
}


const double = makeMultiplyFunc(2);
double(9); //returns 18

//how to get around single-threadedness

//setTimeout waits a certain amount of time before something else occurs
//for example:

greet();
setTimeout(diss, 2000); //accepts (FUNCTION, delay); does not hold up the thread, passes it off to the browser, then browswer sends back after alotted time.

//setInterval(function, interval)  calls function over and over again for the interval, does not stop. have to clear(). setInterval() returns a value that you can use to in clearInterval(value_returned)

// setTimeout(doubleDiss, 1000);
// setTimeout(function (){
//     diss();
//     diss();
// }, 1000);  These do the same thing
