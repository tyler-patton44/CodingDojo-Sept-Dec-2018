# #1
def positive(arr):
    for i in range(len(arr)):
        if arr[i] >= 0:
            arr[i] = "big"
    print(arr)
positive([1,-1,-2,2])

# #2
def addition(arr):
    sum = 0
    for i in arr:
        if i >= 0:
            sum += i
    arr[len(arr)-1] = sum
    return arr
print(addition([-1,1,1,1]))
             
#3
def addAll(arr):
    x = sum(arr)
    return x
print(addAll([1,2,3,4]))

#4
def Avg(arr):
    x = sum(arr)/len(arr)
    return x
print(Avg([1,2,3,4]))

#5
def length(arr):
    return len(arr)
print(length([1,2,3,4,5]))

#6
def minumum(arr):
    x = min(arr)
    return x
print(minumum([5,4,3,2,0]))

#7
def maximum(arr):
    x = max(arr)
    return x
print(maximum([2,4,6,7,8]))

#8
def ultimateAnalyze(arr):
    dict = {
        'sumTotal': sum(arr),
        'avg': sum(arr)/len(arr),
        'low': min(arr),
        'max': max(arr),
        'length': len(arr)}
    return dict
print(ultimateAnalyze([1,2,3,5]))

#9
def reverseList(arr):
    arr.reverse()
    return arr
print(reverseList([1,2,3,4,5]))
    
