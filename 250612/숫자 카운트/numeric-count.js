const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please write your code here.
let count=0;
for(let i =1 ; i<10; i++){
    for(let j =1 ; j <10; j++){
        for(let k =1 ;k<10;k++) {
            let flag=false;
            if(i=== j || i ===k|| j===k )continue 
            for(let q =0 ; q< n ;q++){
                const [num, s, b]=arr[q];
                let strike=0;
                let ball=0;
                const strNum= num.toString().split("").map(Number);
                let index = strNum.findIndex((v)=>{
                        return v===i 
                })
          
                if(index !==-1 ){
                    if(index===0) strike++;
                    else ball++; 
                }
                  
                 index = strNum.findIndex((v)=>{
                        return v===j 
                })
                 
                if(index !==-1 ){
                    if(index===1) strike++;
                    else ball++; 
                }
                 
                 index = strNum.findIndex((v)=>{
                        return v===k
                })
                 
                if(index !==-1 ){
                    if(index===2) strike++;
                    else ball++; 
                }
              
                if(strike===s && ball===b){

                    flag=true;
                }
                else{
                    flag=false;
                    break;
                }

            }
            if(flag)count++
        }
    }
}
console.log(count)