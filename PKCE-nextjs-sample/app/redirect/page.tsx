"use client";
import React, { useEffect } from "react";

type Props = {
  searchParams?: {
    code?: string;
  };
};

export default function Page(props: Props) {
  const code = props.searchParams?.code;

  useEffect(() => {
    async function fetchAuth() {
      const response = await fetch(`/api/auth?code=${code}`, { method: "GET" });
      const data = await response.json();

      if (data.success) {
        window.location.href = "/dashborad";
      } else {
        window.location.href = "/";
      }
    }
    fetchAuth();
  }, [code]);

  return <div>Redirecting...</div>;
}
