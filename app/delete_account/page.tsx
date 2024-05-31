// pages/delete_account.tsx
"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  appName: string;
}

export default function DeleteAccount() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    appName: 'InstaCommerce',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can handle the form submission, e.g., send the data to the server
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Delete Account - Instaproperty</title>
      </Head>
      <main className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Delete Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="appName" className="block text-sm font-medium text-gray-700">
              App Name
            </label>
            <select
              name="appName"
              id="appName"
              value={formData.appName}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="InstaCommerce">InstaCommerce</option>
              <option value="Instaproperty">Instaproperty</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete Account
          </button>
        </form>
      </main>
    </div>
  );
}
