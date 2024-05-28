import math as m

# calculate e to the power of 3 using the math module
print(m.exp(3))

# TODO: First import the `random` module
import random as r

# We begin with an empty `word_list`
word_file = "words.txt"
word_list = []

# We fill up the word_list from the `words.txt` file
with open(word_file,'r') as words:
    for line in words:
        # remove white space and make everything lowercase
        word = line.strip().lower()
        # don't include words that are too long or too short
        if 3 < len(word) < 8:
            word_list.append(word)

# TODO: Add your function generate_password below
# It should return a string consisting of three random words 
# concatenated together without spaces
def generate_password():
    # return ''.join(random.sample(word_list, 3))
    return r.choice(word_list) + r.choice(word_list) + r.choice(word_list)

# Now we test the function
password = generate_password()
print(password)

# current date and time
from datetime import datetime
now = datetime.now()
print(now)

# change the current directory
import os
os.chdir('..')
print(os.getcwd())

# read data from a comma separated values (.csv) file into Python dictionaries for each row
import csv
with open('software.csv') as software:
    reader = csv.DictReader(software)
    for row in reader:
        print(("{} has {} users").format(row["name"], row["users"]))

# extract all files from a zip file
import zipfile
with zipfile.ZipFile('files.zip', 'r') as myzip:
    myzip.extractall()

# get execution time of a Python code
import timeit
print(timeit.timeit('sum(x)', setup='x = [i for i in range(10000)]'))
