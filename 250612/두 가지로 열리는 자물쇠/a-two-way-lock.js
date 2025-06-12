const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const password = input[1].split(' ').map(Number);
const password2 = input[2].split(' ').map(Number);


// Please Write your code here.
const wrap = (x, n) => ((x - 1 + n) % n) + 1;
let triplets =[];
let triplets2=[]

for(let q =0 ;q < 3 ; q++){
    let t=new Set()
    let t2=new Set();
    for(let i=password[q]-2 ; i<=password[q]+2; i++){
        t.add(wrap(i,n))
    }   
     for(let i=password2[q]-2 ; i<=password2[q]+2; i++){
        t2.add(wrap(i,n))   
    }     
    triplets.push([...t])
    triplets2.push([...t2])  
}
function generateCombinations(arr) {
  const set = new Set();
  for (let a of arr[0]) {
    for (let b of arr[1]) {
      for (let c of arr[2]) {
        set.add(`${a} ${b} ${c}`);
      }
    }
  }
  return set;
}

const set1 = generateCombinations(triplets);
const set2 = generateCombinations(triplets2);

// 교집합 개수 구하기
let count = 0;
for (let combo of set1) {
  if (set2.has(combo)) count++;
}



let total  = 0;
let product=1;
triplets.map((arr,index)=>{
    product*=arr.length;
})
let product2=1;
triplets2.map((arr,index)=>{
    product2*=arr.length
})
total=product+product2;
console.log(total - count)