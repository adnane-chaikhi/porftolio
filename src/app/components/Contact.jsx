'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#0f1117] text-green-400 px-6 py-10 font-mono">
      <div className="max-w-4xl mx-auto border border-gray-800 bg-[#0e1015] rounded-lg shadow-xl overflow-hidden">
        {/* Top bar */}
        <div className="bg-[#1b1e25] text-gray-400 px-4 py-2 flex gap-2 items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-4 text-sm">contact.js</span>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 md:p-10 space-y-6 text-sm text-green-300"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block mb-1">// full name</label>
              <input
                type="text"
                placeholder="Adnane Chaikhi"
                className="w-full bg-[#101318] border border-green-700 px-4 py-3 rounded-md text-green-100 placeholder-green-500 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1">// email address</label>
              <input
                type="email"
                placeholder="codervdnane@gmail.com"
                className="w-full bg-[#101318] border border-green-700 px-4 py-3 rounded-md text-green-100 placeholder-green-500 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">// subject</label>
            <input
              type="text"
              placeholder="Say hello or propose a project"
              className="w-full bg-[#101318] border border-green-700 px-4 py-3 rounded-md text-green-100 placeholder-green-500 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1">// message</label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full bg-[#101318] border border-green-700 px-4 py-3 rounded-md text-green-100 placeholder-green-500 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-green-400 text-black font-bold py-3 px-6 rounded-md hover:bg-green-300 transition"
            >
              sendMessage();
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
