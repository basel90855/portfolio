import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0a0a0a] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#c8ff00] rounded-lg flex items-center justify-center">
              <span className="text-[#0a0a0a] font-black text-xs">B</span>
            </div>
            <span className="font-bold text-[#f0f0f0] tracking-tight text-sm">Basel.dev</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-[#555]">
            {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#f0f0f0] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/basel-mohamed-khairy-b0247737b/', label: 'LinkedIn', external: true },
              { icon: <Mail size={16} />, href: 'mailto:baselmohamed9085@gmail.com', label: 'Email' },
              { icon: <Phone size={16} />, href: 'tel:+201000928094', label: 'Phone' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#c8ff00]/40 hover:text-[#c8ff00] transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[#333]">© 2026 Basel Mohamed. All rights reserved.</p>
          <p className="text-[11px] text-[#333]">Built with React + Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
