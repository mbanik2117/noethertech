"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full h-1/3 mb-12">
          <Image
            src="/banner.jpg"
            alt="Banner"
            layout="responsive"
            width={1200}
            height={400} // Adjust height as necessary to achieve the desired aspect ratio
            className="object-cover"
          />
        </div>
        <div className="container mx-auto flex flex-wrap justify-center mt-12">
          {['Free Tier', 'Pro', 'Premium', 'Ultimate'].map((tier, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/ai.jpg"
                  alt={`Product ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{tier}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
