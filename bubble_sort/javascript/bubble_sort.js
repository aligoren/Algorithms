const bubbleSort = (arr) => {
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

let numArr = [2,3,12,5,8,9,15,21,7,11,32,10]

console.log(bubbleSort(numArr))