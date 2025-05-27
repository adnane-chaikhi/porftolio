'use client'

import useScrollSpy from '../hooks/useScrollSpy'

const sections = ['home', 'about', 'skills', 'projects', 'contact']

export default function ScrollTimeline() {
  const active = useScrollSpy(sections)

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden md:flex flex-col items-center gap-20 z-50">
      {sections.map((section) => (
        <div key={section} className="flex flex-col items-center">
          <div
            className={`w-3 h-3 rounded-full border-2 ${
              active === section ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
            }`}
          />
          <span
            className={`text-xs mt-1 uppercase tracking-wide ${
              active === section ? 'text-blue-500 font-bold' : 'text-gray-400'
            }`}
          >
            {section}
          </span>
        </div>
      ))}

      {/* Vertical line */}
      <div className="absolute top-0 left-1/2 h-full w-px bg-gray-500 -z-10" />
    </div>
  )
}
