import Link from 'next/link'
import Image from 'next/image'
export default function b2b() {
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
                                        Boost your sales with social proof and testimonials
                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    Tired of collecting and managing testimonials? From text and video testimonials to social media shoutouts, you can now collect and display them on your website automatically.


                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/pricing"
                                        target="_blank"
                                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                    >
                                        Try FREE now                                    </Link>
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
                            <p className="mt-4 text-sm text-black bg-orange-50 dark:text-gray-400 mb-4">
                                "<span className='font-bold'>Nothing </span>has helped people be as confident in our solution <span className='font-bold'>than gathering testimonials</span>  from our happy customers"


                            </p>
                            <video
                                controls
                                width="540"
                                height="540"
                                className="shadow-xl rounded"
                            >
                                <source src="/high.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative bg-indigo-50">
                {/* Background Wave */}

                {/* Content Section */}
                <section>
                    <div className="w-full bg-gray-100 py-20">
                        <div className="justify-center items-center text-center">
                            <h1 className="font-bold text-5xl text-black">Integrate with any platform
                            </h1>
                            <p className="text-gray-600 pt-4">We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code,</p>
                            <p className="text-gray-600"> you can embed all your testimonials to any platform!</p>
                        </div>
                        {/* Section with Two Rows of Cards */}
                        <section className="py-10">
                            <div className="container mx-auto space-y-8">
                                {/* Row 1 */}
                                <div className="grid grid-cols-4 gap-4">
                                    {/* Card 1 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo1.png" alt="Webflow" className="h-8" />
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo2.png" alt="Shopify" className="h-8" />
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo3.png" alt="Carrd" className="h-8" />
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo4.png" alt="WordPress" className="h-12" />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-4 gap-4">
                                    {/* Card 5 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo5.svg" alt="Kajabi" className="h-5" />
                                    </div>

                                    {/* Card 6 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo6.svg" alt="Bubble" className="h-5" />
                                    </div>

                                    {/* Card 7 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo7.png" alt="Framer" className="h-8" />
                                    </div>

                                    {/* Card 8 */}
                                    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex justify-center items-center h-20">
                                        <img src="/integration-logo/logo8.jpg" alt="Squarespace" className="h-8" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <p className="text-black text-sm justify-center text-center">
                            <Link href="/" className="underline">
                                ✨ See all 100+ integrations</Link>
                        </p>
                    </div>
                </section>

            </section>

            <section>
                <div className="flex justify-center items-center py-16 bg-white">
                    <div className="max-w-2xl bg-yellow-50 p-8 rounded-lg shadow-md text-center">
                        {/* Image */}
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src="/avatar-2.jpg" // Replace with the actual image path
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Name and Role */}
                        <h3 className="text-lg font-semibold text-gray-800">
                            Andrew Gazdecki, <span className="font-normal text-gray-600">Founder and CEO of Acquire.com</span>
                        </h3>

                        {/* Testimonial */}
                        <p className="text-gray-700 mt-4">
                            Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive new leads to our business.
                        </p>
                        {/* Rating */}
                        <div className="flex justify-center mt-4">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-yellow-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.354 4.17a1 1 0 00.95.69h4.462c.969 0 1.372 1.24.588 1.81l-3.62 2.63a1 1 0 00-.364 1.118l1.354 4.17c.3.921-.755 1.688-1.54 1.118l-3.621-2.63a1 1 0 00-1.175 0l-3.62 2.63c-.784.57-1.838-.197-1.54-1.118l1.353-4.17a1 1 0 00-.364-1.118L2.21 9.597c-.784-.57-.38-1.81.588-1.81h4.462a1 1 0 00.95-.69l1.354-4.17z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gray-50'>
                <div className="text-center max-w-3xl mx-auto pt-28">
                    <p className="text-blue-600 font-bold text-sm pb-2 uppercase">
                        Our solution
                    </p>
                    <h1 className="font-bold text-4xl md:text-5xl text-black leading-tight">
                        We make it effortless

                    </h1>
                    <p className="text-gray-700 mt-4">
                        Our platform offers you the ideal solution for collecting and displaying testimonials.
                        It's user-friendly for you and hassle-free for your customers to submit their feedback!
                    </p>
                </div>
                <div id="first-section">
                    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        {/* Content Section */}
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                            <div>
                                <div className="pt-4">
                                    <div className="font-semibold text-xl text-purple-600 mb-2">
                                        <h2 className="text-xl  text-blue-500 mb-4">Collect</h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4">
                                            Turn word of mouth into evergreen social proof
                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Collect social media mentions, videos, and 3rd party reviews to display on your website all in one place.
                                    </p>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Build stronger relationships by staying on top of customer shoutouts, and putting the words of raving fans on your website.
                                    </p>
                                    <div className="mt-6">
                                        <Link
                                            href="/pricing"
                                            target="_blank"
                                            className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                        >
                                            Try FREE now
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

                <div id="secon-section">
                    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>

                                <div className="pt-4">
                                    <div className="font-semibold text-xl text-purple-600 mb-2">
                                        <h2 className="text-xl font-semibold text-blue-600 mb-4">Display</h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4"> Skyrocket your website conversions
                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Curate your testimonials into a high-converting Wall of Love to add to your website (with no-code).</p>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Save time adding and updating testimonials on your website and focus on revenue-generating activities.</p>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 bg-orange-50">
                                        <span className='font-bold'>“Testimonial has been a big part of my conversions”</span>- Kenneth Cassel, Founder of Slip.so (YC S21).</p>
                                    <div className="mt-6">
                                        <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try FREE now
                                        </Link>
                                    </div></div>
                            </div>
                        </div>
                        <div className="my-auto lg:col-start-1">
                            <div className="p-4">
                                <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/Easy-to-manage.png" height={540} width={540} alt="easy to manage" />
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
                                        <h2 className="text-xl  text-blue-500 mb-4">Encourage</h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4">
                                            Make it super easy for your customers to submit their testimonials
                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Embed the testimonial collecting widget on your website in seconds and give customers a place to leave feedback right from your own domain.
                                    </p>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Finally, stop “hoping” for customers to leave testimonials — send them to a dedicated page and collect high-converting social proof.
                                    </p>

                                    <div className="mt-6">
                                        <Link
                                            href="/pricing"
                                            target="_blank"
                                            className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                        >
                                            Try FREE now
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
                                        <h2 className="text-xl font-semibold text-blue-600 mb-4">Automate</h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4"> Don't let customers's testimonial slip away
                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Make collecting testimonial part of your sales & marketing pipeline by creating custom automation to request testimonials when they are most likely to do so.</p>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        With automation, every time someone upgrades or does x within your platform, a testimonial request can be sent to your customers.</p>
                                    <div className="mt-6">
                                        <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try FREE now
                                        </Link>
                                    </div></div>
                            </div>
                        </div>
                        <div className="my-auto lg:col-start-1">
                            <div className="p-4">
                                <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/more-social-proof.png" height={540} width={540} alt="easy to manage" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fifth-section">
                    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        {/* Content Section */}
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                            <div>
                                <div className="pt-4">
                                    <div className="font-semibold text-xl text-purple-600 mb-2">
                                        <h2 className="text-xl  text-blue-500 mb-4">Integrate</h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4">
                                            Integrate with hundreds of review sites and web builders

                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 pb-4">
                                        Import reviews from platforms like G2, Capterra, TrustRadius, Product Hunt, App Store, etc. As well as social media like Twitter, Instagram, and LinkedIn.
                                    </p>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 pb-4">
                                        Once you are done, you can embed your testimonials on any website such as Webflow, WordPress, Framer, and many more.
                                    </p>

                                    <div className="mt-6">
                                        <Link
                                            href="/pricing"
                                            target="_blank"
                                            className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800"
                                        >
                                            Try FREE now
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
                <div id="second-section">
                    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>

                                <div className="pt-4">
                                    <div className="font-semibold text-xl text-purple-600 mb-2">
                                        <h2 className="text-xl font-semibold text-blue-600 mb-4">Collaborate
                                        </h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4"> Collaborate with your team
                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Testimonial makes it a breeze for everyone on the team. From your dev team adding the widgets to the marketing department to capture and curate testimonials.</p>
                                    <div className="mt-6">
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            And of course, you can send updates on Slack when a new testimonial is received, With testimonial.to, you will all set when it comes to social proof for your business.</p>
                                        <div className="mt-6">
                                            <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try FREE now
                                            </Link>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                        <div className="my-auto lg:col-start-1">
                            <div className="p-4">
                                <Image loading="lazy" className="mt-10 mx-auto relative lg:mt-0 " src="/ag-2.jpg" height={540} width={540} alt="easy to manage" />
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <div className="flex flex-col items-center justify-center bg-slate-100">
                <div className="text-center py-10 w-2/3">
                    <h1 className="text-3xl font-bold text-black leading-relaxed">
                    Ready to improve your social proof?
                    </h1>
                    <h1 className="text-3xl font-bold text-black">Start your 7-day free trial


                    </h1>
                    <p className="mt-4 text-s text-gray-600 leading-8">Join hundreds of B2B companies using Testimonial to skyrocket conversions 👇


                    </p>
                    <div className="flex justify-center space-x-6 pt-8">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-110">COLLECT BUYER TESTIMONIAL</button>
                    </div>
                    <div><p className="text-gray-500 text-sm pt-3">7 days free trial, get started today!

                    </p></div>
                </div>
            </div>
        </div>
    )
}