const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.
let result =0;

for(let i=0 ; i <n;i++){
    let flag=false
    for(let j =0 ;j<n; j++){
        if(i!==j){
            if((segments[i][0]<=segments[j][0] && segments[i][1]>=segments[j][1])||
            (segments[i][0]>=segments[j][0]&&segments[i][1]<=segments[j][1])
            ){
                flag=true;
                break;
            }

        }
    
    }
    if(!flag)result++;
}
console.log(result)