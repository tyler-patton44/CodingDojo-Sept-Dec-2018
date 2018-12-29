class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SList:
    def __init__(self, value):
        node = Node(value)
        self.head = node

    def addNode(self, value):
        node = Node(value)
        runner = self.head
        while(runner.next != None):
            runner = runner.next
        runner.next = node
        
        

    def deleteNode(self, value):
        if self.head.value == value:
            self.head = self.head.next
            return
        runner = self.head
        while(runner != None):
            if runner.next.value == value:
                runner.next = runner.next.next
                return
            runner = runner.next

    def insertNode(self, value, value2):
        if self.head.value == value:
            self.head.value = value2
            return
        runner = self.head
        while runner.next.value != value:
            runner = runner.next
        runner.next.value = value2

    def printValues(self):
        runner = self.head
        print(id(self.head))
        print("---------------------")
        while(runner.next != None):
            print(id(runner), runner.value ,id(runner.next))
            runner = runner.next
        print(id(runner), runner.value ,id(runner.next))
        


list = SList(5)
list.addNode(2)
list.addNode(7)
list.addNode(6)
list.addNode(9)
list.addNode(10)
list.insertNode(5,1)
list.printValues()

