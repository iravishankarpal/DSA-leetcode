class father():
    def __init__(self , name , age) -> None:
        self.name = name
        self.age = age
        print("i am father class")
    
    def getDetails(self): 
        print(f"Hi father is {self.name} and i am {self.age}")
    
    def setAge(self):
        while True: 
            try: 
                self.age =  int(input("please enter new age : "))
                break
            except : 
                print("Enter a valid number ")

class mother():
    def __init__(self , name , age) -> None:
        self.name = name
        self.age = age
        print("i am mother class")
    
    def getDetails(self): 
        print(f"Hi mother is {self.name} and i am {self.age}")
    
    def setAge(self):
        while True: 
            try: 
                self.age =  int(input("please mother enter new age : "))
                break
            except : 
                print("Enter a valid number ")
    
class son(father,mother):    
    def setAge(self):
        super().setAge()
        self.newage = self.age + 2
        print(self.newage)





mother  = mother("ravi", 25)
mother.getDetails()
mother.setAge()
mother.newage = 3 
print(mother.newage)
