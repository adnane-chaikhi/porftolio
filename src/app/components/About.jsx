'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../../public/me.jpeg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0f1117] text-green-400 font-mono px-6 py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* 📷 Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 border-4 border-green-500 rounded-xl overflow-hidden w-[350px] h-[500px] shadow-lg"
        >
          <Image src={profilePic} alt="Adnane Chaikhi" width={350} height={500} className="object-cover w-full h-full" />
        </motion.div>

        {/* 🧠 Developer Code Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#0e1015] border border-gray-800 rounded-lg p-6 md:p-10 text-base leading-relaxed"
        >
          <div className="text-lime-400 mb-4">// About Me</div>
          <div className="space-y-1">
            <div><span className="text-gray-500">1 </span>const <span className="text-lime-400">aboutMe</span> = &#123;</div>
            <div><span className="text-gray-500">2 </span>  name: <span className="text-yellow-300">"Adnane Chaikhi"</span>,</div>
            <div><span className="text-gray-500">3 </span>  role: <span className="text-yellow-300">"Fullstack Developer"</span>,</div>
            <div><span className="text-gray-500">4 </span>  location: <span className="text-yellow-300">"Morocco"</span>,</div>
            <div><span className="text-gray-500">5 </span>  stack: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"Tailwind"</span>, <span className="text-cyan-300">"Spring Boot"</span>],</div>
            <div><span className="text-gray-500">6 </span>  passion: <span className="text-yellow-300">"Building beautiful, fast UIs & solving real-world problems"</span>,</div>
            <div><span className="text-gray-500">7 </span>  links: &#123;</div>
            <div><span className="text-gray-500">8 </span>    linkedin: <span className="text-blue-400">"linkedin.com/in/yourprofile"</span>,</div>
            <div><span className="text-gray-500">9 </span>    github: <span className="text-blue-400">"github.com/yourprofile"</span>,</div>
            <div><span className="text-gray-500">10</span>    email: <span className="text-blue-400">"your@email.com"</span></div>
            <div><span className="text-gray-500">11</span>  &#125;</div>
            <div><span className="text-gray-500">12</span>&#125;</div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-5 text-2xl text-green-400">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-lime-400"><FaLinkedin /></a>
            <a href="https://github.com/yourprofile" target="_blank" className="hover:text-lime-400"><FaGithub /></a>
            <a href="mailto:your@email.com" className="hover:text-lime-400"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
