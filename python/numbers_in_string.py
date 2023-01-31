import re

def sum_of_integers_in_string(s):
    return sum(map(int, re.findall('\d+', s)))
    

print(sum_of_integers_in_string("h3ll0w0rld"))