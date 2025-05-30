'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] text-gray-300 font-mono px-6 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT – Brand Info */}
        <div>
          <h3 className="text-lime-400 text-xl font-bold mb-2">Adnane Chaikhi</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Fullstack Developer passionate about building fast, accessible and modern web apps using React, Next.js, and Spring Boot.
          </p>
        </div>

        {/* CENTER – Site Links */}
        <div className="text-sm text-center md:text-left">
          <h4 className="text-lime-400 font-semibold mb-3">// Site Map</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-lime-300">Home</a></li>
            <li><a href="#about" className="hover:text-lime-300">About</a></li>
            <li><a href="#projects" className="hover:text-lime-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-lime-300">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT – Social Icons */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <h4 className="text-lime-400 font-semibold">// Connect</h4>
          <div className="flex gap-5 text-xl mt-2">
            <a href="https://www.linkedin.com/in/adnane-chaikhi/" target="_blank" className="hover:text-lime-300"><FaLinkedin /></a>
            <a href="mailto:codervdnane@gmail.com" className="hover:text-lime-300"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} — Designed & Built by Adnane Chaikhi
      </div>
    </footer>
  )
}
