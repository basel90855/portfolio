import { useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  { src: '/shuttlego-4.png', alt: 'Landing Page',      title: 'Landing Page' },
  { src: '/shuttlego-2.png', alt: 'Available Trips',   title: 'Available Trips' },
  { src: '/shuttlego-1.png', alt: 'Login Screen',      title: 'Login Screen' },
  { src: '/shuttlego-3.png', alt: 'Driver Profile',    title: 'Driver Profile' },
  { src: '/shuttlego-2.png', alt: 'Trip Cards',        title: 'Trip Cards' },
  { src: '/shuttlego-4.png', alt: 'Home Screen',       title: 'Home Screen' },
]

function GalleryCard({ image, index, hoveredIndex, setHoveredIndex, totalImages }) {
  const middle = Math.floor(totalImages / 2)
  const distanceFromMiddle = Math.abs(index - middle)
  const baseOffset = 110 - distanceFromMiddle * 18
  const isHovered = hoveredIndex === index
  const anyHovered = hoveredIndex !== null
  const yOffset = isHovered ? -130 : anyHovered ? 0 : -baseOffset

  return (
    <motion.div
      className="flex-shrink-0 cursor-pointer"
      style={{ zIndex: totalImages - index }}
      initial={{ opacity: 0, transform: 'perspective(5000px) rotateY(-45deg) translateY(180px)' }}
      animate={{ opacity: 1, transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)` }}
      transition={{ duration: 0.22, delay: index * 0.055, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
    >
      <div
        className="relative rounded-xl overflow-hidden border border-[#2a2a2a] transition-transform duration-300 hover:scale-[1.03]"
        style={{
          width: '260px',
          aspectRatio: '16/10',
          background: '#111',
          boxShadow: 'rgba(0,0,0,0.08) 6px 0 12px 0, rgba(0,0,0,0.28) 20px 0 28px 0',
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          onError={(e) => { e.target.style.opacity = '0' }}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
            <span className="text-[10px] font-semibold text-[#c8ff00] tracking-widest uppercase">
              {image.title}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* Mobile marquee strip */
function MarqueeStrip() {
  return (
    <div className="flex overflow-hidden [--gap:12px] gap-[var(--gap)] py-2">
      {[0, 1].map((rep) => (
        <div
          key={rep}
          className="flex shrink-0 gap-[var(--gap)] animate-marquee"
          style={{ '--duration': '32s' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#111]"
              style={{ width: '200px', aspectRatio: '16/10' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => { e.target.style.opacity = '0' }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function PortfolioGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-8 mt-16">
      <div className="rounded-2xl border border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-10 pb-2 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00] font-semibold mb-3">
            ShuttleGo — Visual Showcase
          </p>
          <h3 className="text-xl font-black text-[#f0f0f0] tracking-tight">
            Designed with intention,{' '}
            <span className="text-[#c8ff00]">built with precision.</span>
          </h3>
        </div>

        {/* Desktop fan */}
        <div className="hidden md:block relative overflow-hidden" style={{ height: '340px' }}>
          <div
            className="flex items-end justify-center pb-0 pt-36"
            style={{ gap: '-260px', marginLeft: '-20px' }}
          >
            <div className="flex items-end justify-center" style={{ gap: '0px' }}>
              {images.map((img, i) => (
                <div key={i} style={{ marginRight: '-200px' }}>
                  <GalleryCard
                    image={img}
                    index={i}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    totalImages={images.length}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile marquee */}
        <div className="md:hidden px-4 py-6">
          <MarqueeStrip />
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-[#181818] flex items-center justify-between">
          <p className="text-[11px] text-[#333]">ShuttleGo · React · Local Shuttle Platform</p>
          <div className="flex gap-1">
            {images.slice(0, 4).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full transition-all duration-300"
                style={{ background: hoveredIndex === i ? '#c8ff00' : '#2a2a2a' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
