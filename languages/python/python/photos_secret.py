import os


def rename_files():
    photos_path = "/home/defnx/PycharmProjects/learn/photos"
    os.chdir(photos_path)
    file_list = os.listdir(photos_path)
    table = str.maketrans(dict.fromkeys("0123456789"))

    for file_name in file_list:
        os.rename(file_name, file_name.translate(table))


rename_files()
