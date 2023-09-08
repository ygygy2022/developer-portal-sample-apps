import { redirect } from "next/navigation";
import { setUpOIDC } from "../lib/client";
import { cookies } from "next/headers";

export default async function Page() {
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
        <table className="border-collapse border border-slate-400 table-auto text-left max-w-sm min-h-12" >
          <thead className ="bg-black text-white ">
            <tr>
              <th className="border border-slate-500">User claims</th>
              <th className="border border-slate-500">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(userInfo).map((key) => (
              <tr key={key} className="border border-slate-500">
                <td className="border border-slate-500">{key}</td>
                <td className="border border-slate-500">{String(userInfo[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/api/logout">Logout</a>
      </div>
    );
  }
}
