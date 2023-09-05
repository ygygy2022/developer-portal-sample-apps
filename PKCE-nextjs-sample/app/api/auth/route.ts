import {
  nonce,
  setUpOIDC,
  codeVerifier as code_verifier,
} from "@/app/lib/client";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  if (code != null) {
    const url = `http://localhost:3000/redirect?code=${code}`;
    const client = await setUpOIDC();
    const params = client.callbackParams(url);
    const userJWT = await client
      .callback(process.env.REDIRECT_URI, params, {
        nonce,
        code_verifier,
      })
      .catch((err) => {
        console.log(err.error_description);
        redirect("/");
      });

    const access_token = userJWT.access_token;
    // prettier-ignore
    return new Response(JSON.stringify({ success: true }), {
      status: 200, // HTTP status code for success
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `token=${access_token as string};path=/;httponly`,
      },
    });
  }
}
