import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#222831] text-gray-400 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
                    <Link className="hover:text-gray-200" href="/">
                        Grupo de Beer Pong
                    </Link>
                </nav>
                <p className="text-sm">Trabajo para la Universidad Nacional del Sur.</p>
            </div>
        </footer>
    )
}
