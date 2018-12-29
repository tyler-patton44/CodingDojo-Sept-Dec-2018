class product:
    def __init__(self, name, price, weight, brand, status="for sale"):
        self.name = name
        self.price = price
        self.weight = weight
        self.brand = brand
        self.status = status
    
    def sale(self):
        self.status = "sold"

    def returnProduct(self, reason):
        if reason == "like new":
            self.status = "for sale"
        elif reason == "opened":
            self.status = "used"
            self.price = round((self.price*.2)+self.price,2)
        elif reason == "defective":
            self.status = "defective"
            self.price = 0

    def displayInfo(self):
        print("name:", self.name)
        print("price:", round((self.price*.1)+self.price,2))
        print("weight:", self.weight)
        print("brand:", self.brand)
        print("status:", self.status)
        print("")

cereal = product("cheerios", 2, 5, "off-brand")
milk = product("milk", 5, 5, "sunnyside")
chips = product("sun chips", 1.50, 5, "sunnyside")
beer = product("beer", 30, 5, "coors light")
meat = product("steak", 20, 5, "cow")

print("Inventory")
cereal.displayInfo()
milk.displayInfo() 
chips.displayInfo()
beer.displayInfo()
meat.displayInfo()

print("After Sale")
cereal.sale()
milk.sale() 
chips.sale()
beer.sale()
meat.sale()
cereal.displayInfo()
milk.displayInfo() 
chips.displayInfo()
beer.displayInfo()
meat.displayInfo()

print("Returned")
cereal.returnProduct("like new")
milk.returnProduct("opened")
meat.returnProduct("defective")
cereal.displayInfo()
milk.displayInfo() 
meat.displayInfo()



