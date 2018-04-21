def part(arr, p, r):
    i = (p - 1)
    x = arr[r]
    
    for j in range(p, r):
        if arr[j] <= x:
            i = i + 1
            arr[i],arr[j] = arr[j],arr[i]
    
    arr[i+1],arr[r] = arr[r],arr[i+1]
    
    return (i + 1)

def quick_sort(arr, p, r):
    if p < r:
        q = part(arr, p, r)
        quick_sort(arr, p, q - 1)
        quick_sort(arr, q + 1, r)



numbers = [21, 11, 2, 23, 34, 41, 12, 45, 11, 53]

quick_sort(numbers, 0, len(numbers) - 1)

print(numbers)