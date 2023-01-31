def tribonacci(signature, n):
    if n == 0:
        signature = []
    elif n == 1:
        signature.pop()
        signature.pop()
    elif n == 2:
        signature.pop()
    elif n == 3:
        signature = signature
    else:
        while len(signature) < n:
            signature.append(sum(signature[-3:]))
    return signature

def tribonaci(signature, n):
    while len(signature) < n:
        signature.append(sum(signature[-3:]))
    return signature[:n]

    
sample_signature = [3, 105, 13]
sample_n = 390

tribonacci(sample_signature, sample_n)