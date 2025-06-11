const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.
let mapper= {};
for(let i =0 ; i < arr2.length ; i++){
    mapper[arr2[i]]=true;
}
let result =0;
for(let i =0 ; i<arr1.length - m +1; i++){
    let count=0;
    for(let j =i ; j < i+m; j ++){
        if(mapper[arr1[j]]) count++;
    }
    if(count===m) result++;
}
console.log(result)