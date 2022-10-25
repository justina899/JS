console.log("užd 1");
let myName = "Justina";
let surname = "Babr";
let dateOfBirth = 1988;
let dateToday = 2022;
console.log("Aš esu " + myName + " " + surname + ". Man " + (dateToday - dateOfBirth) + " metai(ų).");
//-----------------------------------------
console.log("užd 2");
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
console.log("užd 3");
randN1 = Math.round(Math.random() * 25);
console.log("pirmas: " + randN1);
randN2 = Math.round(Math.random() * 25);
console.log("antras: " + randN2);
randN3 = Math.round(Math.random() * 25);
console.log("trečias: " + randN3);
if((randN2 < randN1 && randN1 < randN3)  || (randN3 < randN1 && randN1 < randN2)){
    console.log("vidurinė reikšmė: " + randN1);
}else{
    if((randN1 < randN2 && randN2 < randN3) || (randN3 < randN2 && randN2 < randN1)){
        console.log("vidurinė reikšmė: " + randN2);
    }else{
        if((randN2 < randN3 && randN3 < randN1) || (randN1 < randN3 && randN3 < randN2)){
            console.log("vidurinė reikšmė: " + randN3);
        }else{
            console.log("kažkurie skaičiai yra lygūs");
        }
    }
}
//---------------------------------------------
console.log("užd 4");
randA = Math.round(Math.random() * 9) + 1;
console.log("a: " + randA);
randB = Math.round(Math.random() * 9) + 1;
console.log("b: " + randB);
randC = Math.round(Math.random() * 9) + 1;
console.log("c: " + randC);
if(randA < randB + randC && randB < randC + randA && randC < randB + randA){
    console.log("Trikampis gali susidaryti!");
}else{
    console.log("Trikampis negali susidaryti!");
}
//----------------------------------------------
console.log("užd 5");
let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;
rand1 = Math.round(Math.random() * 2);
console.log("pirmas: " + rand1);
if(rand1 == 0){
    nuliai = nuliai + 1;
}else{
    if(rand1 == 1){
        vienetai = vienetai + 1;
    }else{
        dvejetai = dvejetai + 1;
    }
}
rand2 = Math.round(Math.random() * 2);
console.log("antras: " + rand2);
if(rand2 == 0){
    nuliai = nuliai + 1;
}else{
    if(rand2 == 1){
        vienetai = vienetai + 1;
    }else{
        dvejetai = dvejetai + 1;
    }
}
rand3 = Math.round(Math.random() * 2);
console.log("trecias: " + rand3);
if(rand3 == 0){
    nuliai = nuliai + 1;
}else{
    if(rand3 == 1){
        vienetai = vienetai + 1;
    }else{
        dvejetai = dvejetai + 1;
    }
}
rand4 = Math.round(Math.random() * 2);
console.log("ketvirtas: " + rand4);
if(rand4 == 0){
    nuliai = nuliai + 1;
}else{
    if(rand4 == 1){
        vienetai = vienetai + 1;
    }else{
        dvejetai = dvejetai + 1;
    }
}
console.log("nuliai: " + nuliai);
console.log("vienetai: " + vienetai);
console.log("dvejetai: " + dvejetai);
//----------------------------------------
console.log("užd 6");
