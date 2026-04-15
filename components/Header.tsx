'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  {
    label: 'Tipos de bebida',
    href: '/vodka',
    children: [
      { label: 'Vodka', href: '/vodka' },
      { label: 'Whisky', href: '/whisky' },
      { label: 'Ron', href: '/ron' },
      { label: 'Vino', href: '/vino' },
      { label: 'Cerveza', href: '/cerveza' },
      { label: 'Tequila y Mezcal', href: '/tequila' },
      { label: 'Ginebra', href: '/ginebra' },
      { label: 'Licores y digestivos', href: '/licores' },
    ],
  },
  { label: 'Comparativas', href: '/comparativas' },
  { label: 'Rankings', href: '/rankings' },
  { label: 'Guías', href: '/guias' },
  { label: 'Consumo real', href: '/consumo' },
  { label: 'Consumo responsable', href: '/consumo-responsable' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-stone-800">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="w-1.5 h-6 bg-amber-500 rounded-full flex-shrink-0 group-hover:h-8 transition-all duration-200" />
            <span className="font-serif text-lg font-bold text-stone-100 tracking-tight leading-none">
              Bebidas<br />
              <span className="text-amber-400">Alcohólicas</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="label text-stone-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                    {item.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-stone-900 border border-stone-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="label text-stone-400 hover:text-amber-400 transition-colors duration-150"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-stone-400 hover:text-stone-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800">
          <nav className="container-editorial py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="label px-3 py-2 text-stone-500">{item.label}</p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-stone-300 hover:text-amber-400 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="label px-3 py-2 text-stone-400 hover:text-amber-400 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
