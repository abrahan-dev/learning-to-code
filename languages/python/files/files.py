with open('./hello.txt', 'r') as f:
    file_data = f.read()
    print(file_data)
    f.close()

with open('./hello.txt', 'w') as f:
    f.write("Hello there!")
    f.close()