const part = (arr, p, r) => {
    let i = (p - 1)
    let x = arr[r]
    for(let j = p; j < r; j++) {
        if (arr[j] <= x) {
            i++;

            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }

    let temp = arr[i+1]

    arr[i+1] = arr[r]
    arr[r] = temp

    return (i + 1)
}

const quick_sort = (arr, p, r) => {
    if(p < r) {
        let q = part(arr, p, r)
        quick_sort(arr, p, q - 1)
        quick_sort(arr, q + 1, r)
    }
}

numbers = [21, 11, 2, 23, 34, 41, 12, 45, 11, 53]

quick_sort(numbers, 0, numbers.length - 1)

console.log(numbers)