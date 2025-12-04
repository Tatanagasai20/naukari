// app/dashboard/page.jsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const text = searchParams.get('text') || ''
  const skillsParam = searchParams.get('skills') || ''
  const skills = skillsParam ? skillsParam.split(',').filter(Boolean) : []

  const atsScore = 75 // simple placeholder score

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Resume overview</h1>

      {/* Extracted Text */}
      <section className="rounded-md border bg-white p-4 space-y-2">
        <h2 className="text-sm font-medium text-gray-800">
          Extracted text (first 300 characters)
        </h2>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {text || 'No text found'}
        </p>
      </section>

      {/* Extracted Skills */}
      <section className="rounded-md border bg-white p-4 space-y-2">
        <h2 className="text-sm font-medium text-gray-800">Extracted skills</h2>
        {skills.length ? (
          <ul className="flex flex-wrap gap-2 text-sm">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-100"
              >
                {s}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">
            No predefined skills detected.
          </p>
        )}
      </section>

      {/* ATS Score */}
      <section className="rounded-md border bg-white p-4 space-y-2">
        <h2 className="text-sm font-medium text-gray-800">
          ATS score (placeholder)
        </h2>
        <p className="text-2xl font-semibold text-green-600">{atsScore}%</p>
        <p className="text-xs text-gray-500">
          Placeholder score. Real ATS scoring logic can be added later.
        </p>
      </section>

      {/* Summary Placeholder */}
      <section className="rounded-md border bg-white p-4 space-y-2">
        <h2 className="text-sm font-medium text-gray-800">
          Summary (placeholder)
        </h2>
        <p className="text-sm text-gray-600">
          Coming soon: AI-generated summary and Naukri profile optimization tips.
        </p>
      </section>
    </div>
  )
}
