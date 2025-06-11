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
    let arr1Mapper ={}
     for(let j =i ; j < i+m; j ++){
         arr1Mapper[arr1[j]]=true;
         
    }
    let count=0;
    for(let j =i ; j < i+m; j ++){
        if(mapper[arr1[j]]) count++;
         
    }
    let countb=0;
    for(let k =0 ; k<m;k++){
        if(arr1Mapper[arr2[k]])countb++;
    }

    if(count===m&& countb===m) result++;
}
console.log(result)