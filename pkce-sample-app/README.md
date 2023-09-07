# PKCE

This sample shows how to use the openid-client for Next.js to:
 - Authenticate a user via openid-client using the the PKCE grant type.
 - Successfully make an API request to `userinfo` endpoint to return the authenticated users details.

<br>

![screenshot](screenshot.png)

## :rocket: Demo the sample app:
**If you've downloaded a sample application via the developer portal you can skip step one.**
1. Create a `.env.local` file with the following variables in place (remove secret if Public Client)
```
TENANT_URL=https://your-tenant-name.ice.ibmcloud.com
CLIENT_ID=a1b2c3d4-abcd-1234-0000-yourid
CLIENT_SECRET=yoursecret
REDIRECT_URI=http://localhost:3000/redirect
FLOW_TYPE=authorization
RESPONSE_TYPE=code
SCOPE=openid
```
2. In ./lib/client remove `//` at `//token_endpoint_auth_method: "none"` if not a PKCE flow(none chanlleng code and code verifier required)
3. `npm install`
4. `npm run dev`
5. In your CLI follow the prompts to authenticate.

Following successful authentication, authenticated user information will be returned.

## License

The MIT License (MIT)

Copyright (c) 2021 - IBM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.