const mergeSort = (arr) => {
  if(arr.length <= 1) {
    return arr;
  }
  
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let results = [];
  let indexLeft = 0;
  let indexRight = 0;
  
  while(left.length > indexLeft && right.length > indexRight) {
    if(left[indexLeft] < right[indexRight]) {
      results.push(left[indexLeft]);
      indexLeft++;
    } else {
      results.push(right[indexRight]);
      indexRight++;
    }
  }
  
  return results.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const numArr = [38, 27, 43, 39, 82, 10, 5]

console.log(mergeSort(numArr))