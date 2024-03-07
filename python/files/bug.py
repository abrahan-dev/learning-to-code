# initiate empty list to hold user input and sum value of zero
user_list = []
list_sum = 0

# seek user input for ten numbers 
while user_list.__len__() < 10:
    try:
        number = int(input("Enter any 2-digit number: "))
        # check to see if number has two digits
        assert number >= 10 and number <= 99
        user_list.append(number)
        if number % 2 == 0:
            list_sum += number
    except ValueError:
        print("Incorrect value. That's not an int!")
    except AssertionError:
        print("Incorrect value. That's not a two-digit int!")
    except KeyboardInterrupt:
        print("Bye!")
        break
    except:
        print("Unknown error")
        break

print("user_list: {}".format(user_list))
print("The sum of the even numbers in user_list is: {}.".format(list_sum))