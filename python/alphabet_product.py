# [A, B, C, D, A*B, B*C, C*D, D*A]

def alphabet(ns):
    ns.sort()
    print(ns)
    a = ns.pop(0)
    b = ns.pop(0)
    a_b = a*b
    ns.remove(a_b)
    c = ns.pop(0)
    b_c = b*c
    ns.remove(b_c)
    c_d = ns.pop()
    d = c_d/c
    print(d)
    return d





alphabet([2, 3, 4, 1, 12, 6, 2, 4])

