## Activity User and Address

#class User:
#    def __init__ (self, first_name, last_name):
#        self.first_name = first_name
#        self.last_name = last_name
#        self.add_addresses = []

#    def add_addresses(self, addresses):
#        addresses.append(self.add_addresses)

#class Address(User):
#    def __init__(self, street, city, state, zip_code, firstName, lastName):
#        super().__init__(firstName, lastName)
#        self.street = street
#        self.city = city
#        self. state = state
#        self.zip_code = zip_code

#pamelaAddress = Address("555 Pizza Town", "Chicago", "IL", "60605")
#pamela = User("Pamela" , "Long")
#pamela.add_addresses(pamelaAddress)
#print(pamela.first_name)

#for address in pamela.addresses:
#    print(address.street)
#    print(address.city)
#    print(address.state)
#    print(address.zip)


## Activity Table Class

#class Table:
#    def __init__(self, leg_count, material_made_of, color, shape, people_it_seats):
#        self.leg_count = leg_count
#        self.material_made_of = material_made_of
#        self.color = color
#        self.people_it_seats = people_it_seats
#        self.shape = shape


## Activity Bank Account

class BankAccount:
    def __init__(self, balance, account_number):
        self.balance = balance
        self.account_number = account_number
    def add_deposit(self, deposit):
        deposit.append(self.add_deposit)
    def add_withdraw(self, withdraw):
        withdraw.append(self.add_withdraw)
    def add_transfer_funds(self, balance, add_to_account, subtract_from_account):
        self.add_to_account = balance + add_to_account
        self.subtract_from_account = balance - subtract_from_account


