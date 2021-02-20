/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

// copy and paste here the random number generator function
let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function t01a() {

document.getElementById("result_a1").innerHTML = numbers;
document.getElementById("result_a2").innerHTML = "";

for (let i = 0; i < numbers.length; i++){
    document.getElementById("result_a2").innerHTML += numbers[i] + " "
}

}

function t01b() {
    document.getElementById("result_b").innerHTML = "";

    for(let i = numbers.length - 1; i >= 0; i--){
        document.getElementById("result_b").innerHTML += numbers[i] + " "
    }

}

function t01c() {

    let sum = 0
     for (i = 0; i < numbers.length; i++){
         sum  += numbers[i];
     }
    let avg = sum / numbers.length

    document.getElementById("result_c1").innerHTML = sum;
    document.getElementById("result_c2").innerHTML = avg
}

function t01d() {
    let smallest = numbers[0]
    let biggest = numbers[0]

    for (i = 0; i < numbers.length; i++){
        if(numbers[i] < smallest){
            smallest = numbers[i]
        }

        if( numbers[i] > biggest){
            biggest = numbers[i]
        }
    }
    document.getElementById("result_d1").innerHTML = smallest;
    document.getElementById("result_d2").innerHTML = biggest;
}

function t01e() {
    document.getElementById("result_e").innerHTML = "";
    numbers.sort(function(a,b){return a-b})

    for(i = 0; i <numbers.length; i++){
        document.getElementById("result_e").innerHTML += numbers[i] + " ";


    }


}

function t01f() {
    numbers = new Array()

    for (let i = 0; i < 20; i++){
        let digit = getRndInteger (1,20);
        numbers.push(digit);
    }

    t01a();
    t01b();
    t01c();
    t01d();
    t01e();

}

function t02() {  
    document.getElementById("joker").innerHTML = ""

    let numbers = new Array();
    for(let i = 0; i < 7; i++) {
        let digit = getRndInteger (0,9);
        numbers.push(digit);
    }


    for (let i = 0; i < numbers.length; i++){
        document.getElementById("joker").innerHTML += numbers[i] +" ";
    }


}

function t03() {
    let numbers = new Array()

    for (let i = 0; i < 41; i++){
        numbers.push(0);
    }

    // lotto numbers
    let drawn_nums = 0;
    while(drawn_nums < 7){
        let digit = getRndInteger(1,40)

        if(numbers[digit] === 0){
            numbers[digit] = 1;
            drawn_nums ++;
        }
    }

    // Extra number

    drawn_nums = 0;
    while(drawn_nums < 1){
        let digit = getRndInteger(1,40)

        if(numbers[digit] === 0){
            numbers[digit] = 2;
            drawn_nums ++;
        }
    }

    
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] === 1){
            document.getElementById("lotto").innerHTML += i + " ";

        }
    }

    for (let i = 0; i <numbers.length; i++){
        if (numbers[i] === 2){
            document.getElementById("extra").innerHTML = i 

        }
    }

    // plus number

    let plus = getRndInteger(1,40)
    document.getElementById("plus").innerHTML = plus
}



function t04() {    

}

function t05() {    
    let dices = ["",
        '<img alt="dice 1" src="img/noppa1.png">',
        '<img alt="dice 2" src="img/noppa2.png">',
        '<img alt="dice 3" src="img/noppa3.png">',
        '<img alt="dice 4" src="img/noppa4.png">',
        '<img alt="dice 5" src="img/noppa5.png">',
        '<img alt="dice 6" src="img/noppa6.png">'
    ];
    
}
