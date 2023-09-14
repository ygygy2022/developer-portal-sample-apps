// pages/api/logout.js

import { setUpOIDC } from "@/app/lib/client";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  if(!token){
    await setUpOIDC().then((client)=>{
      client.revoke(token as unknown as string,'access_token')
    })
  }

  // prettier-ignore
  return new Response(JSON.stringify({ success: true }), {
      status: 302, // HTTP status code for temporary redirection
      headers: {
        "Location": "/",  // The URL to redirect to
        "Content-Type": "application/json",
        "Set-Cookie": `token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;httponly`,  // Set the cookie's expiry to a past date
      },
    });
}
