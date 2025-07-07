'use client'

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 px-4">
      <div className="bg-white rounded-full p-6 shadow mb-6">
        <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" className="text-red-200" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">We're sorry, but an unexpected error has occurred. Please try again or return to the dashboard.</p>
      <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go to Home</Link>
    </div>
  );
}