import urllib.request
import urllib.parse


def read_text():
    quotes = open("/home/defnx/PycharmProjects/learn/text")
    contents_of_file = quotes.read()
    quotes.close()
    check_profanity(contents_of_file)


def check_profanity(text_to_check):
    query = urllib.parse.urlencode({'q': text_to_check})
    url = "http://www.wdylike.appspot.com/?"+query
    connection = urllib.request.urlopen(url)
    output = connection.read()
    connection.close()

    if b"true" in output:
        print("Profanity Alert!!")
    elif b"false" in output:
        print("This document has no curse words!")
    else:
        print("Could not scan the document properly.")


read_text()
