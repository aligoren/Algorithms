def counting_sort(arr, maximum_value):
    m = maximum_value + 1

    count = [0] * m

    for i in arr:
        count[i] += 1
    
    k = 0

    for i in range(m):
        for _ in range(count[i]):
            arr[k] = i
            k += 1

nums = [0, 2, 0, 1, 3, 4, 7, 1, 3, 2, 9, 3, 9, 10]

counting_sort(nums, 10)

print(nums)