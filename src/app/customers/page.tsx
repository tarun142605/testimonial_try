import Link from 'next/link'
import Image from 'next/image'
export default function customers() {
    return (
        <div className=" pt-0">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-500 to-blue-500 px-64 py-32">
                {/* Left Section */}
                <div className="text-white md:w-1/2">
                    <p className="uppercase text-sm font-medium mb-2">Our customers</p>
                    <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
                        Leverage your <br />
                        <span className="text-white">social proof</span>
                    </h1>
                    <p className="text-lg font-light">
                        Testimonial makes collecting text and video testimonials fast and easy
                        for any business who needs social proof.
                    </p>
                </div>

                {/* Right Section */}
                <div className="bg-white text-gray-800 rounded-lg shadow-md p-8 md:w-1/3 mt-8 md:mt-0">
                    <p className="uppercase text-sm text-blue-600 mb-4 font-semibold">Businesses</p>
                    <ul className="space-y-4">
                        {/* Item 1 */}
                        <li className="flex items-center space-x-3 hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h11M9 21V3m9 10h-5m5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <Link href="/customers/#b2b"><span>B2B companies</span></Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center space-x-3 hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 3h12M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6z"
                                />
                            </svg>
                            <Link href="/customers/#ecom"><span>eCommerce & retail</span></Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center space-x-3 hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6M9 8h6M5 12h.01M19 12h.01M5 16h.01M19 16h.01M5 8h.01M19 8h.01"
                                />
                            </svg>
                            <Link href="/customers/#agency"><span>Agencies & freelancers</span></Link>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-center space-x-3 hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 4h14M5 16h14M5 20h14"
                                />
                            </svg>
                            <Link href="/customers/#course"><span>Course creators</span></Link>
                        </li>

                        {/* Item 5 */}
                        <li className="flex items-center space-x-3 hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 7h10M7 11h10M7 15h10"
                                />
                            </svg>
                            <Link href="/customers/#consumer"><span>Consumer apps</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="b2b">
                <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    {/* Content Section */}
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                        <div>
                            <div className="pt-4">
                                <div className="font-semibold text-xl text-purple-600 mb-2">
                                    <h2 className="text-xl  text-blue-500 mb-4">B2B companies</h2>
                                </div>
                                <h3 className="h3 mb-3">
                                    <p className="text-3xl font-bold text-black mb-4">
                                        Make your marketing easy
                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    Testimonials provide potential customers with a positive view of your product or service. Putting a customer success story in a video testimonial will help your business stand out in competitive markets, boost sales, and strengthen customer relationships.
                                </p>
                                <div className='bg-gray-100'>
                                    <div className='px-3 py-2'>
                                        <h2 className="text-sm font-bold  text-blue-500">B2B companies</h2>
                                        <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                                            Rewardful is a simple way for SaaS companies to setup affiliate and referral programs with Stripe. It uses Testimonial as the engine of word of mouth.
                                        </p>
                                    </div>
                                </div>
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
                                className="mt-10 mx-auto relative shadow-2xl lg:mt-0"
                                src="/customers/c1.png"
                                height={540}
                                width={540}
                                alt="easy to manage"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="ecom" className='bg-gray-100'>
                <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>

                            <div className="pt-4">
                                <div className="font-semibold text-xl text-purple-600 mb-2">
                                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Agencies & freelancers
                                    </h2>
                                </div>
                                <h3 className="h3 mb-3">
                                    <p className="text-3xl font-bold text-black mb-4"> Let clients speak for you
                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    If you are trying to close a deal with a lead, or trying to get more leads. Some testimonials from your previous clients would be the catalyst to make everything happen. Your leads will know if they work with you, they would be in a good team, and get a happy result as well.
                                </p>
                                <div className='bg-white'>
                                    <div className='px-3 py-2'>
                                        <h2 className="text-sm font-bold  text-blue-500">Our happy customer Levels.fyi

                                        </h2>
                                        <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                                            Levels.fyi helps job hunters evaluate & negotiate higher job offers. It's an easy 10x ROI from their 1-on-1 sessions. Testimonials, especially video testimonials help convince more potential clients, and show its authenticity.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Take a look
                                    </Link>
                                </div></div>
                        </div>
                    </div>
                    <div className="my-auto lg:col-start-1">
                        <div className="p-4 shadow-xl">
                            <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/customers/c2.png" height={540} width={540} alt="easy to manage" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="agency">
                <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    {/* Content Section */}
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                        <div>
                            <div className="pt-4">
                                <div className="font-semibold text-xl text-purple-600 mb-2">
                                    <h2 className="text-xl  text-blue-500 mb-4">eCommerce & retails
                                    </h2>
                                </div>
                                <h3 className="h3 mb-3">
                                    <p className="text-3xl font-bold text-black mb-4">
                                        People buy from people

                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    Who doesn't read reviews / testimonials before making any purchase? Social proof is so critical, especially in the eCommerce industry. People buy from people. Add some human touch to your products. It will drive more conversion, and boost your revenue.


                                </p>
                                <div className='bg-gray-100'>
                                    <div className='px-3 py-2'>
                                        <h2 className="text-sm font-bold  text-blue-500">Our happy customer LashFridays

                                        </h2>
                                        <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                                            LashFridays is a Shopify merchant who sells lash brush. It uses our product to remotely collect and display testimonials, and display them to drive more sales.

                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        href="/pricing"
                                        target="_blank"
                                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                    >
                                        Take a look
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
                                className="mt-10 mx-auto relative shadow-2xl lg:mt-0"
                                src="/customers/c3.png"
                                height={540}
                                width={540}
                                alt="easy to manage"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="course" className='bg-gray-100'>
                <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>

                            <div className="pt-4">
                                <div className="font-semibold text-xl text-purple-600 mb-2">
                                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Consumer apps
                                    </h2>
                                </div>
                                <h3 className="h3 mb-3">
                                    <p className="text-3xl font-bold text-black mb-4">Drive more conversions

                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                What makes your app stand out among competitors? It's the testimonial! Testimonial has some contagious power. It convinces other people to give it a try. It's the word of mouth.


                                </p>
                                <div className='bg-white'>
                                    <div className='px-3 py-2'>
                                        <h2 className="text-sm font-bold  text-blue-500">Our happy customer Yotta



                                        </h2>
                                        <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                                        Yotta makes saving instantly fun while also offering better rate than most savings accounts. Yotta uses our product to collect testimonials so that others would know how awesome its product is. A customer even won a Tesla by using Yotta, and he gave Yotta a big shoutout in a video.


                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Take a look
                                    </Link>
                                </div></div>
                        </div>
                    </div>
                    <div className="my-auto lg:col-start-1">
                        <div className="p-4 shadow-xl">
                            <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/customers/c4.png" height={540} width={540} alt="easy to manage" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="consumer">
                <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    {/* Content Section */}
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                        <div>
                            <div className="pt-4">
                                <div className="font-semibold text-xl text-purple-600 mb-2">
                                    <h2 className="text-xl  text-blue-500 mb-4">Course creators

                                    </h2>
                                </div>
                                <h3 className="h3 mb-3">
                                    <p className="text-3xl font-bold text-black mb-4">
                                    Skyrocket course sales


                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                Tired of collecting testimonials? Sometimes you may forget, right? Now you can easily streamline the testimonial collecting process to build your social proof.



                                </p>
                                <div className='bg-gray-100'>
                                    <div className='px-3 py-2'>
                                        <h2 className="text-sm font-bold  text-blue-500">Our happy customer Justin Welsh



                                        </h2>
                                        <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                                        Justin walked away from my executive job at a high-growth startup to build his own portfolio of one-person businesses. He has made millions of dollars by selling his online courses, and he uses Testimonial to build his social trust and created such a flywheel to further promote his courses.



                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        href="/pricing"
                                        target="_blank"
                                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                    >
                                        Take a look
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
                                className="mt-10 mx-auto relative shadow-2xl lg:mt-0"
                                src="/customers/c5.png"
                                height={540}
                                width={540}
                                alt="easy to manage"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center py-10 w-2/3">
            <h1 className="text-5xl font-bold text-black leading-relaxed">
            Ready to collect testimonials?            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-8">We are loved by Fortune 500 companies, early-stage startups, marketing agencies, real estate agents, freelancers, and many more. Your customers' testimonials are the best social proof you can get! Get started now 👇</p>
            <div className="flex justify-center space-x-6 pt-8">
              <button className="bg-blue-600 text-white py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110">Get Started With FREE Credits</button>
              <button className="text-black border transition-all duration-300 transform hover:scale-110 border-blue-600 rounded px-8 py-4">
                <div className="flex"><span className="pr-2">Talk to us</span>
                  <Image src="/1.png" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                  <Image src="/2.jpg" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                  <Image src="/3.png" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                  <Image src="/4.png" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                </div></button>
            </div>
            <div><p className="text-gray-500 text-sm pt-3"><Link href="/pricing" className="underline text-gray-500 font-bold"> See our pricing →</Link></p></div>
          </div>
          </div>
        </div>
    )
}