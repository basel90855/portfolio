import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'baselmohamed9085@gmail.com',
    href: 'mailto:baselmohamed9085@gmail.com',
    color: '#c8ff00',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+20 100 092 8094',
    href: 'tel:+201000928094',
    color: '#88ff44',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'Basel Mohamed Khairy',
    href: 'https://www.linkedin.com/in/basel-mohamed-khairy-b0247737b/',
    color: '#0077b5',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:baselmohamed9085@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#c8ff00]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-8 bg-[#c8ff00]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold">Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-4"
            >
              Let's build{' '}
              <span className="text-[#c8ff00]">something great.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#666] text-lg leading-relaxed mb-10"
            >
              Have a project in mind? I'd love to hear about it. Send me a message
              and I'll get back to you as soon as possible.
            </motion.p>

            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={link.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-[#1e1e1e] bg-[#111] hover:border-[#c8ff00]/30 hover:bg-[#131313] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${link.color}15`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-[#444] uppercase tracking-widest mb-0.5">{link.label}</p>
                    <p className="text-xs text-[#777] group-hover:text-[#ccc] transition-colors duration-300 truncate">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-2 flex-shrink-0 text-[#333] group-hover:text-[#c8ff00] transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl border border-[#1e1e1e] bg-[#111] space-y-6"
            >
              <div>
                <label className="block text-xs text-[#555] uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] text-[#f0f0f0] text-sm placeholder-[#333] focus:outline-none focus:border-[#c8ff00]/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs text-[#555] uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] text-[#f0f0f0] text-sm placeholder-[#333] focus:outline-none focus:border-[#c8ff00]/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs text-[#555] uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] text-[#f0f0f0] text-sm placeholder-[#333] focus:outline-none focus:border-[#c8ff00]/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  sent
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-[#c8ff00] text-[#0a0a0a] hover:bg-[#d4ff33] hover:scale-[1.02]'
                }`}
              >
                {sent ? (
                  'Message sent! ✓'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
