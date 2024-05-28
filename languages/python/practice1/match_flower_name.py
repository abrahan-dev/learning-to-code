def flower_dict():
    flower_dict = {}
    with open('flowers.txt') as f:
        for line in f:
            letter = line.split(": ")[0].lower()
            flower = line.split(": ")[1].strip()
            flower_dict[letter] = flower
    return flower_dict

def main():
    flower_d = flower_dict()
    name = input("Enter your First [space] Last name only: ")
    first_letter = name[0].lower()
    print("Unique flower name with the first letter: {}".format(flower_d[first_letter]))

main()
