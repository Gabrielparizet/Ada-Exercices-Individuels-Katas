def repeat_str(repeat, string):
    counter = 1
    result_string = ""
    while counter <= repeat:
        result_string += string
        counter += 1
    return result_string


print(repeat_str(6, "I"))
print(repeat_str(5, "Hello"))
