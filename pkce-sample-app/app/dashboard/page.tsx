// Result page, showing user information after auth done

import { redirect } from "next/navigation";
import { setUpOIDC } from "../lib/client";
import { cookies } from "next/headers";

export default async function Page() {
  // Get token cookie, redirect to login page if failed.
  const cookieStore = cookies();
  if (!cookieStore.get("token")?.value) {
    redirect("/");
  } else {
    const assessToken = cookieStore.get("token")?.value;
    const client = await setUpOIDC();
    const userInfo = await client.userinfo(assessToken as string);

    return (
      <div>
        <h3 className="font-semibold">{` Welcome ${userInfo.name}`}</h3>
        <h4 className="mb-8 text-slate-600">
          You have successfully authenticated with IBM Security Verify.
        </h4>
        <p className="text-lg font-medium">
          Below is the information retrieved from the <code>userInfo</code>{" "}
          endpoint for the authenticated user.
        </p>
        <br />
        <table className="border-collapse border border-slate-400 table-auto text-left min-w-fit min-h-16 text-xl" >
          <thead className ="bg-black text-white ">
            <tr>
              <th className="border border-slate-500">User claims</th>
              <th className="border border-slate-500">Value</th>
            </tr>
          </thead>
          <tbody>
            {/*Build a table by using userInfo*/}
            {Object.keys(userInfo).map((key) => (
              <tr key={key} className="border border-slate-500">
                <td className="border border-slate-500 font-bold pl-1 pr-8">{key}</td>
                <td className="border border-slate-500 pl-1 pr-8 text-slate-500">{String(userInfo[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <a href="/api/logout" className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-2 px-4 rounded">Logout</a>
      </div>
    );
  }
}
