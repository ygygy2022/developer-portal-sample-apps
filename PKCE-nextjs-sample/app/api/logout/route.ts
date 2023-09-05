// pages/api/logout.js

export async function GET(request: Request) {
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
