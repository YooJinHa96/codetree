const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    baskets.push([candy, position]);
}
let maxLocation= 101
// Please Write your code here.
const basketArr= new Array(maxLocation).fill(0);
for(let i=0;i<n ;i++){
    const [candy, position]=baskets[i];
    basketArr[position]+=candy;
}

let max=Number.MIN_SAFE_INTEGER
for(let i=0 ; i < maxLocation ; i++){
   let count=0;

    for(let j= i -k ; j<=i+k ; j++){
        if( j <0 || j>=maxLocation) continue;
        else {

            count+=basketArr[j];}
    }

    max=Math.max(max,count)
}
console.log(max)