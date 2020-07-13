document.getElementById('input1').addEventListener('input', function (e) {
    document.getElementById('output1').style.visibility = 'visible'
    document.getElementById('output1.1').style.visibility = 'visible'
    var ibs = e.target.value;
    document.getElementById('cs1').innerHTML = 'Unit 5';
    document.getElementById('cs1.2').innerHTML = ibs / 2.5641025641025643;
    if (ibs > 100) {
        document.getElementById('cs1.1').innerHTML = 'Oops!...Grade Not Valid';
        document.getElementById('cs1.2').innerHTML = 'Oops!...Grade Value Not Valid';
    }
    if (ibs < 101) {
        document.getElementById('cs1.1').innerHTML = 'A';
    }
    if (ibs < 75) {
        document.getElementById('cs1.1').innerHTML = 'B';
    }
    if (ibs < 65) {
        document.getElementById('cs1.1').innerHTML = 'C';
    }
    if (ibs < 55) {
        document.getElementById('cs1.1').innerHTML = 'D';
    }
    if (ibs < 45) {
        document.getElementById('cs1.1').innerHTML = 'E';
    }
    if (ibs < 35) {
        document.getElementById('cs1.1').innerHTML = 'F';
    }
})

document.getElementById('input2').addEventListener('input', function (e) {
    document.getElementById('output2').style.visibility = 'visible'
    document.getElementById('output2.1').style.visibility = 'visible'
    var ibs = e.target.value;
    document.getElementById('cs2').innerHTML = '4 Unit';
    document.getElementById('cs2.2').innerHTML = ibs / 3.076923076923077;
    if (ibs > 100) {
        document.getElementById('cs2.1').innerHTML = 'Oops!...Grade Not Valid';
        document.getElementById('cs2.2').innerHTML = 'Oops!...Grade Value Not Valid';
    }
    if (ibs < 101) {
        document.getElementById('cs2.1').innerHTML = 'A';
    }
    if (ibs < 75) {
        document.getElementById('cs2.1').innerHTML = 'B';
    }
    if (ibs < 65) {
        document.getElementById('cs2.1').innerHTML = 'C';
    }
    if (ibs < 55) {
        document.getElementById('cs2.1').innerHTML = 'D';
    }
    if (ibs < 45) {
        document.getElementById('cs2.1').innerHTML = 'E';
    }
    if (ibs < 35) {
        document.getElementById('cs2.1').innerHTML = 'F';
    }
})

document.getElementById('input3').addEventListener('input', function (e) {
    document.getElementById('output3').style.visibility = 'visible'
    document.getElementById('output3.1').style.visibility = 'visible'
    var ibs = e.target.value;
    document.getElementById('cs3').innerHTML = '3 Unit';
    document.getElementById('cs3.2').innerHTML = ibs / 3.8461538461538463;
    if (ibs > 100) {
        document.getElementById('cs3.1').innerHTML = 'Oops!...Grade Not Valid';
        document.getElementById('cs3.2').innerHTML = 'Oops!...Grade Value Not Valid';
    }
    if (ibs < 101) {
        document.getElementById('cs3.1').innerHTML = 'A';
    }
    if (ibs < 75) {
        document.getElementById('cs3.1').innerHTML = 'B';
    }
    if (ibs < 65) {
        document.getElementById('cs3.1').innerHTML = 'C';
    }
    if (ibs < 55) {
        document.getElementById('cs3.1').innerHTML = 'D';
    }
    if (ibs < 45) {
        document.getElementById('cs3.1').innerHTML = 'E';
    }
    if (ibs < 35) {
        document.getElementById('cs3.1').innerHTML = 'F';
    }
})



function total() {
    var disc1 = parseInt(document.getElementById('cs1.2').innerHTML);
    var disc2 = parseInt(document.getElementById('cs2.2').innerHTML);
    var disc3 = parseInt(document.getElementById('cs3.2').innerHTML);
    var cal = disc1 + disc2 + disc3;
        grade = cal / 19.4;
    document.getElementById('gp').textContent ='GPA: ' +grade;
    
    if (grade > 5) {
        document.getElementById('gpout').innerHTML = 'Oops!...GP Value Not Valid';
    }
    if (grade < 5.01) {
        document.getElementById('gpout').innerHTML = 'DISTINCTION';
    }
    if (grade < 4.01) {
        document.getElementById('gpout').innerHTML = 'UPPER CREDIT';
    }
    if (grade < 3.01) {
        document.getElementById('gpout').innerHTML = 'LOWER CREDIT';
    }
    if (grade < 2.01) {
        document.getElementById('gpout').innerHTML = 'PASS';
    }
    if (grade < 1.01) {
        document.getElementById('gpout').innerHTML = 'FAIL';
    }
    if (document.getElementById('gp').innerHTML == 'GPA: NaN') {
        document.getElementById('gpout').innerHTML = 'Result Not Complete';
    }
}




// function age(){
//     var x=2020;
//     var v = [1992, 1999, 1926, 2000, 2019];
//     console.log([x-v[0], x-v[1], x-v[2], x-v[3], x-v[4]]);
// }
// age();

/*;;;;;;;;;;;;   OR    ;;;;;;;;;;;;;*/

// var v=[1992, 1926, 2000, 2019];
// function h(n) {
//     return 2020-n
// }
// var d=v.map(h);
// console.log(d);

/*;;;;;;;;;;;;   OR    ;;;;;;;;;;;;;*/

// misheal
// var year = [1996, 2000];
// function CA(el) {
//     return 2020 - el
// }

// function AC(arr, fn) {
//     var nw= [];
//     for (var i = 0; i < arr.length; i++) {
//         nw.push(fn(arr[i]))
//     }
//     return nw;
// }
// var ages=AC(year,CA);
// console.log(ages);






// var year = [1996, 2000, 2005, 2019, 1989];
// function CA(el) {
//     return 2020 - el
// }

// function AC(arr, fn) {
//     var nw = [];
//     for (var i = 0; i < arr.length; i++) {
//         nw.push(fn(arr[i]))
//     }
//     return nw;
// }
// var ages = AC(year, CA);
// console.log(ages);

// function fullages(n){
//     if(n>18){
//         return true;
//     }
//     else {
//         return false
//     }
// }
// var fullage=AC(ages, fullages);
// console.log(fullage);

