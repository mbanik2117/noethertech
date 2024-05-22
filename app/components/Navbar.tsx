"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-zinc-900 text-white">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/ai.jpg" alt="Logo" width={50} height={50} className="mr-4" />
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-800 text-white px-4 py-2 rounded-l-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <Link href="/products" className="mr-4">
          Products
        </Link>
        <Link href="/mission" className="mr-4">
          Mission
        </Link>
        <Link href="/login" className="mr-4">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
