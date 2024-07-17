"use client";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noether Tech - AI Business Analytics & Software Solutions</title>
        <meta name="description" content="Noether Tech is an AI software company providing advanced AI business analytics and software solutions to enhance user flow and increase conversion rates. Explore our Free Tier, Pro, Premium, and Ultimate packages." />
        <meta name="keywords" content="Noether Tech, AI software, AI business analytics, software solutions, AI technology, business software, increase conversion, user flow" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <section className="bg-gray-900 text-white w-full">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Enhance Business with AI.

                <span className="sm:block"> Drive Growth with Noether Tech. </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Noether Tech offers advanced AI business analytics and software solutions to help you understand user flow and increase conversion rates.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto flex flex-wrap justify-center mt-12">
          {['Free Tier', 'Pro', 'Premium', 'Ultimate'].map((tier, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/ai.jpg"
                  alt={`AI Software Solution ${tier}`}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black">{tier}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
