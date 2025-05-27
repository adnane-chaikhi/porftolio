'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiSpringboot, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-950 text-white px-6 py-24 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
