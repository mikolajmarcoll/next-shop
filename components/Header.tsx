import Link from "next/link"
import { useRouter } from "next/router";


export const Header = () => {
    const router = useRouter();

    return (
        <header className="max-w-md mx-auto w-full">
            <nav className="bg-gray-700 text-white px-4 py-2">    
                <Link href="/">
                    <a className={router.pathname == "/" ? "text-black" : ""}>Główna</a>
                </Link>    
                <Link href="/about">
                    <a className={router.pathname == "/about" ? "text-black" : ""}>About</a>
                </Link>
            </nav>
      </header>
    )
}