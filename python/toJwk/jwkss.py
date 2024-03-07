from jwcrypto import jwk
import json

# Load the private key
with open("private_key.pem", "rb") as f:
    private_key_pem = f.read()
private_key_jwk = jwk.JWK.from_pem(private_key_pem)
print("Private Key in JWK format:")
print(json.dumps(json.loads(private_key_jwk.export()), indent=4))

# Load the public key
with open("public_key.pem", "rb") as f:
    public_key_pem = f.read()
public_key_jwk = jwk.JWK.from_pem(public_key_pem)
print("Public Key in JWK format:")
print(json.dumps(json.loads(public_key_jwk.export_public()), indent=4))
