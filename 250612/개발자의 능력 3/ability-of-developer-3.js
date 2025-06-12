const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.
let min=Number.MAX_SAFE_INTEGER
let sum = arr.reduce((acc, cur) => acc + cur, 0);
//2팀= sum-1팀 
// 1팀- 2팀 == 2*1팀- sum
for(let i=0 ; i < 6;i++){
    for(let j=i+1; j<6;j++){
        for(let k=j+1; k<6;k++){
            min=Math.min(min,Math.abs(sum-2*(arr[i]+arr[j]+arr[k])))
        }
    }
}
console.log(min)