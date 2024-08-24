function secondHighest(arr) {
			// If the array is empty, has only 1 element, or all elements are the same, return -Infinity
			if (arr.length < 2) {
				return -Infinity;
			}
			
			// Remove duplicate elements by converting the array to a Set and back to an array
			let uniqueArr = [...new Set(arr)];
			
			// If the array has less than 2 unique elements, return -Infinity
			if (uniqueArr.length < 2) {
				return -Infinity;
			}
			
			// Sort the unique array in ascending order
			uniqueArr.sort((a, b) => a - b);
			
			// Return the second highest element
			return uniqueArr[uniqueArr.length - 2];
		}

function Main() {
    var n = prompt("Enter the number of elements");
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = prompt("Enter element " + (i + 1));
    }
    alert(secondHighest(arr));
}

Main();
