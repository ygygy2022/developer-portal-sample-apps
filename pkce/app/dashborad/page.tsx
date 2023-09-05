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
        <h3>{` Welcome ${userInfo.name}`}</h3>
        <p className="lead">
          You have successfully authenticated with IBM Security Verify.
        </p>
        <p>
          Below is the information retrieved from the <code>userInfo</code>{" "}
          endpoint for the authenticated user.
        </p>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User claims</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(userInfo).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{String(userInfo[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/api/logout">Logout</a>
      </div>
    );
  }
}
