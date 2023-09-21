"use client";
import React, { useEffect } from "react";

type Props = {
  searchParams?: {
    code?: string;
  };
};

export default function Page(props: Props) {
  useEffect(() => {
    const code = props.searchParams?.code;
    async function fetchAuth() {
      const response = await fetch(`/api/auth?code=${code}`, { method: "GET" });
      const data = await response.json();
      if (data.success) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/";
      }
    }
    fetchAuth();
  }, []);

  return(  
  <div className="pt-12">
    <div className="animate-pulse flex space-x-4 ">
    <h1>Authorizing...</h1>
  </div>
    </div>
  );
}
