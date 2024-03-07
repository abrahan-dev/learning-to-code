print(type(1))
print(int(1.0))
print(float(1))
print(2**3)
print(5.33333//3.56)
hey = True
print(hey)
print(hey + 1)
print(True == 1)
print(True is 1)
print(len("hello"))
coconut_count = "34"
mango_count = "15"
tropical_fruit_count = coconut_count + mango_count
print(tropical_fruit_count)
print(type(tropical_fruit_count))
# len(356) 
print("hippo" *12) 
mon_sales = "121"
tues_sales = "105"
wed_sales = "110"
thurs_sales = "98"
fri_sales = "95"

total_sales = int(121) + int(105) + int(110) + int(98) + int(95)
result_string = "This week's total sales: " + str(total_sales)
print(result_string)
result_string = f"This week's total sales: {total_sales}"
print(result_string)
print(result_string.islower())
print(result_string.count("s"))

# Write two lines of code below, each assigning a value to a variable
val = 1
thing = "house"
# Now write a print statement using .format() to print out a sentence and the 
# values of both of the variables
print("The {} is worth {} dollars".format(thing, val))



verse = "If you can keep your head when all about you\n  Are losing theirs and blaming it on you,\nIf you can trust yourself when all men doubt you,\n  But make allowance for their doubting too;\nIf you can wait and not be tired by waiting,\n  Or being lied about, don’t deal in lies,\nOr being hated, don’t give way to hating,\n  And yet don’t look too good, nor talk too wise:"
print(verse)
# What is the length of the string variable verse?
print(f"The verse is {len(verse)} of characters long")
# What is the index of the first occurrence of the word 'and' in verse?
print(f"The word 'and' first appears at index {verse.find('and')}")
# What is the index of the last occurrence of the word 'you' in verse?
print(f"The word 'you' last appears at index {verse.rfind('you')}")
# What is the count of occurrences of the word 'you' in the verse?
print(f"The word 'you' appears {verse.count('you')} times")

# a list of motorcycle types
motorcycles = ['honda', 'yamaha', 'suzuki']
# print the second item in the list
print(motorcycles[1])
# print the last item in the list
print(motorcycles[-1])

month = 8
days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31]
# Use list indexing to determine the number of days in `month`
num_days = days_in_month[month-1]
print(num_days)

eclipse_dates = ['June 21, 2001', 'December 4, 2002', 'November 23, 2003',
                 'March 29, 2006', 'August 1, 2008', 'July 22, 2009',
                 'July 11, 2010', 'November 13, 2012', 'March 20, 2015',
                 'March 9, 2016']          
# TODO: Replace None with appropriate code
# Modify this code so it prints the last three elements of the list
last_three_dates = eclipse_dates[-3:]
print(last_three_dates)

sentence2 = ["I", "wish", "to", "register", "a", "complaint", "."]
sentence2[0:2] = ["We", "want"]
print(sentence2)

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

# Define a dictionary, `population`, that provides information
# on the world's largest cities. The key is the name of a city
# (a string), and the associated value is its population in
# millions of people.
#   Key     |   Value
# Shanghai  |   17.8
# Istanbul  |   13.3
# Karachi   |   13.0
# Mumbai    |   12.5
population = {"Shanghai": 17.8, "Istanbul": 13.3, "Karachi": 13.0, "Mumbai": 12.5}
print(population)
print(population.get("xxxxxx") is None)

animals = {'dogs': [20, 10, 15, 8, 32, 15], 'cats': [3,4,2,8,2,4], 'rabbits': [2, 3, 3], 'fish': [0.3, 0.5, 0.8, 0.3, 1]}
# The data type of the keys in the dictionary is string.
# The data type of the values in the dictionary is list.
# The result of animals['dogs'] is [20, 10, 15, 8, 32, 15].
# The result of animals['dogs'][3] is 8.
# The result of animals[3] is error.
# The result of animals['fish'] is [0.3, 0.5, 0.8, 0.3, 1]. 

my_arr = set([1, 2, 3, 4, 5])
my_arr.add(6)
print(my_arr)
hey = {1, 2, 3, 4, 5}
print(type(hey)) 

# create a dictionary
elements = {'hydrogen': 1, 'helium': 2, 'carbon': 6}
elements['lithium'] = 3
print(elements['helium'])


elements = {'hydrogen': {'number': 1, 'weight': 1.00794, 'symbol': 'H'},
            'helium': {'number': 2, 'weight': 4.002602, 'symbol': 'He'}}
# TODO: Add an 'is_noble_gas' entry to the hydrogen and helium dictionaries
# hint: helium is a noble gas, hydrogen isn't
elements["hydrogen"]["is_noble_gas"] = False
elements["helium"]["is_noble_gas"] = True
print(elements["hydrogen"]["is_noble_gas"])
print(elements["helium"]["is_noble_gas"])


verse = "if you can keep your head when all about you are losing theirs and blaming it on you   if you can trust yourself when all men doubt you     but make allowance for their doubting too   if you can wait and not be tired by waiting      or being lied about  don’t deal in lies   or being hated  don’t give way to hating      and yet don’t look too good  nor talk too wise"
print(verse, '\n')

# TODO: replace None with appropriate code
# split verse into list of words
verse_list = verse.split()
print(verse_list, '\n')

# TODO: replace None with appropriate code
# convert list to a data structure that stores unique elements
verse_set = set(verse_list)
print(verse_set, '\n')

# TODO: replace None with appropriate code
# find the number of unique words
num_unique = len(verse_set)
print(num_unique, '\n')

verse_dict =  {'if': 3, 'you': 6, 'can': 3, 'keep': 1, 'your': 1, 'head': 1, 'when': 2, 'all': 2, 'about': 2, 'are': 1, 'losing': 1, 'theirs': 1, 'and': 3, 'blaming': 1, 'it': 1, 'on': 1, 'trust': 1, 'yourself': 1, 'men': 1, 'doubt': 1, 'but': 1, 'make': 1, 'allowance': 1, 'for': 1, 'their': 1, 'doubting': 1, 'too': 3, 'wait': 1, 'not': 1, 'be': 1, 'tired': 1, 'by': 1, 'waiting': 1, 'or': 2, 'being': 2, 'lied': 1, 'don\'t': 3, 'deal': 1, 'in': 1, 'lies': 1, 'hated': 1, 'give': 1, 'way': 1, 'to': 1, 'hating': 1, 'yet': 1, 'look': 1, 'good': 1, 'nor': 1, 'talk': 1, 'wise': 1}
print(verse_dict, '\n')
# find number of unique keys in the dictionary
num_keys = len(verse_dict)
print(num_keys)
# find whether 'breathe' is a key in the dictionary
contains_breathe = "breathe" in verse_dict
print(contains_breathe)
# create and sort a list of the dictionary's keys
sorted_keys = sorted(verse_dict.keys())
print(sorted_keys)
# get the first element in the sorted list of keys
print(sorted_keys[0])
# find the element with the highest value in the list of keys
print(sorted_keys[-1])
# unique words in verse_dict
unique_words = set(verse_dict.keys())
print(len(unique_words))
print("breathe" in verse_dict)
# print the first key in verse_dict
print(list(verse_dict.keys())[0])
# Which element has the highest value in the list of keys?
print(list(verse_dict.keys())[-1])


# Data Structure	Ordered	Mutable	Constructor	    Example
# List	            Yes	    Yes	    [ ] or list()	[5.7, 4, 'yes', 5.7]
# Tuple	            Yes	    No	    ( ) or tuple()	(5.7, 4, 'yes', 5.7)
# Set	            No	    Yes	    {}* or set()	{5.7, 4, 'yes'}
# Dictionary	    No	    No**	{ } or dict()	{'Jun': 75, 'Jul': 89}

season = "summer"
if season == "spring":
    print("plant the garden!")
elif season == "summer":
    print("water the garden!")
elif season == "fall":
    print("harvest the garden!")
elif season == "winter":
    print("stay indoors!")
else:
    print("unrecognized season")

# Points	Prize
# 1 - 50	wooden rabbit
# 51 - 150	no prize
# 151 - 180	wafer-thin mint
# 181 - 200	penguin
points = 174  # use this input to make your submission
# write your if statement here
if points <= 50:
    result = "Congratulations! You won a wooden rabbit!"
elif points <= 150:
    result = "Oh dear, no prize this time."
elif points <= 180:
    result = "Congratulations! You won a wafer-thin mint!"
else:
    result = "Congratulations! You won a penguin!"
print(result)

# Fill in the conditionals below to inform the user about how
# their guess compares to the answer.

answer = 50
guess = 20

if guess < answer:  # provide conditional
    result = "Oops!  Your guess was too low."
elif guess > answer:  # provide conditional
    result = "Oops!  Your guess was too high."
else:
    result = "Nice!  Your guess matched the answer!"
print(result)

state = "NY" #Either "CA", "MN", or "NY"
purchase_amount = 500

if state == "CA": #provide conditional for checking state is CA
    tax_amount = .075
    total_cost = purchase_amount*(1+tax_amount)
    result = "Since you're from {}, your total cost is {}.".format(state, total_cost)
elif state == "MN": #provide conditional for checking state is MN
    tax_amount = .095
    total_cost = purchase_amount*(1+tax_amount)
    result = "Since you're from {}, your total cost is {}.".format(state, total_cost)
elif state == "NY": #provide conditional for checking state is NY
    tax_amount = .089
    total_cost = purchase_amount*(1+tax_amount)
    result = "Since you're from {}, your total cost is {}.".format(state, total_cost)
else:
    result = "Error, unknown state!"
print(result)

# BMI calculation
height = 1.93
weight = 91
bmi = weight / height ** 2
print("BMI is: {}".format(bmi))
if bmi < 18.5:
    print("BMI is: {}, underweight".format(bmi))
elif bmi < 25:  
    print("BMI is: {}, normal weight".format(bmi))
elif bmi < 30:
    print("BMI is: {}, overweight".format(bmi))
else:
    print("BMI is: {}, obese".format(bmi))


altitude = 10000
speed = 250
propulsion = "Propeller"
print(altitude < 1000 and speed > 100) 
print((propulsion == "Jet" or propulsion == "Turboprop") and speed < 300 and altitude > 20000)
print(not (speed > 400 and propulsion == "Propeller"))
print((altitude > 500 and speed > 100) or not propulsion == "Propeller")

# iterate through a list of cities and capitalize them
cities = ["new york city", "mountain view", "chicago", "los angeles"]
for city in cities:
    print(city.title())
print("Done!")

# Use a for loop to take a list and print each element of the list in its own line. 
sentence = ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
for word in sentence:
    print(word)

# Write a for loop below that will print out every whole number that is a multiple of 5 and less than or equal to 30. This should output:
# 5
# 10
# 15
# 20
# 25
# 30
for i in range(5, 35, 5):
    print(i)


# Write a for loop that iterates over the names list to create a usernames list. 
# To create a username for each name, make everything lowercase and replace spaces with underscores. 
# Running your for loop over the list:
names = ["Joey Tribbiani", "Monica Geller", "Chandler Bing", "Phoebe Buffay"]
# the usernames list should look like this:
# ["joey_tribbiani", "monica_geller", "chandler_bing", "phoebe_buffay"]
usernames = []
for name in names:
    usernames.append(name.lower().replace(" ", "_"))
print(usernames)

# Write a for loop that uses range() to iterate over the positions in usernames to modify the list. Like you did in the previous quiz, change each name to be lowercase and replace spaces with underscores.
# After running your loop, this list
usernames = ["Joey Tribbiani", "Monica Geller", "Chandler Bing", "Phoebe Buffay"]
# should change to this:
# usernames = ["joey_tribbiani", "monica_geller", "chandler_bing", "phoebe_buffay"]
for i in range(len(usernames)):
    usernames[i] = usernames[i].lower().replace(" ", "_")
print(usernames)

# Write a for loop that iterates over a list of strings, tokens, and counts how many of them are XML tags. XML is a data language similar to HTML. You can tell if a string is an XML tag if it begins with a left angle bracket "<" and ends with a right angle bracket ">". Keep track of the number of tags using the variable count.
# You can assume that the list of strings will not contain empty strings.
tokens = ['<greeting>', 'Hello World!', '</greeting>']
count = 0
for token in tokens:
    if token[0] == "<" and token[-1] == ">":
        count += 1
print(count)


# Write some code, including a for loop, that iterates over a list of strings and creates a single string, html_str, which is an HTML list. For example, if the list is items = ['first string', 'second string'], printing html_str should output:
# <ul>
# <li>first string</li>
# <li>second string</li>
# </ul>
# That is, the string's first line should be the opening tag <ul>. Following that is one line per element in the source list, surrounded by <li> and </li> tags. The final line of the string should be the closing tag </ul>.
items = ['first string', 'second string']
html_str = "<ul>\n"  # "\ n" is the character that marks the end of the line, it does
                     # the characters that are after it in html_str are on the next line
for item in items:
    html_str += "<li>{}</li>\n".format(item)
html_str += "</ul>"
print(html_str)

names = ["Joey Tribbiani", "Monica Geller", "Chandler Bing", "Phoebe Buffay"]
for name in names:
    name = name.lower().replace(" ", "_")
print(names)

print(list(range(4)))
print(list(range(4,8)))
print(list(range(4,10,2)))
print(list(range(0,-5)))

colors = ['Red', 'Blue', 'Green', 'Purple']
lower_colors = [ ]
for color in colors:
    lower_colors.append(color.lower())
print(lower_colors)

cast = {
           "Jerry Seinfeld": "Jerry Seinfeld",
           "Julia Louis-Dreyfus": "Elaine Benes",
           "Jason Alexander": "George Costanza",
           "Michael Richards": "Cosmo Kramer"
       }

for key, value in cast.items():
    print("Actor: {}    Role: {}".format(key, value))


# You would like to count the number of fruits in your basket. 
# In order to do this, you have the following dictionary and list of
# fruits.  Use the dictionary and list to count the total number
# of fruits, but you do not want to count the other items in your basket.
result = 0
basket_items = {'apples': 4, 'oranges': 19, 'kites': 3, 'sandwiches': 8}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']
#Iterate through the dictionary
#if the key is in the list of fruits, add the value (number of fruits) to result
for key, value in basket_items.items():
    if key in fruits:
        result += value
print(result)

# You would like to count the number of fruits in your basket. 
# In order to do this, you have the following dictionary and list of
# fruits.  Use the dictionary and list to count the total number
# of fruits and not_fruits.
fruit_count, not_fruit_count = 0, 0
basket_items = {'apples': 4, 'oranges': 19, 'kites': 3, 'sandwiches': 8}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']
#Iterate through the dictionary
#if the key is in the list of fruits, add to fruit_count.
#if the key is not in the list, then add to the not_fruit_count
for key, value in basket_items.items():
    if key in fruits:
        fruit_count += value
    else:
        not_fruit_count += value
print(fruit_count, not_fruit_count)

# Factorials with While Loop
number = 6
factorial = 1
while number > 1:
    factorial *= number
    number -= 1
print("The factorial of 6 is:", factorial)
# Factorials with For Loop
number = 6
factorial = 1
for i in range(1, number + 1):
    factorial *= i
print("The factorial of 6 is:", factorial)


start_num = 5 #provide some start number, replace 5 with a number you choose
end_num = 100#provide some end number that you stop when you hit, replace 100 with a number you choose
count_by = 2 #provide some number to count by, replace 2 with a number you choose 
# write a while loop that uses break_num as the ongoing number to 
# check against end_num
break_num = start_num
while break_num < end_num:
    break_num += count_by
print(break_num)

start_num = 5 #provide some start number, replace 5 with a number you choose
end_num = 100#provide some end number that you stop when you hit, replace 100 with a number you choose
count_by = 2 #provide some number to count by, replace 2 with a number you choose 
# write a condition to check that end_num is larger than start_num before looping
# write a while loop that uses break_num as the ongoing number to 
# check against end_num
break_num = start_num
if end_num > start_num:
    while break_num < end_num:
        break_num += count_by
else:
    result = "Oops! Looks like your start value is greater than the end value. Please try again."
print(break_num)

start_num = 5 #provide some start number, replace 5 with a number you choose
end_num = 100#provide some end number that you stop when you hit, replace 100 with a number you choose
count_by = 2 #provide some number to count by, replace 2 with a number you choose 

break_num = start_num
if start_num > end_num:
    result = "Oops!  Looks like your start value is greater than the end value.  Please try again."
else:  
    while break_num < end_num:
        break_num += count_by
    result = break_num
print(result)

limit = 40 #provide a limit, replace 40 with a number you choose
# write your while loop here
nearest_square = 0
i = 1
while i**2 < limit:
    nearest_square = i**2
    i += 1
print(nearest_square)


# Write a loop with a break statement to create a string, news_ticker, that is exactly 140 characters long. You should create the news ticker by adding headlines from the headlines list, inserting a space in between each headline. If necessary, truncate the last headline in the middle so that news_ticker is exactly 140 characters long.
# Remember that break works in both for and while loops. Use whichever loop seems most appropriate. Consider adding print statements to your code to help you resolve bugs. Press the Run button from the top bar to run the code in a cell.
# Note: The news_ticker variable is going to be checked when the "test code" button is clicked, so please make sure to update this variable.
# HINT: modify the headlines list to verify your loop works with different inputs
headlines = ["Local Bear Eaten by Man",
             "Legislature Announces New Laws",
             "Peasant Discovers Violence Inherent in System",
             "Cat Rescues Fireman Stuck in Tree",
             "Brave Knight Runs Away",
             "Papperbok Review: Totally Triffic"]

news_ticker = ""
# write your loop here
for headline in headlines:
    news_ticker += headline + " "
    if len(news_ticker) >= 140:
        news_ticker = news_ticker[:140]
        break
print(news_ticker)


x_coord = [23, 53, 2, -12, 95, 103, 14, -5]
y_coord = [677, 233, 405, 433, 905, 376, 432, 445]
z_coord = [4, 16, -6, -42, 3, -6, 23, -1]
labels = ["F", "J", "A", "Q", "Y", "B", "W", "X"]

points = []
for point in zip(labels, x_coord, y_coord, z_coord):
    points.append("{}: {}, {}, {}".format(*point))

for point in points:
    print(point)

# #########
    
cast_names = ["Barney", "Robin", "Ted", "Lily", "Marshall"]
cast_heights = [72, 68, 72, 66, 76]

cast = dict(zip(cast_names, cast_heights))
print(cast)

# list comprehension
squares = [x**2 if x % 2 == 0 else x + 3 for x in range(9)]
print(squares)

names = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Jerry Smith", "Beth Smith"]
first_names = [name.split()[0].lower() for name in names]
print(first_names)

#Use a list comprehension to create a list `multiples_3` containing the first 20 multiples of 3.
multiples_3 = [x*3 for x in range(1,21)]
print(multiples_3)

scores = {
             "Rick Sanchez": 70,
             "Morty Smith": 35,
             "Summer Smith": 82,
             "Jerry Smith": 23,
             "Beth Smith": 98
          }
passed = [name for name, score in scores.items() if score >= 65]
print(passed)

# write a function that calculates the volume of a cylinder
def cylinder_volume(height, radius):
    pi = 3.14159
    return height * pi * radius ** 2
print(cylinder_volume(10, 3))