## Welcome to calculator for your life


firstNumber = int(input("Choose your first number."))
operation = input("Choose what you would like to do.")
secondNumber = int(input("Choose your second number."))

if operation == "addition" or operation == "+":
    print(firstNumber + secondNumber)

if operation == "subtraction" or operation == "-":
    print(firstNumber - secondNumber)

if operation == "division" or operation == "/":
    print(firstNumber / secondNumber)

if operation == "multiply" or operation == "*":
    print(firstNumber * secondNumber)

