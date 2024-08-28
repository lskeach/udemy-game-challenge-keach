//count from 0 to 9

//start with a variable that is zero and slowly increases by 1
//console log each value of the variable until it reaches 10

//for (let i = 0; i < 10; i++){
//    console.log(i);
//}

//let num = 0;
//while(num < 10){
    //console.log(num);
   // num++
//}

//count even num 4 to 20
//for (let i = 4; i < 21; i+=2){
    //console.log(i);

//}

//display odd numbers from 22 to 3
/*for (let i = 22; i >= 3; i--){
    if(i % 2 === 1){
        console.log(i);
    }

}

for (let i = 21; i > 2; i-=2){
    console.log(i);
} */

//display every index of an array
/*
let myArr = [6,43,3,10,5,0,22,73,17,832,"Hi",529,":D"];
console.log(myArr);
for(let i = 0; i < myArr.length; i++){
    myArr[i] = 0
}
console.log(myArr);
*/

/*let multiArr = [[0,1,2,3],[4,5,6,7,8],[9]];
for (let i = 0; i < multiArr.length; i++){
    for (let j = 0; j < multiArr[i].length; j++){
        console.log(multiArr[i][j]);
    }
} */

let multiArr = [0, [1, 2, 3], 4, [5, 6, 7, 8], 9];
    for (let i = 0; i < multiArr.length; i++) {
        if (!multiArr[i].length){
            console.log(multiArr[i]);
        }
        
        for (let j = 0; j < multiArr[i].length; j++) {
            console.log(multiArr[i][j]);
        }
    }