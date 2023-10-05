import { nonce, setUpOIDC } from "@/app/lib/client";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { generators } from "openid-client";

export const codeVerifier = generators.codeVerifier();
export const codeChallenge = generators.codeChallenge(codeVerifier);

//route for return URL
export async function POST(){

    const cookieStore = cookies()
    cookieStore.set('cv', codeVerifier);
    cookieStore.set('nonce', nonce);

    const client = await setUpOIDC();
    // create a Authorization URL
    const authorizationUrl = client.authorizationUrl({
    scope: "openid",
    nonce: cookieStore.get('nonce')?.value,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  return NextResponse.json(authorizationUrl);
}