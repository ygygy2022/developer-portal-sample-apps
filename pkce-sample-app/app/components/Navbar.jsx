import Link from "next/link"
export default function Navbar(){
    return(
    <nav class="bg-slate-100 px-24 py-16 mb-8">
        <h1 class= "mb-2 uppercase font-bold">PKCE flow sample app.</h1>
        <p class="mb-2">The sample app is using <span class="text-blue-600"
        ><Link 
        href="https://www.npmjs.com/package/openid-client?activeTab=readme" target="_blank">
            openid-client
            </Link>
        </span>
        </p>
    </nav> 
    )
}