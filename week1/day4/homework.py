input_list = input("Press 1 to add a task \nPress 2 to delelte a task \nPress 3 to view all tasks \nPress q to quit \n")
operation = ("1", "2", "3", "q", "y", "n")
all_tasks = []
priority = ("low", "medium", "high")

for operation in "1":
    task = input(print("Enter title of task:"))
    priority = input(print("Is priority high, medium, or low?"))
   
if priority == ("l" or "L" or "low" or "Low"):
    input(print("Saved task as low priority"))
    print(input_list)

elif priority == ("m" or "M" or "med" or "Med" or "medium" or "Medium"):
    input(print("Saved task as medium priority"))
    print(input_list)

elif priority == ("h" or "H" or "hi" or "Hi" or "high" or "High"):
    input(print("Saved task as high priority"))
    print(input_list)

for operation in "2":
    task = input(print("Are you sure you want to delete this task?"))
    if operation == ("n" or "no" or "No"):
        print(input_list)

else:
    print("task deleted")
    print(input_list)

for operation in "3":
    task = input(print(all_tasks))

for operation in "q" or "Q" or "quit" or "Quit":
    input(print("Are you sure you want to quit?"))
if operation == ("n" or "N" or "no" or "No"):
    print(input_list)

else:
        quit == all_tasks