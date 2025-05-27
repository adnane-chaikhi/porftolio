'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../../public/me.jpeg' //
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl w-full">
        {/* 🖼️ Profile Image - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-[400px] h-[600px] overflow-hidden rounded-xl border-4 border-indigo-500 shadow-lg"
        >
          <Image
            src={profilePic}
            alt="Adnane Chaikhi"
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 📝 Text Content - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white max-w-xl"
        >
          <h2 className="text-5xl font-extrabold mb-4">About Me</h2>
          <h3 className="text-xl text-indigo-400 font-semibold mb-6">
            Adnane Chaikhi – Fullstack Developer
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I specialize in building fullstack applications using modern frameworks like
            <span className="text-indigo-400 font-medium"> React, Next.js, Tailwind CSS</span> and
            <span className="text-indigo-400 font-medium"> Spring Boot</span>. I’m passionate about clean code, fast UI, and solving real-world problems with software.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-gray-300">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-indigo-400 transition"><FaLinkedin /></a>
            <a href="https://github.com/yourprofile" target="_blank" className="hover:text-indigo-400 transition"><FaGithub /></a>
            <a href="mailto:your@email.com" className="hover:text-indigo-400 transition"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
