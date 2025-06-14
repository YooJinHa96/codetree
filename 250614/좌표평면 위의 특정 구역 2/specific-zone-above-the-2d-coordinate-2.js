const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let result =Number.MAX_SAFE_INTEGER;
for(let i =0; i<n; i++){
    let minx = Number.MAX_SAFE_INTEGER
    let maxx =Number.MIN_SAFE_INTEGER
    let miny = Number.MAX_SAFE_INTEGER
    let maxy=Number.MIN_SAFE_INTEGER
    for(let j = 0; j <n;j++){
        if(i!==j){
            minx= Math.min(minx,points[j][0])
            maxx=Math.max(maxx,points[j][0])
            miny=Math.min(miny,points[j][1])
            maxy=Math.max(maxy,points[j][1])

        }
    }
    result=Math.min(result, (maxx-minx)*(maxy-miny));   
}
console.log(result)