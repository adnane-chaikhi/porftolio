'use client'

import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaPhp,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiNextdotjs, SiSpringboot, SiMongodb,
  SiMysql, SiPostgresql
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-300" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'AWS', icon: <FaAws className="text-yellow-300" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-[60vh] bg-gray-950 px-6 py-24 flex flex-col items-center font-mono">
      <motion.h2
        className="text-4xl font-bold text-lime-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        // Tech Stack
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
