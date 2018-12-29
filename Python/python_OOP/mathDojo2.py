class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.result += num
        for val in nums:
            self.result += val
        return self
    def subtract(self, num, *nums):
        self.result -= num
        for val in nums:
            self.result -= val
        return self

md = MathDojo()

x = md.add(2).add(7,4).add(2,5,1,7,8,9).subtract(3,2).result
print(x)
