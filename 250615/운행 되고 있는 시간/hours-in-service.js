const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number)).sort((a,b)=>a[1]-b[1]);

//1 2 3 4 5 6 7 8 9
//1 2 3 4 5 6 7 8 

let result =0;
for(let i =0 ; i < n ;i++){
    const arr=new Array(segments[n-1][1]).fill(0)
    
    for(let j= 0 ; j< n;j++){
        if(i!==j){
            for(let k =segments[j][0]-1 ; k<=segments[j][1]-1;k++ ){
              
                arr[k]=1;
            }
        }
    }
    let count =0;

    for(let q= 0 ;q<arr.length;q++){
           if(arr[q]) {
            count++;
           }     
    }
    result=Math.max(result,count-2)
}
console.log(result)