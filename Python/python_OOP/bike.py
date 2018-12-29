class bike:
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def ride(self):
        self.miles = self.miles + 5

    def reverse(self):
        self.miles = self.miles - 5

    def displayInfo(self):
        print("price:", self.price)
        print("max_speed:", self.max_speed)
        print("miles:", self.miles)

biker1 = bike(250, 40, 0)
biker2 = bike(250, 40, 100)
biker3 = bike(250, 40, 10)

biker1.ride()
biker2.ride()
biker3.reverse()
print("1")
biker1.displayInfo()
print("2")
biker2.displayInfo()
print("3")
biker3.displayInfo()
biker1.ride()
biker2.ride()
biker3.ride()
biker1.ride()
print("1")
biker1.displayInfo()
print("2")
biker2.displayInfo()
print("3")
biker3.displayInfo()
biker2.ride()
biker3.ride()
biker1.ride()
biker2.ride()
biker3.ride()
biker1.ride()
print("1")
biker1.displayInfo()
print("2")
biker2.displayInfo()
print("3")
biker3.displayInfo()

