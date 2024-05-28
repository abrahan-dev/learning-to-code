file_path = "lines.txt"

with open(file_path, "r") as file:
    for line in file:
        print(line.strip())

# Using readline()
with open(file_path, "r") as file:
    line = file.readline()
    while line:
        print(line.strip())
        line = file.readline()