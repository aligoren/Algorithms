import random

def insertion_sort(array):
    for i in range(1, len(array)):

        key = array[i]
        j = i - 1

        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j = j -1
        
        array[j + 1] = key
    
    return array


random_array = random.sample(range(15621),128)

sorted = insertion_sort(random_array)


print(sorted)

