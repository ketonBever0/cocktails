import HamburgerBtn from "@/components/ui/HamburgerBtn";
import Link from "next/link";


export default function NavBar() {




    return (
        <div className="navbar bg-base-100 fixed z-40">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">The Cocktails DB</Link>
            </div>
            <div className="flex-none">
                <div className="md:hidden"><HamburgerBtn /></div>

                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li>
                        <Link href="/search">Search Cocktails</Link>
                    </li>
                    <li>
                        <details>
                            <summary>About...</summary>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <Link href="/about/me">...Me</Link>
                                </li>
                                <li>
                                    <Link href="/about/it">...the Page</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/feedback">Feedback</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}