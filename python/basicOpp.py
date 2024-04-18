class Parent():
    def __init__(self , name , age) -> None:
        self.name = name
        self.age = age
    
    def getDetails(self): 
        print(f"Hi my name is {self.name} and i am {self.age}")
    
    def setAge(self):
        while True: 
            try: 
               self.age =  int(input("please enter new age : "))
               break
            except : 
                print("Enter a valid number ")
class grandParent(Parent):
    
    def setAge(self):
        super().setAge()
        self.newage = self.age + 2
        print(self.newage)



mother  = grandParent("leelawati", 45)
mother.getDetails()
mother.setAge()
mother.newage = 3 
print(mother.newage)
