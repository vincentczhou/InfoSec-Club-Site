flag = "" # Oh no! My drive got corrupted in such a way that the flag magically disappeared!
key = "securekeyjustrightlength"

def encryptor(flag, key):
    encrypt = []
    for a, b in zip(flag, key):
        encrypt.append(f'{(ord(a) ^ ord(b)):02x}')
    return ''.join(encrypt)

print("The encrypted result is: ", encryptor(flag, key))
# The encrypted result is:  3129223639282a313a2234080341360b07225f3a16570615