const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.
const sum = abilities.reduce((acc,cur)=>acc+cur,0)
let result =Number.MAX_SAFE_INTEGER
let flag=false
for(let i=0 ; i < 5 ; i ++){
    for(let j=i+1; j<5;j++){
        for(let k=0 ; k<5;k++){
                
                if(i===k || j===k ) continue;
                const team1= abilities[i]+abilities[j];
                const team2=  abilities[k];
                const team3 = sum - team1-team2;
                const max = Math.max(team1, team2, team3);
                const min = Math.min(team1,team2,team3);
                if(team1 !==team2 && team1!==team3 && team2!==team3) 
                  {
                    flag =true;
                      result=Math.min(max-min,result);
                }

           
        }
    }
}
if(!flag)result=-1;
console.log(result)