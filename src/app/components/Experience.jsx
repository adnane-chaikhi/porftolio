'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Affe',
    role: 'Frontend Developer',
    period: '2022',
    description: 'Developed a modern and responsive website for Affe, a non-profit supporting children and women, using React and Tailwind CSS.',
  },
  {
    company: 'Sonegoce',
    role: 'Fullstack Developer',
    period: '2023– 2024',
    description: 'Built a custom WordPress website for Sonegoce, a lighting company, including tailored plugins with PHP and advanced CSS/JS customizations.',
  },
  {
    company: 'Azuuuca',
    role: 'Fullstack Developer',
    period: '2024',
    description: 'Developed a fullstack travel booking platform for Azuuuca (France) using PHP, MySQL, HTML, Tailwind CSS, JavaScript, and Git. The project included a dynamic homepage and an admin dashboard to manage bookings, trips, and client data.',
  },
  {
    company: 'Greenam',
    role: 'Fullstack Developer',
    period: '2024',
    description: 'Led the development of a responsive website for GREENAM, a solar energy company. Implemented dynamic features to boost user engagement, ensured performance and security compliance, and collaborated with cross-functional teams. Tech stack: PHP, MySQL, JS, HTML5, CSS3, SASS, WordPress..',
  },
  {
    company: 'WORK IT ALL ',
    role: 'Fullstack Developer',
    period: '2025',
    description: "Built a custom dashboard to manage employees, vehicles, and car-related billing, streamlining operations for a construction/services company. Also enhanced the companywebsite (www.workitall.ma) for better functionality and UX.Tech stack: PHP, MySQL, JavaScript, HTML5, CSS3, Bootstrap",
  }
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
