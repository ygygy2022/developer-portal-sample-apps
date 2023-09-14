import Link from "next/link"
export default function Navbar(){
    return(
    <nav className="bg-slate-100 px-24 py-16 mb-8">
        <h1 className= "mb-2 uppercase font-bold">PKCE flow sample app.</h1>
        <p className="mb-2">The sample app is using <span className="text-blue-600"
        ><Link 
        href="https://www.npmjs.com/package/openid-client?activeTab=readme" target="_blank">
            openid-client
            </Link>
        </span>
        </p>
    </nav> 
    )
}