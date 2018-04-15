def bubble_sort(arr):
    temp = 0

    for i in range(len(arr)):
        for j in range(len(arr) - 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
        
    return arr


numArr = [2,3,12,5,8,9,15,21,7,11,32,10]

print(bubble_sort(numArr))