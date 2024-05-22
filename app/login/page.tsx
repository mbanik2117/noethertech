import React from 'react'
import Link from 'next/link'
const login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl text-zinc-700 mb-4">Log In</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <Link href='/Signup'>
                <p className="text-xs text-zinc-600 mt-2">Don't have an Account? Please Sign Up</p>
                </Link>
            </form>
        </div>
  )
}

export default login