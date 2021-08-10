from _typeshed import Self
from typing import AsyncGenerator


class Person:
    def __init__(self):
        self.name = "Joe"
        self.hair = "Black"
        self.age = "unknown"
        self.ears = 2
        self.address = "123 tomball st"

joe = Person()
print(joe.address)
print(joe.ears)