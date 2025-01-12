"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function Features() {
    return (
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

                <div id="secon-section">
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
                <div id="secon-section">
                    <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>

                                <div className="pt-4">
                                    <div className="font-semibold text-xl text-purple-600 mb-2">
                                        <h2 className="text-xl font-semibold text-blue-600 mb-4">Embed a single video testimonial
                                        </h2>
                                    </div>
                                    <h3 className="h3 mb-3">
                                        <p className="text-3xl font-bold text-black mb-4"> Ad-free hosting for each video
                                        </p>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        For the video testimonial, you can embed it directly on your own website like this 👈. You don't need to use any 3rd-party Ad-free hosting service, e.g. Wistia, Vimeo.</p>
                                    <div className="mt-6">
                                        <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try it for free
                                        </Link>
                                    </div></div>
                            </div>
                        </div>
                        <div className="my-auto lg:col-start-1">
                            <div className="p-4">
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
            </section>
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
            <section>

            </section>
            <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                {/* Section */}
                <section className="py-10 px-4">
                    <div className="container mx-auto">
                        <div className="pt-10 justify-center text-center">
                            <div>
                                <h1 className="text-3xl text-black font-semibold">Everything you need to leverage</h1>
                                <h1 className="text-3xl text-black font-semibold">testimonials</h1>
                                <p className="text-l text-gray-600 pt-5">We support all these features for you to collect and manage all testimonials.</p>
                                <p className="text-l text-gray-600 ">Features with the lock are only available for the paid plans.</p>
                            </div>
                        </div>
                        {/* <h2 className="text-center text-3xl font-bold mb-8">Features</h2> */}
                        <div className="grid grid-cols-3 gap-6 pt-16">
                            {/* Card 1 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Dedicated page</h3>
                                <p className="text-gray-600 text-sm">
                                    For each of your businesses, it will have a dedicated space page with a unique link. Your customers can directly go there to submit a text or a video testimonial.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Embeddable Wall of Love</h3>
                                <p className="text-gray-600 text-sm">
                                    It's a page to show all your selected testimonials. You can even add the whole wall to your own site with an iframe embed code.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Dashboard page</h3>
                                <p className="text-gray-600 text-sm">
                                    You will have a dashboard page to manage all your spaces. You can add/update/remove the space as you want.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Video download</h3>
                                <p className="text-gray-600 text-sm">
                                    You will have access to download the video in the MP4 format with its original resolution.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Video embed</h3>
                                <p className="text-gray-600 text-sm">
                                    One-line embed code is available for each video. You can paste it in any no-code platform. We take care of all hosting and streaming.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-orange-500 text-2xl mb-4">🔒</div>
                                <h3 className="font-semibold text-lg mb-2">Your video message</h3>
                                <p className="text-gray-600 text-sm">
                                    You can add your own video in the space page. It's more personal and may help encourage customers to send you their best shoutouts.
                                </p>
                            </div>

                            {/* Card 7 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-orange-500 text-2xl mb-4">🔒</div>
                                <h3 className="font-semibold text-lg mb-2">Custom domain</h3>
                                <p className="text-gray-600 text-sm">
                                    You can add a custom domain for each space. The link can be personalized to your brand.
                                </p>
                            </div>

                            {/* Card 8 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Custom color</h3>
                                <p className="text-gray-600 text-sm">
                                    You can add a custom color for buttons to make it fit more into your design theme.
                                </p>
                            </div>

                            {/* Card 9 */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                                <div className="text-green-500 text-2xl mb-4">✔</div>
                                <h3 className="font-semibold text-lg mb-2">Dark or light theme</h3>
                                <p className="text-gray-600 text-sm">
                                    You can choose dark or light theme for the product page to better fit your design preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
                <div className="flex flex-col items-center justify-center">
            <div className="text-center py-10 w-2/3">
            <h1 className="text-5xl font-bold text-black leading-relaxed">
              Get testimonials for your</h1>
            <h1 className="text-5xl font-bold text-black">customer with ease
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-8">Collecting testimonials is hard, we get it!
              So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.</p>
            <div className="flex justify-center space-x-6 pt-8">
              <button className="bg-blue-600 text-white py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110">Try FREE now</button>
              <button className="text-black border transition-all duration-300 transform hover:scale-110 border-blue-600 rounded px-8 py-4">
                <div className="flex"><span className="pr-2">Talk to us</span>
                  <Image src="/1.png" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                  <Image src="/2.jpg" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                  <Image src="/3.png" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                  <Image src="/4.png" className="rounded-full" alt="avt1" height={15} width={20}></Image>
                </div></button>
            </div>
            <div><p className="text-gray-500 text-sm pt-3">Get started with free credits on us.<Link href="/pricing" className="underline text-gray-500 font-bold"> See our pricing →</Link></p></div>
          </div>
          </div>
        </div>
    )
}