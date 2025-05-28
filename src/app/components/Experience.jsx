'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Affe',
    role: 'Frontend Developer',
    period: '2023 – Present',
    description: 'Built scalable React interfaces with Tailwind and Next.js, focused on performance and UI polish.',
  },
  {
    company: 'Sonegoce',
    role: 'Fullstack Developer',
    period: '2021 – 2023',
    description: 'Developed and deployed REST APIs with Spring Boot and integrated them into React apps.',
  },
  {
    company: 'CodeLab',
    role: 'Backend Developer',
    period: '2020 – 2021',
    description: 'Worked on scalable backend architecture, database modeling, and security protocols.',
  },
  {
    company: 'TechNest',
    role: 'Intern Developer',
    period: '2019 – 2020',
    description: 'Contributed to internal tools and automation scripts using Node.js and MongoDB.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0f1117] text-green-400 font-mono px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-lime-400 mb-10">// Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0e1015] border border-gray-800 p-6 rounded-lg shadow-md"
            >
              <p className="text-lime-400">// {exp.company}</p>
              <p className="text-lg text-green-300 font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
              <p className="text-sm text-green-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
