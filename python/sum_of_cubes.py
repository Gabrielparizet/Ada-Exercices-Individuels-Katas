def sum_cubes(n):
    number = 1
    result = 0
    while number <= n:
        result += number**3
        number += 1
    return result

print(sum_cubes(3))
