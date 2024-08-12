let arr = [];
let n = prompt("Enter the number of elements:");

for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Enter element ${i + 1}:`), 10));
}

let largest = -Infinity;
let secLar = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secLar = largest;
        largest = arr[i];
    } else if (arr[i] > secLar && arr[i] !== largest) {
        secLar = arr[i];
    }
}

alert(secLar);
