const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let count = Math.pow(n,3);
for(let i=1 ; i <=n;i++){
    if(Math.abs(a-i) >2)
    {
        for(let j=1; j<=n;j++){
            if( Math.abs(b-j)>2) { 
                for(let k =1 ;k<=n;k++){
                    if(Math.abs(c-k)>2) 
                    count--
                    }
            }
        }
    }
}
console.log(count)