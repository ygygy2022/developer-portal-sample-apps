// Route for log out

import { setUpOIDC } from "@/app/lib/client";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  // If had token, try to revoke assess_token from server side
  if(token){
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
        "Set-Cookie": `token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;httponly`,  // Remove the cookie
      },
    });
}
