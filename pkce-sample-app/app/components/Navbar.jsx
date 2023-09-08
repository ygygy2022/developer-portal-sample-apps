import Link from "next/link"
export default function Navbar(){
    return(
    <nav>
        <h1>Device authorization flow sample app.</h1>
        <p>The sample app is using <Link 
        href="https://www.npmjs.com/package/openid-client?activeTab=readme">
            openid-client
            </Link>
        </p>
    </nav> 
    )
}