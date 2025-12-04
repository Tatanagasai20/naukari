// app/upload/page.jsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UploadPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const file = e.target.file?.files?.[0]
    if (!file) {
      setError('Please select a PDF')
      return
    }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Upload failed')

      const data = await res.json()

      // Pass only minimal data through URL (MVP)
      const textSnippet = (data.text || '').slice(0, 300)
      const skills = data.skills || []

      const params = new URLSearchParams({
        text: textSnippet,
        skills: skills.join(','),
      })

      router.push(`/dashboard?${params.toString()}`)
    } catch (err) {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Upload your resume</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-md border bg-white p-4"
      >
        <input
          type="file"
          name="file"
          accept="application/pdf"
          className="block w-full text-sm text-gray-700"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? 'Analyzing…' : 'Upload & Analyze'}
        </button>
      </form>
    </div>
  )
}
