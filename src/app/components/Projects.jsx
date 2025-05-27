'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaGlobe, FaTimes } from 'react-icons/fa'

const projects = [
  {
    title: 'Domposer',
    description: 'Website builder with Laravel and JS.',
    image: '/project1.png',
    demo: '#',
    github: '#',
  },
  {
    title: 'Bay.js',
    description: 'Web component library, CSP friendly.',
    image: '/project2.png',
    demo: '#',
    github: '#',
  },
  {
    title: 'Cookiemunch',
    description: 'Cookie consent plugin using SCSS.',
    image: '/project3.png',
    demo: '#',
    github: '#',
  },
]

export default function Projects() {
  const [lightboxImg, setLightboxImg] = useState(null)

  return (
    <section id="projects" className="min-h-screen bg-gray-950 text-white px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-cyan-400">My Work</h2>
        <p className="text-gray-400 mt-2">Click a project image to view in fullscreen.</p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl shadow-md hover:shadow-cyan-500/30 transition p-5 border border-gray-800 flex flex-col"
          >
            <div
              className="h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden cursor-pointer"
              onClick={() => setLightboxImg(project.image)}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            <div className="flex gap-4 mt-auto pt-4 text-xl">
              <a href={project.demo} target="_blank" className="text-gray-400 hover:text-cyan-400"><FaGlobe /></a>
              <a href={project.github} target="_blank" className="text-gray-400 hover:text-cyan-400"><FaGithub /></a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              src={lightboxImg}
              alt="project preview"
              className="max-w-4xl max-h-[90vh] rounded-xl shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-white text-2xl hover:text-red-400"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
