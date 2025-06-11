const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let max=   Number.MIN_SAFE_INTEGER
for(let i =0 ; i< n - k +1 ; i++){
   let sum =0;
    for(let j =i ; j <i+k;j++){
            sum+=arr[j]
    }
    max=Math.max(sum,max)
}
console.log(max)