import re

def sum_of_integers_in_string(s):
    result = list(map(int, re.findall('\d+', s)))
    return sum(result)

print(sum_of_integers_in_string("h3ll0w0rld"))