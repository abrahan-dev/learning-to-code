def party_planner(cookies, people):
    leftovers = None
    cookies_each = None

    try:
        leftovers = cookies % people
        cookies_each = cookies // people
    except ZeroDivisionError:
        print("Please enter a valid number of people (not zero).")
    except:
        print("Some other error occurred")
    
    return(cookies_each, leftovers)

lets_party = 'y'
while lets_party == 'y':
    cookies = int(input("How many cookies are you baking? "))
    people = int(input("How many people are attending? "))

    cookies_each, leftovers = party_planner(cookies, people)

    if cookies_each:
        message = "\nLet's party! We'll have {} people attending, they'll each get to eat {} cookies, and we'll have {} left over."
        print(message.format(people, cookies_each, leftovers))

    lets_party = input("\nWould you like to party more? (y or n) ")