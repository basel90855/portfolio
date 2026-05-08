import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Layers, Zap, Globe } from 'lucide-react'

const cards = [
  { icon: <Code2 size={18} />, title: 'Full-Stack Dev', desc: 'React, Angular, Node.js, MySQL — end to end.' },
  { icon: <Layers size={18} />, title: 'Motion Design', desc: 'After Effects, Premiere Pro & Illustrator.' },
  { icon: <Zap size={18} />, title: 'Modern Stack', desc: 'Latest libraries for performance & scale.' },
  { icon: <Globe size={18} />, title: 'Business-Focused', desc: 'Delivering results on time, every time.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c8ff00] to-transparent" />

      <div className="max-w-5xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-6 bg-[#c8ff00]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-5"
            >
              Building the web,{' '}
              <span className="text-[#c8ff00]">frame by frame.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-[#666] text-sm leading-7 mb-5"
            >
              I'm <span className="text-[#bbb] font-medium">Basel</span>, a Full-Stack Developer
              and Motion Graphics Designer. I build complete web solutions — from
              polished frontends to solid backends — that help businesses stand out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-[#555] text-sm leading-7 mb-8"
            >
              My motion-graphics background in After Effects, Premiere Pro, and
              Illustrator means every project gets a visual edge — not just working
              code, but work that <em className="text-[#888] not-italic">looks</em> great.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <a href="#contact" className="px-5 py-2.5 bg-[#c8ff00] text-[#0a0a0a] font-bold rounded-full text-sm hover:bg-[#d4ff33] transition-all duration-200 hover:scale-105">
                Work Together
              </a>
              <a href="#projects" className="px-5 py-2.5 border border-[#2a2a2a] text-[#666] font-medium rounded-full text-sm hover:border-[#c8ff00]/30 hover:text-[#ccc] transition-all duration-200">
                See Projects
              </a>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i + 0.2 }}
                className="p-4 rounded-2xl border border-[#1e1e1e] bg-[#111] hover:border-[#c8ff00]/20 hover:bg-[#131313] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center text-[#c8ff00] mb-3 group-hover:bg-[#c8ff00]/15 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xs font-bold text-[#e0e0e0] mb-1">{card.title}</h3>
                <p className="text-[11px] text-[#555] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
