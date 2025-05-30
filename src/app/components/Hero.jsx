'use client'

import { Typewriter } from 'react-simple-typewriter'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const myName = "{adnane chaikhi} ";
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6"
    >
      <div className="text-center  w-full">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 w-full">
             Hi, I'm{' '}
          <span className="text-cyan-400">{myName}</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-300">
          <Typewriter
            words={[
              'Fullstack Developer',
              'React & Next.js Enthusiast',
              'Backend with Spring Boot',
              'Clean UI, Scalable Code',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-6 text-gray-400 text-md md:text-lg leading-relaxed">
          Passionate about building performant and elegant web apps from backend to frontend.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold text-white transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full font-semibold transition"
          >
            Contact Me <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
