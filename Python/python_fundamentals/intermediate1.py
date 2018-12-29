import random
def radInt(min=50, max=100):
    x = random.random()*max
    while x < min:
        x = random.random()*max
    x = int(x)
    print(x)

radInt(50,500)
