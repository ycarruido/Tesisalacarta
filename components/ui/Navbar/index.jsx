import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from '../Brand'

const Navbar = () => {

    const [state, setState] = useState(false)
    const { events } = useRouter();

    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "Servicios", path: "#services" },
        { title: "Resenas", path: "#testimonials" },
        { title: "Contacto", path: "#contacto" },
    ]

    useEffect(() => {
        // Close the navbar menu when navigate
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", handleState);
        events.on("hashChangeStart", handleState);

        return () => {
            events.off("routeChangeStart", handleState);
            events.off("hashChangeStart", handleState);
        }
    }, [events])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header className="sticky top-0 z-40">
            <nav className={`w-full border-b border-white/70 bg-white/70 backdrop-blur-xl md:static md:text-sm ${state ? "fixed z-10 h-full" : ""}`}>
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3"> {/* py-3 md:py-5 md:block */}
                        <Brand />
                        <div className="md:hidden">
                            <button role="button" aria-label="Open the menu" className="text-slate-900 transition-all duration-300 hover:text-brand-primary"
                                onClick={handleNavMenu}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="text-brand-accent text-lg justify-end items-center space-y-6 md:flex md:space-x-7 md:space-y-0 md:text-sm md:font-medium">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="transition-all duration-300 hover:text-brand-primary">
                                            <Link
                                                href={item.path}
                                                className="block"
                                                scroll={false}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <Link
                                    href="/get-started"
                                    className="inline-flex rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-brand-accent shadow-sm transition-all duration-300 hover:opacity-95"
                                >
                                    Solicitar asesoria
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar