"use client";
import Link from "next/link";
import { AuthURL } from "./lib/authUrl";
//change for create pull request
export default function Home() {
  const authorizationUrl = AuthURL();

  return (
    <div>
      <Link href={authorizationUrl}>Login</Link>
    </div>
  );
}
