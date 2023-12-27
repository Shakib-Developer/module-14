import { SignJWT, jwtVerify } from "jose";

export async function CreateTokenEnc(email) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);
  return token;
}

export async function VerifyTokenDec(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let decoded = await jwtVerify(secret, token);

  return decoded["payload"];
}
