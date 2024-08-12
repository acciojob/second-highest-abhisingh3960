//your JS code here. If required.
let largest=-Infinity;
let secLar=-Infinity;
for(let i=0 ; i< arr.length ; i++){
    if(arr[i]>largest){
         secLar = largest;  
         largest = arr[i];
    }
    else if(arr[i]>secLar && arr[i] !==largest ){
        secLar = arr[i]; 
    }
    
}
console.log(secLar);