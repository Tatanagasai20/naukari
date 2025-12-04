// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Smart Naukri Profile Booster',
  description: 'Minimal resume analysis MVP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="w-full border-b bg-white">
          <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-lg">Smart Naukri Profile Booster</span>
            <a
              href="/upload"
              className="text-sm text-blue-600 hover:underline"
            >
              Upload Resume
            </a>
          </div>
        </nav>
        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
