import Image from "next/image"
export default function Features(){
    return(
        <div className="flex-grow  pt-10">
            <section>
                <div className="flex flex-col justify-center items-center pt-32 ">
            <div className="justify-center items-center w-2/3">
                <h1 className="text-5xl font-bold text-center text-black leading-snug font-inter">
                    Collect and display testimonials all in one solution
                </h1>
            </div>
            </div>
            </section>
            <section>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 max-w-6xl mx-auto mt-10 w-full">
                    {/*Left Section */}
                    <div className="felx-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            Quick to setup
                        </h2>
                        <h2 className="text-3xl font-bold text-black mb-4">
                             A dedicated landing pages 
                        </h2>
                        <p className="text-gray-500 mb-6"> Create a dedicated landing page for your business. Share the page
                        link easily via email, social media, or even SMS. Setup can be done
                        in two minutes</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Try it for free</button>
                    </div>
                    <div className="felx-1 text-center md:text-left">
                    <div className="relative">
                        <Image src="/landing-page.png" alt="right image" width={800} height={597} className="w-full h-full"></Image>
                    </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}