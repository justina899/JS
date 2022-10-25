let myName = "Justina";
let surname = "Babr";
let dateOfBirth = 1988;
let dateToday = 2022;
console.log("Aš esu " + myName + " " + surname + ". Man " + (dateToday - dateOfBirth) + " metai(ų).");
//-----------------------------------------
randNum1 = Math.round(Math.random() * 5);
console.log("first number " + randNum1);
randNum2 = Math.round(Math.random() * 5);  
console.log("second number " + randNum2);
let value;
if (randNum1 > randNum2 && randNum2 > 0) {
    value = randNum1 / randNum2;
    num = (Math.round(value * 100) / 100);
    console.log("Result: " + num);
} else {
    if (randNum2 > randNum1 && randNum1 > 0) {
        value = randNum2 / randNum1;
        num = (Math.round(value * 100) / 100);
        console.log("Result: " + num);
    }
    else {
        if (randNum1 == randNum2) {
            console.log("numbers are equal");
        } else {
            console.log("one of numbers is 0");
        }
    }
}
//--------------------------------------------


