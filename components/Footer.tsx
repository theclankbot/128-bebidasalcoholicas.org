import Link from 'next/link'

const bebidasLinks = [
  { label: 'Vodka', href: '/vodka' },
  { label: 'Whisky', href: '/whisky' },
  { label: 'Ron', href: '/ron' },
  { label: 'Vino', href: '/vino' },
  { label: 'Cerveza', href: '/cerveza' },
  { label: 'Tequila y Mezcal', href: '/tequila' },
  { label: 'Ginebra', href: '/ginebra' },
]

const editorialLinks = [
  { label: 'Comparativas', href: '/comparativas' },
  { label: 'Rankings', href: '/rankings' },
  { label: 'Guías de servicio', href: '/guias' },
  { label: 'Equivalencias y consumo', href: '/consumo' },
  { label: 'Consumo responsable', href: '/consumo-responsable' },
]

const legalLinks = [
  { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  { label: 'Fuentes y metodología', href: '/fuentes' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Aviso legal', href: '/aviso-legal' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-800 bg-stone-950 mt-20">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full flex-shrink-0" />
              <span className="font-serif text-base font-bold text-stone-100 leading-none">
                Bebidas<br />
                <span className="text-amber-400">Alcohólicas</span>
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed">
              Guía editorial de bebidas alcohólicas en español. Tipos, marcas,
              comparativas y consumo con criterio.
            </p>
          </div>

          {/* Bebidas */}
          <div>
            <p className="label text-stone-500 mb-4">Tipos de bebida</p>
            <ul className="space-y-2">
              {bebidasLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial */}
          <div>
            <p className="label text-stone-500 mb-4">Editorial</p>
            <ul className="space-y-2">
              {editorialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="label text-stone-500 mb-4">Información</p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-stone-800">
          <p className="text-xs text-stone-600 leading-relaxed max-w-3xl">
            El contenido de esta web es exclusivamente informativo y editorial. No sustituye el consejo médico,
            farmacológico ni de ningún profesional de la salud. El consumo de alcohol está desaconsejado
            durante el embarazo, para menores de edad y en combinación con determinados medicamentos.
            Consulta siempre a un profesional si tienes dudas sobre tu situación específica.
          </p>
          <p className="text-xs text-stone-700 mt-4">
            © {year} BebidasAlcoholicas.org — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
