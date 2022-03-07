var arr = [20, 30, 40, 50];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    total += arr[i];
}
console.log("The total is " + total);
var average = total / arr.length;
console.log("The average is " + average);
