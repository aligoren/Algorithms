const counting_sort = (arr, maximum_value) => {
    let buck = new Array(maximum_value + 1);
    let index = 0;
    let i;

    for(i = 0; i < arr.length; i++) {
        if(!buck[arr[i]]) {
            buck[arr[i]] = 0;
        }
        buck[arr[i]]++;
    }

    for(i = 0; i < buck.length; i++) {
        while(buck[i] > 0) {
            arr[index++] = i;
            buck[i]--;
        }
    }
}

let nums = [0, 2, 0, 1, 3, 4, 7, 1, 3, 2, 9, 3, 9, 10]

counting_sort(nums, 10)

console.log(nums)