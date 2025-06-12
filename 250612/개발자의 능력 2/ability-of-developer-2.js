const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

// Please Write your code here.
const sum = arr.reduce((acc, cur) => acc + cur, 0);
let result =Number.MAX_SAFE_INTEGER
for(let i=0 ; i < arr.length; i++){
    for(let j= i+1 ; j < arr.length ;j++){
        for(let k = 0; k< arr.length; k++){
            for(let l = k+1; l<arr.length;l++){
                if(k === i || i===l || j===k||j===l)continue;
                const team1= arr[i]+arr[j];
                const team2 = arr[k]+arr[l];
                const team3 = sum - team1-team2;

                const max = Math.max(team1,team2,team3);
                const min = Math.min(team1,team2,team3);
                result = Math.min(result, max-min)
            }
        }
    }
}
console.log(result)