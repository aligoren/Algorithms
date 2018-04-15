const hornersMethod = (polynomArr, n, k) => {
    result = polynomArr[0];
    for(let i = 1; i < n; i++) {
        result = result * k + polynomArr[i]
    }

    console.log(`${k} => ${result}`)
}

arr = [2, -6, 3, -4]

hornersMethod(arr, arr.length, 5)