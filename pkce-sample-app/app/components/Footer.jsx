import Link from "next/link"
export default function Navbar(){
    return(
    <nav>
        <footer class="absolute inset-x-0 bottom-0 h-6 bg-black px-24 py-6 text-white">
            <p>Visit the IBM Security Verify Documentation Hub for more information about the Device authorization flow <span
            class="text-blue-600">
            <Link 
            href="https://docs.verify.ibm.com/verify/docs/developer-portal">
                sample app</Link>.
            </span>
            </p>
        </footer>
    </nav> 
    )
}