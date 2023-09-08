import Link from "next/link"
export default function Navbar(){
    return(
    <nav>
        <footer>
            <p>Visit the IBM Security Verify Documentation Hub for more information about the Device authorization flow <Link 
            href="https://docs.verify.ibm.com/verify/docs/developer-portal">
                sample app</Link>.
            </p>
        </footer>
    </nav> 
    )
}