# def bubbleSort(mylist):
#     for i in range(len(mylist)-1):
#         for x in range(len(mylist)-1-i):
#             if mylist[x] > mylist[x+1]:
#                 mylist[x], mylist[x+1] = mylist[x+1], mylist[x]
        
#     print(mylist)

# bubbleSort([1,5,3,2,0,8])

def selectionSort(arr):
    for i in range(0, len(arr)-1):
        min = arr[i]
        for x in range(0, len(arr)-1):
            if min > arr[x+1]:
                arr[i], arr[x+1] = arr[x+1], arr[i]
                min = arr[i+1]
            
    print(arr)
selectionSort([5,2,7,4,8,1])

