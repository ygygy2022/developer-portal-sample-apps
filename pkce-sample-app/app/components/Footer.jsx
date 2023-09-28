// Footer which will always show on the bottom of the page

export default function Navbar(){
    return(
    <nav>
        <footer className="absolute inset-x-0 bottom-0 h-6 bg-black px-24 pb-8 pt-4 text-white">
            <p className="text-xs">Visit the IBM Security Verify Documentation Hub for more information about the Authorization code grant with the Proof Key of Code Exchange (PKCE) <span
            className="text-blue-600">
                sample app
            </span>
            .
            </p>
        </footer>
    </nav> 
    )
}