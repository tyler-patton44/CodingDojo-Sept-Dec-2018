class MathDojo:
    def __init__(self):
        self.result = 0
        
    def add(self, *vals):
        for obj in vals:
            if type(obj) == list:
                for value in obj:
                    self.result += value
            elif type(obj) == int:
                self.result += obj
            elif type(obj) == tuple:
                self.result += value
        return self

    def subtract(self, *vals):
        for obj in vals:
            if type(obj) == list:
                for value in obj:
                    self.result -= value
            elif type(obj) == int:
                self.result -= obj
            elif type(obj) == tuple:
                self.result -= value
        return self

x = MathDojo().add(5).add(2,5,1).subtract(3,2).result
print(x)