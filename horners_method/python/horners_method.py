def hornersMethod(polynomArr, n, k):
    result = polynomArr[0]
    for i in range(1, n):
        result = result * k + polynomArr[i]
    
    print(f"{k} => {result}")

arr = [2, -6, 3, -4]

hornersMethod(arr, len(arr), 5)