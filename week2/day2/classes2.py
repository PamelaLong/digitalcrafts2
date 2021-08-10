class Person:

    def __init__(self, lifePoints, name, hariColor, age, ears, address):
        self.lifePoints = "lifePoints"
        self.name = "Joe"
        self.hairColor = "Black"
        self.age = "unknown"
        self.ears = 2
        self.address = "123 tomball st"
    def changeHairColor(self, colorToChangeItTo):
        self.hairColor = colorToChangeItTo

joe = Person("joe", "Black", 20, 2 , "123 south main st")
#print(joe.hairColor)
#joe.changeHairColor("Blue")
#print(joe.hairColor)
while True:
    joe.takeDamage(1)
    if joe.lifePoinnts != 0:
        print("Keep fighting")
    else:
        print("RIP joe")
        break
