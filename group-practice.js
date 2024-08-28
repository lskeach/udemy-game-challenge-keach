let vowelCounter = 0;

let example = "i like peanut butter";
let vowels = ['a','e','i','o','u','y'];

for(let i=0; i < example.length; i++){
    for(let j=0; j < vowels.length; j++){
        if(example[i] == vowels[j]){
            vowelCounter++;
        }
    }
}

console.log(vowelCounter);