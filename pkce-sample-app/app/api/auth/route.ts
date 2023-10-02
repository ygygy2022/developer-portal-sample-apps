// Route to get assess_Token from IBM server and save it in Cookie
import {
  nonce,
  setUpOIDC,
  codeVerifier as code_verifier,
} from "@/app/lib/client";

export async function GET(request: Request) {
  // Get code from searchParam
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  // Try to get assess_Token from IBM server, if get code. If success, generate a respond to save the token, else tell user failed
  if (code != null) {
    const url = `http://localhost:3000/redirect?code=${code}`;
    const client = await setUpOIDC();
    const params = client.callbackParams(url);
    const response = await client
      .callback(process.env.REDIRECT_URI, params, {
        nonce,
        code_verifier,
      }).then((userJWT)=>{
          return new Response(JSON.stringify({ success: true }), {
          status: 200, // HTTP status code for success
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `token=${userJWT.access_token as string};path=/;httponly`,
          },
        });
      })
      .catch((err) => {
        console.log(err.error_description);
        return new Response(JSON.stringify({ success: false }), {
          status: 401, // HTTP status code for failed
        });
      });
    // prettier-ignore
    return response;
  }
}
