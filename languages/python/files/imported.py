import math as m

print('I am imported')

factorialOf5 = m.factorial(5)
name = 'John'

if __name__ == '__main__':
    print('This won\'t run if I\'m imported.')
    print(name)
    print(factorialOf5)
