import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ContainerScroll } from './ContainerScroll'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c8ff00]/4 blur-[140px] pointer-events-none" />
      {/* Accent dots */}
      <div className="absolute top-32 right-16 w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse-dot" />
      <div className="absolute top-52 left-12 w-1 h-1 rounded-full bg-[#c8ff00]/50 animate-pulse-dot" style={{ animationDelay: '1.2s' }} />

      {/* Push everything below the fixed navbar */}
      <div className="pt-20">
        <ContainerScroll
          titleComponent={
            <div className="relative z-10 px-6 pt-4">
              {/* Badge — sits comfortably below navbar, above headline */}
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-8">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8ff00]/30 bg-[#c8ff00]/5 text-[#c8ff00] text-[10px] font-semibold tracking-[0.2em] uppercase">
                  <Sparkles size={11} />
                  Available for Work
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.08)}
                className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-5"
              >
                <span className="text-[#f0f0f0]">Full-Stack</span>
                <br />
                <span className="text-[#c8ff00]">Developer</span>
                <br />
                <span className="text-[#f0f0f0]">&amp; Motion</span>
                <br />
                <span className="text-[#252525]">Designer</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                {...fadeUp(0.16)}
                className="max-w-xs mx-auto text-[#555] text-sm leading-relaxed mb-7"
              >
                I'm <span className="text-[#ccc] font-medium">Basel Mohamed</span> — complete
                web solutions from frontend to backend, with a motion edge.
              </motion.p>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.22)}
                className="flex items-center justify-center gap-3 mb-8"
              >
                <a
                  href="#projects"
                  className="group flex items-center gap-2 px-6 py-2.5 bg-[#c8ff00] text-[#0a0a0a] font-bold rounded-full hover:bg-[#d4ff33] transition-all duration-200 hover:scale-105 text-sm"
                >
                  View My Work
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 border border-[#2a2a2a] text-[#555] font-medium rounded-full hover:border-[#c8ff00]/30 hover:text-[#ccc] transition-all duration-200 text-sm"
                >
                  Get In Touch
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                {...fadeUp(0.28)}
                className="grid grid-cols-4 gap-2 max-w-xs mx-auto"
              >
                {[
                  { num: '2+', label: 'Years' },
                  { num: '10+', label: 'Projects' },
                  { num: '5+', label: 'Tech' },
                  { num: '100%', label: 'Focus' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-lg font-black text-[#c8ff00]">{s.num}</div>
                    <div className="text-[9px] text-[#383838] tracking-wider uppercase mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          }
        >
          {/* Card interior — hero photo */}
          <div className="w-full h-full relative">
            <img
              src="/hero-photo.png"
              alt="Basel Mohamed"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay with name tag */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold text-[#c8ff00] tracking-widest uppercase">Basel Mohamed</p>
              <p className="text-[11px] text-white/60 mt-0.5">Full-Stack Developer & Motion Designer</p>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}
