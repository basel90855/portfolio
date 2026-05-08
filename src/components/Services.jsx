import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Palette, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Globe size={22} />,
    num: '01',
    title: 'Full-Stack Development',
    desc: 'Complete websites with Frontend and Backend, well-structured for easy future updates.',
    features: ['React / Angular', 'Node.js API', 'MySQL / MSSQL', 'Deployment Ready'],
    color: '#c8ff00',
  },
  {
    icon: <Palette size={22} />,
    num: '02',
    title: 'UI/UX Interface Design',
    desc: 'Modern responsive interfaces that work across all devices with a seamless user experience.',
    features: ['Responsive Design', 'Mobile-First', 'Accessibility', 'Clean UX'],
    color: '#88ff44',
  },
  {
    icon: <Zap size={22} />,
    num: '03',
    title: 'Modern Libraries & Tech',
    desc: 'Latest React and Node.js libraries for high performance, scalability, and flexibility.',
    features: ['React 18+', 'Framer Motion', 'RESTful APIs', 'Optimized Build'],
    color: '#aaff00',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-[#0d0d0d] relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c8ff00] to-transparent" />

      <div className="max-w-5xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-6 bg-[#c8ff00]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold">Services</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-end mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-black tracking-tight leading-tight"
          >
            What I can do{' '}
            <span className="text-[#c8ff00]">for you.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[#555] text-sm leading-relaxed"
          >
            From blank canvas to deployed product — every layer handled with a designer's eye.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.25 }}
              className="group relative p-6 rounded-2xl border border-[#1e1e1e] bg-[#111] hover:border-[#c8ff00]/20 hover:bg-[#121212] transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}06 0%, transparent 70%)` }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}10`, color: service.color }}
              >
                {service.icon}
              </div>

              <span className="text-[10px] font-mono text-[#2d2d2d] mb-1.5 block">{service.num}</span>
              <h3 className="text-sm font-black text-[#e0e0e0] mb-2 leading-snug">{service.title}</h3>
              <p className="text-[#4a4a4a] text-xs leading-relaxed mb-5">{service.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-[11px] text-[#444]">
                    <div className="w-0.5 h-0.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#181818]">
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-medium text-[#333] hover:text-[#c8ff00] transition-colors duration-300"
                >
                  Get started
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
