"use client"
import Image from "next/image"
import Link from "next/link"
export default function Features(){
    return(
        <div className="flex-grow  pt-0">
            <section>
                <div className="flex flex-col justify-center items-center pt-32 ">
            <div className="justify-center items-center w-3/4">
                <h1 className="text-5xl font-bold text-center text-black leading-snug font-inter">
                    Collect and display testimonials all in one solution
                </h1>
               
            </div>
            </div>
            </section>
            <section>               
                <div id="first-section">
    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        {/* Content Section */}
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div>
                <div className="pt-4">
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
                    src="/landing-page.png"
                    height={540}
                    width={540}
                    alt="easy to manage"
                />
            </div>
        </div>
    </div>
</div>

                <div id="agency-freelancer">
                    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>
            
            <div className="pt-4">
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
                                    <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/Easy-to-manage.png" height={540} width={540} alt="easy to manage"/>
                                    </div>
                                </div>
                            </div>
                    </div>
    <div id="third-section">
    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        {/* Content Section */}
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div>
                <div className="pt-4">
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
                    src="/metrics.png"
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
            
            <div className="pt-4">
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
                                    <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/more-social-proof.png" height={540} width={540} alt="easy to manage"/>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div id="third-section">
    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        {/* Content Section */}
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div>
                <div className="pt-4">
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
                    src="/wall-of-love.png"
                    height={540}
                    width={540}
                    alt="easy to manage"
                />
            </div>
        </div>
    </div>
</div>
            </section>
        </div>
    )
}