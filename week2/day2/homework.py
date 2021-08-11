##Shopping List

class Stores:
    def __init__(self, store_title, address):
        self.store_title = store_title
        self.address = address
        
class Cart(Stores):
    def __init__(self):
        self.Items = []
    def __init__(self, store_title, address):
        super().__init__(store_title, address)
    def add_Cart(self, Cart):
        Cart.append(self.add_Cart)


class Items(Cart):
    def __init__(self, store_title, address):
        super().__init__(store_title, address)
    def __init__(self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity
    def add_Items(self, Items):
        Items.append(self.add_Items)

input_list = input("Press 1 to add a Store \nPress 2 to add a List \nPress 3 to add an Item to a List \nPress 4 to view all Lists \nPress q to quit")
operation = ("1" or "2" or "3" or "4")

if input_list == "1":
    nameOfStore =
    addressOfStore =
    store = Stores(nameOfStore, addressOfStore)
    print(f"{nameOfStore} at {addressOfStore} has been added")



#kmart = Stores("kmart", "555 south ave")
#kmaartCart = Cart()
#crayons = Items("Crayola", "1")
#kmartCart.Items.append(crayons)
#print(kmart.Cart.Items[0].name)
