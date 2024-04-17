#  algo to drow eqlitral tringle with star in python language 

# how it would look like 

#  it has 4 rows and 7 columns 
#       *       
#     * * *
#   * * * * *
# * * * * * * *

#  for n rows there will be n + 2 columns  and n can only be odd number 

# row = input("Enter a number: ")
row = 4

for i in range(1, row + 1):
    print("-" * (row - i), end="")
    print("*" * (2 * i - 1))