/*
 MIT License

Copyright (c) 2019, 2021 - IBM Corp.

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial
 portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const express = require("express");
const { Issuer } = require("openid-client");
const rls = require("readline-sync");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log("ibm-verify-sdk ROPC sample application\n\n");

console.log("Authenticate against");
console.log(`tenant    : ${process.env.TENANT_URL}`);
console.log(`client ID : ${process.env.CLIENT_ID}\n\n`);

const config = {
  tenantUrl: process.env.TENANT_URL,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  flowType: process.env.FLOW_TYPE,
  scope: process.env.SCOPE,
};

const username = rls.question("username: ");
const password = rls.question("password: ", { hideEchoBack: true });

// Fetch the OIDC configuration from the well-known endpoint.
Issuer.discover(config.tenantUrl)
  .then((issuer) => {
    const client = new issuer.Client({
      client_id: config.clientId,
      client_secret: config.clientSecret,
    });

    client
      .grant({
        grant_type: "password",
        username: username,
        password: password,
        scope: "read:sample",
      })
      .then((response) => {
        client.userinfo(response.access_token).then((userinfo) => {
          console.log("User Info:", userinfo);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error("Failed to discover issuer:", error);
  });

app.listen(5000, () => {
  console.log("App listening on port 3000");
});
