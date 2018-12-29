class car:
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

    def displayInfo(self):
        print("price:", self.price)
        print("speed:", self.speed,"mph")
        print("fuel:", self.fuel)
        print("mileage:", self.mileage,"mpg")
        if self.price > 10000:
            print("tax:", 0.15)
        else:
            print("tax:", 0.12)

car1 = car(2000, 50, "full", 20)
car2 = car(2500, 100, "not-full", 15)
car3 = car(12000, 60, "kind-full", 8)
car4 = car(1000000, 500, "maybe-full", 40)
car5 = car(1000, 10, "not-full", 8)
car6 = car(25000, 75, "stay-home", 25)

print("1")
car1.displayInfo()
print("2")
car2.displayInfo()
print("3")
car3.displayInfo()
print("4")
car4.displayInfo()
print("5")
car5.displayInfo()
print("6")
car6.displayInfo()

