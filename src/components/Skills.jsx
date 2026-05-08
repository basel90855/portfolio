import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    ],
  },
  {
    category: 'Backend & DB',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    category: 'Creative Tools',
    items: [
      { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
      { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
      { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
]

const expertiseSkills = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 78 },
  { name: 'Motion Design', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Database Design', level: 75 },
]

function SkillBar({ skill, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`flex items-center justify-between py-3.5 px-3 -mx-3 rounded-xl cursor-pointer transition-all duration-400 ${hovered ? 'bg-white/[0.03]' : ''}`}>
        <div className="flex items-center gap-3">
          <div className={`h-4 w-0.5 rounded-full transition-all duration-400 ${hovered ? 'bg-[#c8ff00] opacity-100' : 'opacity-0'}`} />
          <span className={`text-sm font-medium transition-all duration-400 ${hovered ? 'text-[#e0e0e0] translate-x-0' : 'text-[#4a4a4a] -translate-x-4'}`}>
            {skill.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-20 h-0.5 rounded-full bg-[#1e1e1e]">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#c8ff00]/70 to-[#c8ff00]"
              initial={{ width: 0 }}
              animate={{ width: hovered && inView ? `${skill.level}%` : '0%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: hovered ? 0.08 : 0 }}
            />
          </div>
          <span className={`text-xs font-mono w-8 text-right transition-all duration-400 ${hovered ? 'text-[#c8ff00] opacity-100' : 'opacity-0'}`}>
            {skill.level}%
          </span>
        </div>
      </div>
      {index < expertiseSkills.length - 1 && (
        <div className={`mx-3 h-px transition-all duration-300 ${hovered ? 'opacity-0' : 'bg-[#181818]'}`} />
      )}
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-5xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-6 bg-[#c8ff00]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold">Tech Stack & Skills</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Tech stack */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-black tracking-tight mb-8"
            >
              Tools I <span className="text-[#c8ff00]">master.</span>
            </motion.h2>

            <div className="space-y-6">
              {techStack.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * gi + 0.2 }}
                >
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#383838] mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#1e1e1e] bg-[#111] hover:border-[#c8ff00]/20 hover:bg-[#141414] transition-all duration-300 group cursor-default"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                        <span className="text-[11px] font-medium text-[#666] group-hover:text-[#ccc] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-4xl font-black tracking-tight mb-8"
            >
              My <span className="text-[#c8ff00]">expertise.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6 bg-[#1e1e1e]" />
                <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#383838]">Hover to reveal</span>
              </div>

              <div className="flex flex-col">
                {expertiseSkills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
