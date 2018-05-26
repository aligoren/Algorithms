#include <iostream>

using namespace std;

void printArray(int *array, int n)
{
    for (int i = 0; i < n; ++i)
        std::cout << array[i] << std::endl;
}

void quick_sort(int *array, int low, int high)
{
    int i = low;
    int j = high;
    int pivot = array[(i + j) / 2];
    int temp;

    while (i <= j)
    {
        while (array[i] < pivot)
            i++;
        while (array[j] > pivot)
            j--;
        if (i <= j)
        {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    if (j > low)
        quick_sort(array, low, j);
    if (i < high)
        quick_sort(array, i, high);
}

int main()
{
    int numbers [] = {21, 11, 2, 23, 34, 41, 12, 45, 11, 53};

    quick_sort(numbers, 0, (sizeof(numbers)/sizeof(*numbers)) - 1);

    for ( int i = 0; i < (sizeof(numbers)/sizeof(*numbers)); i++ ) {
        cout << numbers[i] << ' ';
    }
    cout << endl;
}