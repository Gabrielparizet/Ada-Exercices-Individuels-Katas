def sum_array(arr):
    result = 0
    if arr is None or len(arr) < 2:
        return 0
    else:
        arr.sort()
        arr.pop(0)
        arr.pop()
        return sum(arr)


        



print(sum_array([6, 2, 1, 8, 10]))