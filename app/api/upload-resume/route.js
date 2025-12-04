// app/api/upload-resume/route.js
import { NextResponse } from 'next/server'
import pdf from 'pdf-parse'
import { extractSkills } from '@/utils/extractSkills'

export const runtime = 'nodejs'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const data = await pdf(buffer)
    const text = data.text || ''
    const skills = extractSkills(text)

    return NextResponse.json({ text, skills })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 })
  }
}
