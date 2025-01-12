"use client"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
export default function Home() {
  const length = "top:-5.5rem"
  return (
    <main className="flex-grow pb-10">
      <section>
        <div className="flex flex-col items-center justify-center bg-gray-30">
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
          <Image src="/chris.jpg" alt="chris" height={1786} width={1078} className="rounded shadow-lg h-full w-5/6"></Image>
          <div className="absolute hidden right-20 -top-[5.5rem] md:block ">
            <p className="text-gray-500">Our Customer Chris Lema</p>
          </div>
        </div>
        <section className="pt-20 items-center text-center">
          <div className="items-center flex text-center justify-center">
            <p className="text-gray-500 font-bold text-xl text-center">TRUSTED CUSTOMERS</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-5 pb-10 md:pb-20">
            <div className="col-span-1 flex justify-center">
              <Image src="/logos/1.png" alt="avt1" height={500} width={300} className="h-16 w-full"></Image></div>
            <div className="col-span-1 flex justify-center"><Image src="/2.jpg" className="rounded-full" alt="avt1" height={15} width={20}></Image></div>
            <div className="col-span-1 flex justify-center"><Image src="/3.png" className="rounded-full" alt="avt1" height={15} width={20}></Image></div>
            <div className="col-span-1 flex justify-center"><Image src="/4.png" className="rounded-full" alt="avt1" height={15} width={20}></Image></div>
          </div>
        </section>
      </section>
    </main>
  );
}
