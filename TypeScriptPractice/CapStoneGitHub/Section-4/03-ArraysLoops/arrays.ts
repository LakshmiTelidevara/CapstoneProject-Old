let arr: number[] = [20,30,40,50];
let total: number=0;
for (let i=0; i< arr.length; i++){
console.log(arr[i]);
total+= arr[i];
}

console.log("The total is "+total);
let average: number = total/arr.length;
console.log("The average is "+average);
