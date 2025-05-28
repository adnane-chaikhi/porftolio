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
    <section id="projects" className="min-h-screen bg-[#0f1117] text-green-400 font-mono px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-lime-400 mb-10">// Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0e1015] border border-green-700 p-5 rounded-xl shadow-lg space-y-4"
            >
              {/* Preview Image */}
              <div
                className="h-48 bg-black border border-green-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setLightboxImg(project.image)}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Project Content */}
              <div>
                <p className="text-lime-400 text-sm">// {project.title}</p>
                <p className="text-green-200 text-sm">{project.description}</p>
              </div>

              {/* Links */}
              <div className="flex gap-4 text-xl text-green-300 pt-2">
                <a href={project.demo} target="_blank" className="hover:text-lime-300">
                  <FaGlobe />
                </a>
                <a href={project.github} target="_blank" className="hover:text-lime-300">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
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
              className="max-w-4xl max-h-[90vh] rounded-xl shadow-2xl"
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
