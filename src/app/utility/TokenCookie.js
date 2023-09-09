import { CreateToken } from "@/app/utility/JWTHelper";
import { cookies } from "next/headers";

// akne email ta parse kra akta cookie set korbo.ar sei cookie ta encryption.
export async function TokenCookie(email) {
  let token = await CreateToken(email);
  return {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
}
