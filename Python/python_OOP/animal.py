class Animal:
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
    def run(self):
        self.health -= 5
    def display(self):
        print(self.name ,"HP:")
        print(self.health)

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5

class Dragon(Animal):
    def __init__(self,name):
        super().__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
    def display(self):
        super().display()
        print("Dragon is the name.. maybe")    

wild = Animal("wild")
wild.walk()
wild.run()
wild.display()

buddy = Dog("Buddy")
buddy.run()
buddy.walk()
buddy.run()
buddy.pet()
buddy.display()

burner = Dragon("Burner")
burner.walk()
burner.fly()
burner.fly()
burner.display()



