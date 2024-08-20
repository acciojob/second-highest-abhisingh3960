function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let first = -Infinity, second = -Infinity;
 for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
 return second;
}
