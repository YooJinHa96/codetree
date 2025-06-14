const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.
let result = 0;
for(let i=0 ; i < n ; i ++){

    for(let j=0;j< n;j++){
        let minx = Number.MAX_SAFE_INTEGER
        let maxx =Number.MIN_SAFE_INTEGER
        let miny = Number.MAX_SAFE_INTEGER
        let maxy=Number.MIN_SAFE_INTEGER
        for(let k=0; k<n;k++){
            for(let q =0 ; q<n ;q++){
                if(i!==j && i!==k && i!==q&& j!==k&&j!==q && k!==q){
                    const [x1,y1]=points[i]
                    const [x2,y2]=points[j]
                    const [x3,y3]=points[q]
                    let width=0;
                    let height =0;
                    if(x1 === x2 && y1!==y2&&x1!==x3){
                        if(y1 ===y3 ){
                            width = Math.abs(x3-x1);
                            height = Math.abs(y2-y1);
                        }
                        else if(y2 ===y3){
                            width= Math.abs(x3-x2);
                            height= Math.abs(y2-y1);
                        }
                    }
                    else if(x1===x3 && x1!==x3&& y1!==y3){
                        if(y1===y2){
                            width = Math.abs(x2- x1)
                            height = Math.abs(y3-y1)
                        }
                        else if(y2===y3){
                            width = Math.abs(x2- x3)
                            height = Math.abs(y3-y1)
                        }
                    }  
                    else if(x2===x3 &&x2!==x1 &&y2!==y3 ){
                        if(y2===y1){
                            width= Math.abs(x2 - x1);
                            height= Math.abs(y3- y2);
                        }else if(y3===y1){
                            width= Math.abs(x3 - x1);
                            height= Math.abs(y3- y2);
                        }
                    }
                     result = Math.max(width*height,result)
                
                }
            }
        }
  
    }
}
console.log(result)