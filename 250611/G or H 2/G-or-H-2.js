const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

// Please Write your code here.
let maxPosition = 101;
let result = 0 ;
let arr= new Array(maxPosition).fill(0);
for(let i=0 ; i < n ; i ++){
   
    const {pos, letter} = people[i]
    arr[pos]=letter
}
for(let i =0 ; i < maxPosition; i++){
    let gCount =0;
    let hCount =0 ;
    let distance = 0;
    if(!arr[i])continue;
    for(let j =i ; j <maxPosition;j++){
        if(arr[j]==='G') gCount++;
        if(arr[j]==='H') hCount++;
        if( arr[j]!==0&&((gCount===0&&hCount>0)||( hCount===0&&gCount>0) || (gCount>0&& hCount>0&&gCount===hCount))){
            distance=j-i;

           result=Math.max(distance,result)
        }
    }
 
}
console.log(result)