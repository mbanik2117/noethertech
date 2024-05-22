import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-zinc-200 p-4">
        <button className="flex items-center bg-blue-500 text-white p-2 rounded-lg mb-4">
          <Link href="/contact">
            Contact Us
          </Link>
        </button>
      </div>

      <div className="w-3/4 flex flex-wrap justify-around p-4">
        {[
          { src: "/RAG.jpg", alt: "RAG", title: "RAG", href: "/rag" },
          { src: "/documentqa.jpg", alt: "Document Q&A", title: "Document Q&A", href: "/documentqa" },
          { src: "/ecommerce.jpg", alt: "Ecommerce", title: "ECommerce", href: "/ecommerce" },
          { src: "/automation.jpg", alt: "Automation", title: "Automation", href: "/automation" },
          { src: "/aiagent.jpg", alt: "AI Agent", title: "AI Agents", href: "/aiagent" },
          { src: "/bankinginsurance.jpg", alt: "Banking and Insurance", title: "Banking and Insurance", href: "/bankinginsurance" },
        ].map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Link href={product.href}>
              <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page