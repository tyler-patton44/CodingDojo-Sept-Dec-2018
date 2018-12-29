#1
def countDown(x):
    arrnew = []
    for i in range(x):
        arrnew.append(x)
        x -= 1
    return arrnew

print(countDown(10))

#2
def double(x,y):
    print(x)
    return y

print(double(1,2))

#3
def add(arr):
    sum = arr[0]
    sum += arr[len(arr) - 1]
    return sum

print(add([1,2,3,4]))

#4
def lengthAndValue(x,y):
    arr = []
    for i in range(x):
        arr.append(y)
    return arr
print(lengthAndValue(5,2))