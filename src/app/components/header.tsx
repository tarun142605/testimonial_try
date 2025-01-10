import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
            <header className="flex item-center justify-between px-6 py-4 shadow-md bg-white">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className=" flex text-2xl font-bold items-center ">
                        <i className="fas fa-thumbs-up mr-2 text-white bg-indigo-600 rounded-full place-content-center size-10 px-2 "></i> <p className="text-black-600">Testimonial</p>
                    </div>
                </div>
                {/*Navigation */}
                <nav className="md:flex hidden space-x-6 py-2">
                    <Link href="/customer" className="text-gray-600 hover:text-indigo-600 font-bold">
                    Customers
                    </Link>
                    <Link href="/features" className="text-gray-600 hover:text-indigo-600 font-bold">
                    Features
                    </Link>
                    <Link href="/integration"className="text-gray-600 hover:text-indigo-600 font-bold">Integration</Link>
                    <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 font-bold">Pricing</Link>
                    {/* Language Selector */}
                    <div className="md:flex hidden  space-x-2">
                        <Image src="../../us.svg" alt="English Language" className="pb-4" height={24} width={26}/>
                        <span className="text-gray-700">En</span>
                    </div>
                </nav>
                {/*Auth Button*/}
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="text-gray-700 hover:text-indigo-600">Sign in</Link>
                    <Link href="/register" className="text-white bg-blue-600 rounded hover:bg-indigo-700 px-4 py-2">Sign Up</Link>
                </div>
            </header>
    )
}