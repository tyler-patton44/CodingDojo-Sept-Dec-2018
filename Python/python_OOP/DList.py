class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SList:
    def __init__(self, value):
        node = Node(value)
        self.head = self.tail = node

    def addNode(self, value):
        node = Node(value)
        runner = self.head
        while(runner.next != None):
            runner = runner.next
        runner.next = node
        self.tail = runner.next
        self.tail.prev = runner

    def ChangeEnd(self, value):
        self.tail.value = value
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

    def insertNode(self, index, value):
        node = Node(value)
        if self.head.value == index:
            node.next = self.head.next
            self.head.next = node
            self.head.next.prev = node
            node.prev = self.head
            return

        runner = self.head
        while runner.value != index:
            runner = runner.next
        node.next=runner.next
        runner.next=node
        runner.next.prev = node
        node.prev = runner
        

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
list.addNode(8)
list.addNode(7)
list.addNode(6)
list.insertNode(6,3)
list.printValues()

