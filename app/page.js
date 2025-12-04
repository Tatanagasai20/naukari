// app/page.js
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Boost your Naukri profile in minutes</h1>
      <p className="text-sm text-gray-600">
        Upload your resume PDF and instantly see extracted skills and a quick ATS-style overview.
      </p>

      <Link
        href="/upload"
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  )
}
