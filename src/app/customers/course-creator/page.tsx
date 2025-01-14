import Link from 'next/link'
import Image from 'next/image'
export default function CourseCreator() {
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
                                        Finally, there's a better way to collect course testimonials
                                    </p>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    Tired of collecting and managing testimonials? Now you can collect and display testimonials automatically and sell more courses.


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
                                src="/more-social-proof.png"
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
                            We make it damn simple

                        </h1>
                        <p className="text-gray-700 mt-4">
                            You will have the best platform you need to handle testimonial collection,
                            easy to use for you and minimal friction for your students to submit their testimonials!
                        </p>
                    </div>
                    <div id="first-section">
                        <div className="lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            {/* Content Section */}
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
                                <div>
                                    <div className="pt-0">
                                        <div className="font-semibold text-xl text-purple-600 mb-2">
                                            <h2 className="text-xl  text-blue-500 mb-4">Collect</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">
                                                Turn word of mouth into social proof
                                            </p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Testimonial lets you collect social mentions, videos, and testimonials to display on your website all in one place.
                                        </p>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Instead of feeling overwhelmed. Stay on top of student shoutouts and put the words of raving fans on your website.
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
                                        src="/more-social-proof.png"
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
                                            <h2 className="text-xl font-semibold text-blue-600 mb-4">Display</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">Skyrocket your website conversions
                                            </p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Curate your testimonials into a high-converting wall-of-love to add to your website (with no-code) so you can save time adding testimonials to your website — skyrocket conversions — and focus on revenue-generating activities.</p>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 bg-orange-100">
                                            “I love how Testimonial showcases student feedback on my website – since installing <span className='font-bold'>it’s 3X’d my conversions</span>” - Justin Welsh

                                        </p>
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
                                            <h2 className="text-xl  text-blue-500 mb-4">Encourage</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">
                                                Make it easy for students to appreciate you
                                            </p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Platforms like Kajabi don't support testimonial collection. But you can add Testimonial to give students a place to leave feedback inside your course.
                                        </p>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Finally, stop “hoping” for students to leave testimonials — and send them to a dedicated page showing past videos for encouragement to collect high-converting social proof.
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
                                            <h2 className="text-xl font-semibold text-blue-600 mb-4">Automate</h2>
                                        </div>
                                        <h3 className="h3 mb-3">
                                            <p className="text-3xl font-bold text-black mb-4">Set and forget testimonial collection</p>
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            Embed the testimonial submission widget to your course so you never forget to ask your students to leave their testimonials — start building a library of testimonials to skyrocket course sales automatically.</p>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            This is how Justin automated the testimonial collecting process on Kajabi, just by embedding the submission widget at the end of his course. 👉</p>
                                        <div className="mt-6">
                                            <Link href="/pricing" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">Try FREE now
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
            <section>
                <div className="flex justify-center items-center min-h-screen bg-white">
                    <div className="max-w-2xl bg-yellow-50 p-8 rounded-lg shadow-md text-center">
                        {/* Image */}
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src="/avatar.jpg" // Replace with the actual image path
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Name and Role */}
                        <h3 className="text-lg font-semibold text-gray-800">
                            Andy McCotter-Bicknel, <span className="font-normal text-gray-600">Competitive Intel at ClickUp</span>
                        </h3>

                        {/* Testimonial */}
                        <p className="text-gray-700 mt-4">
                            "I've said it before and I'll say it again—Testimonial.to was the best investment I made when I built/marketed the course (The Competitive Playbook)."
                        </p>

                        {/* Document/Image */}
                        <div className="w-32 h-40 mx-auto mt-4">
                            <img
                                src="/ag-1.jpg" // Replace with the actual document/image path
                                alt="Document"
                                className="object-contain w-full h-full"
                            />
                        </div>

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
            <div className="flex flex-col items-center justify-center bg-slate-100">
                <div className="text-center py-10 w-2/3">
                    <h1 className="text-3xl font-bold text-black leading-relaxed">
                        Serious about scaling your course?
                    </h1>
                    <h1 className="text-3xl font-bold text-black">Try Testimonial 7 days free

                    </h1>
                    <p className="mt-4 text-s text-gray-600 leading-8">Join the leading creators using Testimonial to automate social proof and skyrocket course sales 👇

                    </p>
                    <div className="flex justify-center space-x-6 pt-8">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-110">COLLECT COURSE TESTIMONIAL</button>

                    </div>
                    <div><p className="text-gray-500 text-sm pt-3">7 days free trial, get started today!

                    </p></div>
                </div>
            </div>

        </div>
    )
}