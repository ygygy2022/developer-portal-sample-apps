import { Issuer, generators } from "openid-client";
// The function to generate client which is a clientBase property by using issuer.Client function

export async function setUpOIDC() {
  const ibmIssuer = await Issuer.discover(
    process.env.TENANT_URL as string
  );
  return new ibmIssuer.Client({
    client_id: process.env.CLIENT_ID as string,
    redirect_uri: process.env.REDIRECT_URI,
    response_type: process.env.RESPONSE_TYPE,
    client_secret: process.env.CLIENT_SECRET,
    //token_endpoint_auth_method: "none"
  });
}

// Generate var for PKCE flow
// export const codeVerifier = generators.codeVerifier();
export const nonce = generators.nonce();
// export const codeChallenge = generators.codeChallenge(codeVerifier);
