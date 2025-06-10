const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let  max =-1

for(let i=0; i < n ;i++){
    for(let j =i+1 ; j<n ; j++){
        for(let k = j+1; k<n;k++){
           let flag=false;
            let a1=arr[i].toString().split("").reverse().join(""); //225
            let a2= arr[j].toString().split("").reverse().join("");//6
            let a3= arr[k].toString().split("").reverse().join("");//1137
            let maxLength = Math.max(a1.length,a2.length,a3.length);
            for(let q= 0; q<maxLength ; q++){
               if (+(a1[q] || 0) + +(a2[q] || 0) + +(a3[q] || 0) < 10){
            
                    flag=true;
                }
                else flag=false;
                 if(!flag) break;
            }
            if(flag){
              
                max=Math.max(arr[i] + arr[j]+ arr[k], max)
            }
            
        }
    }
}
console.log(max)