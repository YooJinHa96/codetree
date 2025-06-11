const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}
let maxNum = 10000;

const arr = new Array(maxNum).fill(0);
for(let i= 0 ; i < n;i++){
    const [x, c] =people[i];
    if(c==='G'){
        arr[x-1]=1
    }
    else if(c==='H'){
        arr[x-1]=2
    }
}
let result = 0;

// Please Write your code here.
for(let i =0 ; i < maxNum -k  ;i++){
    let count =0 ;
    for(let j=i; j<=i+k;j++){ 
        count+=arr[j];
    }
   
    result =Math.max(result, count)
}

console.log(result)