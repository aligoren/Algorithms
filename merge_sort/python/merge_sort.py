import math

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    middle = math.floor(len(arr) / 2)
    left = arr[:middle]
    right = arr[middle:]

    return merge(merge_sort(left), merge_sort(right))


def merge(left, right):
    results = []
    indexLeft = 0
    indexRight = 0

    while len(left) > indexLeft and len(right) > indexRight:
        if left[indexLeft] < right[indexRight]:
            results.append(left[indexLeft])
            indexLeft += 1
        else:
            results.append(right[indexRight])
            indexRight += 1
    
    results += left[indexLeft:] + right[indexRight:]

    return results


numArr = [38, 27, 43, 39, 82, 10, 5]

print(merge_sort(numArr))