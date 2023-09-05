import { codeChallenge, nonce, setUpOIDC } from "@/app/lib/client";
import { NextResponse } from "next/server";
//route for return URL
export async function POST(){
    const client = await setUpOIDC();
  // create a Authorization URL
  const authorizationUrl = client.authorizationUrl({
    //redirect_uri: config.redirectUri,
    scope: "openid",
    //response_type: "code",
    nonce: nonce,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  return NextResponse.json(authorizationUrl);
}