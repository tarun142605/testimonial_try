import Link from 'next/link'
import Image from 'next/image'
export default function agency() {
    return (
        <div className=" pt-0">
            <div id="first-section">
                <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    {/* Content Section */}
                    <div className="px-4 w-l mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                        <div>
                            <div className="pt-4">

                                <h3 className="h3 mb-3">
                                    <p className="text-5xl font-bold text-black mb-4">
                                        Collect and embed video testimonials in minutes
                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    Testimonial helps your agency boost conversions on your clients' websites with social proof. Collect and embed video testimonials in record time like this 👉
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/pricing"
                                        target="_blank"
                                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                    >
                                        TRY IT NOW
                                    </Link>
                                </div>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    7 days free trial, get started today!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="my-auto lg:col-start-2">
                        <div className="p-4">
                            <Image
                                loading="lazy"
                                className="mt-10 mx-auto relative lg:mt-0"
                                src="/landing-page.png"
                                height={540}
                                width={540}
                                alt="easy to manage"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative bg-indigo-50">
                {/* Background Wave */}
                <div
                    className="absolute top-0 left-0 w-full h-32 bg-indigo-100"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
                    }}
                ></div>

                {/* Content Section */}
                <div className="relative w-full bg-gray-100 py-16 px-4">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-blue-600 text-sm pb-2 font-medium uppercase">
                            Opportunities for You
                        </p>
                        <h1 className="font-bold text-4xl md:text-5xl text-black leading-tight">
                            Offer a unique, dynamic service
                        </h1>
                        <p className="text-gray-700 mt-4">
                            Your clients need testimonials to drive more conversions for their
                            business. They understand the value of social proof. Helping them
                            collect, manage, and embed testimonials is a no-brainer service they
                            are eager to have!
                        </p>
                    </div>
                    <div className="flex justify-center items-center pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 justify-center items-center text-center">
                            {/* Card 1 */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4 mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 9c4.418 0 8-1.79 8-4M4 17c0 2.21 3.582 4 8 4s8-1.79 8-4m-8-1v4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy upsell</h3>
                                <p className="text-gray-600">
                                    Your clients know getting testimonials is crucial for their business. It's
                                    your job to help them get more!
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4 mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 9c4.418 0 8-1.79 8-4M4 17c0 2.21 3.582 4 8 4s8-1.79 8-4m-8-1v4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Recurring revenue
                                </h3>
                                <p className="text-gray-600">
                                    Testimonials need to be maintained, hosted, and updated, adding clear
                                    value to your service fee.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4 mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 9c4.418 0 8-1.79 8-4M4 17c0 2.21 3.582 4 8 4s8-1.79 8-4m-8-1v4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Competitive edge
                                </h3>
                                <p className="text-gray-600">
                                    Few agencies offer unique features like Testimonial. We help you stand out.adding clear
                                    value.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center max-w-3xl mx-auto pt-28">
                        <p className="text-blue-600 text-sm pb-2 font-medium uppercase">
                            Our solution
                        </p>
                        <h1 className="font-bold text-4xl md:text-5xl text-black leading-tight">
                            End-to-End, Customizable Setup
                        </h1>
                        <p className="text-gray-700 mt-4">
                            Testimonial offers an agency-dedicated plan to help grow your business. You will have the best platform you need to handle testimonial collection, easy to use for you, your clients, and theirs!
                        </p>
                    </div>
                    <div id="first-section">
                        <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            {/* Content Section */}
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                                <div>
                                    <div className="pt-0">
                                        <div className="font-semibold text-xl text-purple-600 mb-2">
                                            <h2 className="text-xl  text-blue-500 mb-4">Quick to setup</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">
                                                A dedicated landing page
                                            </p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.
                                        </p>
                                        <div className="mt-6">
                                            <Link
                                                href="/pricing"
                                                target="_blank"
                                                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                            >
                                                Try it for free
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="my-auto lg:col-start-2">
                                <div className="p-4">
                                    <Image
                                        loading="lazy"
                                        className="mt-10 mx-auto relative lg:mt-0"
                                        src="/ag-1.jpg"
                                        height={540}
                                        width={540}
                                        alt="easy to manage"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="secon-section">
                        <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>

                                    <div className="pt-0">
                                        <div className="font-semibold text-xl text-purple-600 mb-2">
                                            <h2 className="text-xl font-semibold text-blue-600 mb-4">Easy to manage</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4"> A dashboard to manage all testimonials</p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            You will have a simple &amp; clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
                                        <div className="mt-6">
                                            <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try it for free
                                            </Link>
                                        </div></div>
                                </div>
                            </div>
                            <div className="my-auto lg:col-start-1">
                                <div className="p-4">
                                    <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/ag-2.jpg" height={540} width={540} alt="easy to manage" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="third-section">
                        <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            {/* Content Section */}
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                                <div>
                                    <div className="pt-0">
                                        <div className="font-semibold text-xl text-purple-600 mb-2">
                                            <h2 className="text-xl  text-blue-500 mb-4">Track the metrics</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">
                                                Understand how video testimonials are performing
                                            </p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels.
                                        </p> <p className="text-gray-400 text-xs pt-3">* Available in the Ultimate plan</p>
                                        <div className="mt-6">
                                            <Link
                                                href="/pricing"
                                                target="_blank"
                                                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                            >
                                                Try it for free
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="my-auto lg:col-start-2">
                                <div className="p-4">
                                    <Image
                                        loading="lazy"
                                        className="mt-10 mx-auto relative lg:mt-0"
                                        src="/ag-3.png"
                                        height={540}
                                        width={540}
                                        alt="easy to manage"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="fourth-section">
                        <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>

                                    <div className="pt-0">
                                        <div className="font-semibold text-xl text-purple-600 mb-2">
                                            <h2 className="text-xl font-semibold text-blue-600 mb-4">More social proof</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4"> Not only text and video testimonials</p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            If you have testimonials on social media (e.g. Twitter, LinkedIn, TikTok etc), video hosting platforms (e.g. YouTube, Vimeo), and other review sites (e.g. G2, Google, Capterra, Yelp etc), bring them all to your account. Testimonial helps you manage all your social proof in a single place!</p>
                                        <div className="mt-6">
                                            <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try it for free
                                            </Link>
                                        </div></div>
                                </div>
                            </div>
                            <div className="my-auto lg:col-start-1">
                                <div className="p-4">
                                    <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/ag-4.png" height={540} width={540} alt="easy to manage" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fifth-section">
                        <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            {/* Content Section */}
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                                <div>
                                    <div className="pt-0">
                                        <div className="font-semibold text-xl text-purple-600 mb-2">
                                            <h2 className="text-xl  text-blue-500 mb-4">Track the metrics</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">
                                                Understand how video testimonials are performing
                                            </p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 pb-4">
                                            Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels.
                                        </p> <Link href="/" className="text-black text-sm font-semibold pt-4 underline">See our Wall of Love in action 👉</Link>
                                        <div className="mt-6">
                                            <Link
                                                href="/pricing"
                                                target="_blank"
                                                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                            >
                                                Try it for free
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="my-auto lg:col-start-2">
                                <div className="p-4">
                                    <Image
                                        loading="lazy"
                                        className="mt-10 mx-auto relative lg:mt-0"
                                        src="/ag-5.png"
                                        height={540}
                                        width={540}
                                        alt="easy to manage"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <div className="flex flex-col items-center justify-center">
                <div className="text-center py-10 w-2/3">
                    <h1 className="text-3xl font-bold text-black leading-relaxed">
                    Ready to upsell Testimonial service to</h1>
                    <h1 className="text-3xl font-bold text-black">gain more recurring revenue?
                    </h1>
                    <p className="mt-4 text-s text-gray-600 leading-8">Your clients need testimonials to sell more. Let's make it happen!</p>
                    <div className="flex justify-center space-x-6 pt-8">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-110">Try FREE now</button>
                        
                    </div>
                    <div><p className="text-gray-500 text-sm pt-3"><Link href="/pricing" className="underline text-gray-500 font-bold"> See our pricing →</Link></p></div>
                </div>
            </div>

        </div>
    )
}