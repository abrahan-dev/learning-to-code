while True:
    try:
        x = int(input("Enter a number: "))
        print("The reciprocal of your number is: ", 1/x)
        break
    except ValueError:
        print("\nThat didn't work.")
    except:
        print("\nSomething else went wrong.")
        break
    finally:
        print("\nAttempted Input")