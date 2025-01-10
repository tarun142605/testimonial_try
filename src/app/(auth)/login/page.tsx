import Image from "next/image"
import Link from "next/link"
export default function Login(){
    return(
        <div className="flex flex-col bg-gray-100 min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold text-center pb-8">Welcome back👋</h1>
            <div className="w-full max-w-md p-8 space-y-6 shadow-lg bg-white rounded-lg">
                <button className="btn px-0 text-white bg-gray-50 hover:bg-gray-100 w-full flex items-center border border-gray-300 px-6" type="button">
                    <Image src="/download.png" alt="google" height={18} width={20} className="object-contain ml-3 mr-3 "/>
                    <span className="ml-3 h-6 flex items-center border-r  border-gray-300 mr-4" aria-hidden="true">
	            </span><span className="flex-auto pl-16 pt-3 pb-3 pr-8 -ml-16 text-gray-600">Sign in with Google
	            </span></button>
                <div className="flex items-center my-4">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <span className="px-2 text-gray-400 ">or signin with your email</span>
                    <span className="flex-grow border-t border-gray-300"></span>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-600 text-sm">
                            Email 
                        </label>
                        <input required id="email" name="email" type="email" className="block w-full px-4 py-2 mt-1 border border-gray-400 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Your email"></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-600 text-sm">
                            Password 
                        </label>
                        <input required id="password" name="password" type="password" className="block w-full px-4 py-2 mt-1 border border-gray-400 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Password"></input>
                    </div>
                    <div className="flex justify-left">
                        <Link href="#" className="text-blue-500 hover:text-gray-600">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded text-1xl hover:bg-blue-700">Sign in</button>
                    <div className="text-center">
                        <p className="text-gray-500 text-sm">
                            You can also <Link href="#" className="underline text-gray-600 hover:text-blue-500">continue with SML SSO</Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500">Don't have an account?
                            <Link href="/register" className="text-blue-500">Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}