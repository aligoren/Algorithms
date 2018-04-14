const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  let random_array = shuffle(Array(128).fill().map((_, i) => i * i))
  
  
const insertion_sort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
      
        let key = arr[i];
        let j = i-1;
        
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        
        arr[j + 1] = key;
    }

    return arr
}

const sorted = insertion_sort(random_array);

console.log(sorted);