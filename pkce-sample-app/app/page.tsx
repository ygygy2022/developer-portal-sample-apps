//login page
"use client";
import Link from "next/link";
import { AuthURL } from "./lib/authUrl";

export default function Home() {
  const authorizationUrl = AuthURL();
  return (
    <div>
      <h3 className="pb-6 pt-4">The sample app demonstrates 
      <br />how to authenticate with <span className="font-bold">IBM Security Verify</span> 
      <br />by using the Proof Key of Code Exchange (PKCE) grant type.
      </h3>
      <Link className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-2 px-4 rounded" href={authorizationUrl}>Login</Link>
    </div>
  );
}
