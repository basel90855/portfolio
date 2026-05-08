import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Gamepad2, Bus } from 'lucide-react'
import { BentoGallery } from './BentoGallery'

const projects = [
  {
    id: 'shuttlego',
    title: 'ShuttleGo',
    subtitle: 'Local Shuttle Booking Platform',
    description:
      'A shuttle booking platform for Egyptian commuters with route browsing, live GPS tracking, driver profiles, and real-time seat availability.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    icon: <Bus size={20} />,
    color: '#c8ff00',
    year: '2024',
    type: 'Web Platform',
    highlights: ['Route browsing', 'Live GPS', 'Driver profiles', 'Seat booking'],
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    subtitle: 'Full-Stack Browser Game',
    description:
      'Browser-based Crossy Road remake with real-time collision detection, score tracking, and a Node.js + MySQL backend leaderboard.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MySQL'],
    icon: <Gamepad2 size={20} />,
    color: '#88ff44',
    year: '2024',
    type: 'Game + Backend',
    highlights: ['Collision detection', 'Score leaderboard', 'MySQL backend', 'Game physics'],
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
      className="group relative rounded-2xl border border-[#1e1e1e] bg-[#111] hover:border-[#c8ff00]/25 transition-all duration-500 overflow-hidden"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${project.color}12`, color: project.color }}
            >
              {project.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-[#f0f0f0]">{project.title}</h3>
                <span className="text-[9px] px-1.5 py-0.5 rounded border border-[#2a2a2a] text-[#444]">{project.year}</span>
              </div>
              <p className="text-[11px] text-[#444] mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <ArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c8ff00] mt-1 transition-colors duration-300" />
        </div>

        {/* Badge */}
        <span
          className="inline-block text-[9px] px-2.5 py-1 rounded-full font-semibold tracking-widest uppercase mb-3"
          style={{ background: `${project.color}12`, color: project.color }}
        >
          {project.type}
        </span>

        {/* Description */}
        <p className="text-[#5a5a5a] text-xs leading-relaxed mb-4">{project.description}</p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-[11px] text-[#4a4a4a]">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
              {h}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1a1a1a]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-full border border-[#222] text-[#555] hover:border-[#c8ff00]/25 hover:text-[#c8ff00] transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-5xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-6 bg-[#c8ff00]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-black tracking-tight mb-3"
        >
          Things I've <span className="text-[#c8ff00]">built.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#555] text-sm mb-10 max-w-md"
        >
          Real-world projects built with modern stacks, shipped with attention to detail.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* ShuttleGo bento gallery */}
      <BentoGallery
        title="Designed with intention, built with precision."
        description="Four screens from ShuttleGo — a live shuttle booking platform for Egyptian commuters."
      />
    </section>
  )
}
