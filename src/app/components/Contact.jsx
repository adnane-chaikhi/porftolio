'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-950 text-green-400 px-6 py-24 font-mono">
      <div className="max-w-4xl mx-auto text-sm leading-relaxed">
        <motion.pre
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="whitespace-pre-wrap"
        >
{`1  const contact = {
2    title: "Get in Touch",
3    email: "you@example.com",
4    phone: "+212 6 12 34 56 78",
5    form: {
6      name: "<input type='text' placeholder='Your Name' />",
7      email: "<input type='email' placeholder='Your Email' />",
8      subject: "<input type='text' placeholder='Subject' />",
9      message: "<textarea placeholder='Your message'></textarea>"
10     <button>Send Message</button>
11   }
12 }`}
        </motion.pre>
      </div>
    </section>
  )
}
