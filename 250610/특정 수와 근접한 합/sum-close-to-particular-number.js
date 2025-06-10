const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let sum = arr.reduce((acc, curr) => acc + curr, 0);

let dis= Number.MAX_SAFE_INTEGER
for(let i=0 ;i < n ; i++){
    for(let j =i+1 ; j<n ;j++){
        dis = Math.min(dis, Math.abs(sum -arr[i]-arr[j]))
    }
}
console.log(dis)