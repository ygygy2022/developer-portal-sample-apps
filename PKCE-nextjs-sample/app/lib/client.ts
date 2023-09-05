import { Issuer, generators } from "openid-client";
export async function setUpOIDC() {
  const ibmIssuer = await Issuer.discover(
    "https://student-devportal.rel.verify.ibmcloudsecurity.com/oauth2/.well-known/openid-configuration"
  );
  const client = new ibmIssuer.Client({
    client_id: process.env.CLIENT_ID as string,
    redirect_uri: process.env.REDIRECT_URI,
    response_type: process.env.RESPONSE_TYPE,
    client_secret: process.env.CLIENT_SECRET,
    //token_endpoint_auth_method: "none"
  });

  return client;
}

export const codeVerifier = generators.codeVerifier();
export const nonce = generators.nonce();
export const codeChallenge = generators.codeChallenge(codeVerifier);
