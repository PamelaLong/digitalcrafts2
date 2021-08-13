class Characters:
    def __init__(self, hero_character, villian_character, hero_Weapon, villian_Weapon):
        self.hero_character = hero_character
        self.villian_character = villian_character
        self.hero_Weapon = hero_Weapon
        self.villian_Weapon = villian_Weapon



class PowerMoves(Characters):
    def __init__(self, hero_PowerMove1, hero_PowerMove2, villian_PowerMoveA, villian_PowerMoveB):
        def __init__(self, hero_character, villian_character, hero_Weapon, villian_Weapon):
            super().__init__(hero_character, villian_character, hero_Weapon, villian_Weapon)
        self.hero_PowerMove1 = hero_PowerMove1
        self.hero_PowerMove2 = hero_PowerMove2
        self.villian_PowerMoveA = villian_PowerMoveA
        self.villian_PowerMoveB = villian_PowerMoveB

class BlockingMoves(Characters):
    def __init__(self, hero_BlockingMove3, hero_BlockingMove4, villian_BlockingMoveC, villian_BlockingMoveD):
        def __init__(self, hero_character, villian_character, hero_Weapon, villian_Weapon):
            super().__init__(hero_character, villian_character, hero_Weapon, villian_Weapon)
        self.hero_BlockingMove3 = hero_BlockingMove3
        self.hero_BlockingMove4 = hero_BlockingMove4
        self.villian_BlockingMoveC = villian_BlockingMoveC
        self.villian_BlockingMoveD = villian_BlockingMoveD



choose_character = input("Press H to play the Hero Thor \nPress V to play the Villian Loki \nPress Q to quit \n")
hero_character = input ()

health = 30
while True:
    if health == 0:
        print (f"Your {health} has fallen to 0, you can no longer fight! Go hug your brother")
    else:
        print(f"You have chosen the Hero Thor! Your weapon is your hammer, Mjollnir \nYour health is at {health}")
        print ("Press 1 to summon Thunder and Lightening \nPress 2 to swing your hammer")
        print ("Press 3 to block opponent \nPress 4 to check your Godlike Strength \n")
        break

    if choose_character.lower == "H":
        print ("Press 1 to summon Thunder and Lightening \nPress 2 to swing your hammer")
        print ("Press 3 to block opponent \nPress 4 to check your Godlike Strength \n")
        
    if hero_character == "1":
            print ("You have summoned Thunder and Lightening!! \n ")
    if (health > 0):
            health = health - 10
            print ("Keep Fighting!! \nLoki is full of mischief")

    elif hero_character == "2":
            print ("You have chosen to swing with all your might!")
    if (health > 0):
            health = health - 10
            print ("Keep Fighting!! \nLoki is full of mischief")

    if hero_character == "3":
            print ("Blocking will get you nowhere!! \nYou must attack!")
    if (health > 0):
            health = health - 10
            print ("Keep Fighting!! \nLoki is full of mischief")

    if hero_character == "4":
            print ("Do you need a break like the humans from Earth?!!")
    if (health > 0):
            health = health - 10
            print ("Keep Fighting!! \nLoki is full of mischief")
    else:
            print ("You are out of health \nLoki now rules Asgard!")


villian_character = input ("A" or "B" or "C" or "D")
health = 30
while True:
    if health == 0:
        print (f"Your {health} has fallen to 0, you can no longer fight! Go hug your brother")
    else:
        print(f"You have chosen the Hero Thor! Your weapon is your hammer, Mjollnir \nYour health is at {health}")
        print("Press A to use your Mystic Spell \nPress B to stab with your dagger")
        print("Press C to block opponent \nPress D to check your Godlike Strenth \n")
        break

if choose_character.lower() == "V":
    print("You have chosen the Villian Loki! Your weapon is your dagger and a Mystic Spell \nYour health is at {health}")
    print("Press A to use your Mystic Spell \nPress B to stab with your dagger")
    print("Press C to block opponent \nPress D to check your Godlike Strenth \n")



if villian_character.lower() == "A":
         print ("You have chosen to use your Mystic Spell \nThor is now a frog! \n ")
if (health > 0):
         health = health - 10
         print ("Keep Fighting!! \nThor is a mighty warrior")

elif villian_character.lower() == "B":
         print ("You have chosen to stab Thor with your dagger!")
if (health > 0):
         health = health - 10
         print ("Keep Fighting!! \nThor is a mighty warrior")

if villian_character.lower() == "C":
    print("Blocking an attack? \nThis is how you lost New York")
    print ("Keep Fighting!! \nThor is a mighty warrior")

if villian_character.lower() == "D":
         print ("Do you need a break like the humans from Earth?!!")
if (health > 0):
         health = health - 10
         print ("Keep Fighting!! \nThor is a mighty warrior")
else:
    print ("This is how you lost New Your")
    print ("You are out of health \nLoki now rules Asgard!")


if choose_character == "Q" or "q":
    print("Are you sure you want to quit? \nY/N \n")
if input == "N" or "n":
    print(choose_character)
else:
        quit