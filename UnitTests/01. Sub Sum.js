function subsum(arr, start, end) {
    if (start < 0){
        start = 0;
    }
    if (end > arr.length - 1){
        end = arr.length - 1;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));

