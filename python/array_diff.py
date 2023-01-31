def array_diff(a, b):
    c = []
    for element in a:
        if element not in b:
            c.append(element)
    return c




sample_a = [1,2,2,2,3]
sample_b = [2]

array_diff(sample_a, sample_b)