// utils/extractSkills.js

const SKILLS = [
  'AWS',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'React',
  'Node',
  'Python',
  'MongoDB',
]

export function extractSkills(text = '') {
  const upper = text.toUpperCase()
  return SKILLS.filter((skill) =>
    upper.includes(skill.toUpperCase())
  )
}
