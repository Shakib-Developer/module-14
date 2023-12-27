import { CreateTokenEnc } from "./JwtHelper";

export async function CreateTokenCookie(email) {
  let token = await CreateTokenEnc(email);
  return {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
}
