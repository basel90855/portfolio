import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const shuttleGoItems = [
  { id: 1, title: 'Landing Page',     desc: 'Live route status & hero section',      url: '/shuttlego-4.png', span: 'min-w-[22rem]' },
  { id: 2, title: 'Available Trips',  desc: 'Browse all active shuttle routes',       url: '/shuttlego-2.png', span: 'min-w-[18rem]' },
  { id: 3, title: 'Login Screen',     desc: 'Passenger & driver authentication',      url: '/shuttlego-1.png', span: 'min-w-[18rem]' },
  { id: 4, title: 'Driver Profile',   desc: 'Ratings, account & vehicle details',     url: '/shuttlego-3.png', span: 'min-w-[22rem]' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}

function ImageModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 16 }}
        className="relative w-full max-w-4xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-auto max-h-[88vh] rounded-2xl object-contain shadow-2xl"
        />
        <div className="absolute bottom-6 left-8 right-8">
          <p className="text-xs font-semibold text-[#c8ff00] tracking-widest uppercase">{item.title}</p>
          <p className="text-xs text-white/60 mt-0.5">{item.desc}</p>
        </div>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-5 top-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </motion.div>
  )
}

export function BentoGallery({ items = shuttleGoItems, title, description }) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [dragConstraint, setDragConstraint] = useState(0)
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const targetRef = useRef(null)

  useEffect(() => {
    const calc = () => {
      if (gridRef.current && containerRef.current) {
        const gap = containerRef.current.offsetWidth - gridRef.current.scrollWidth - 32
        setDragConstraint(Math.min(0, gap))
      }
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [items])

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15], [24, 0])

  return (
    <section ref={targetRef} className="relative w-full overflow-hidden py-12">
      {/* Header */}
      <motion.div style={{ opacity, y }} className="px-8 mb-10 text-center">
        {title && (
          <>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold mb-3">
              ShuttleGo — Visual Showcase
            </p>
            <h3 className="text-xl font-black text-[#f0f0f0] tracking-tight">
              {title}
            </h3>
          </>
        )}
        {description && (
          <p className="mt-2 text-sm text-[#555] max-w-md mx-auto">{description}</p>
        )}
      </motion.div>

      {/* Draggable grid */}
      <div
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.04}
          className="w-max"
        >
          <motion.div
            ref={gridRef}
            className="flex gap-4 px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                className={`group relative flex-shrink-0 ${item.span} h-56 rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#111] cursor-pointer`}
                style={{ minHeight: '224px' }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                  onError={(e) => { e.target.style.opacity = '0' }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Text reveal on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                </div>
                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Drag hint */}
      <p className="text-center text-[10px] text-[#2a2a2a] tracking-widest uppercase mt-5">
        Drag to explore · Click to enlarge
      </p>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
