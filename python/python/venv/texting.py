from twilio.rest import Client

account_sid = "ACce3b49c486dbd216092d2f16d6fcf88p"
auth_token  = "0a44e12a32e94c61528f420da9468p65"
client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+33958777222",
    from_="+33974591836",
    body="Hello from Python!")

print(message.sid)
