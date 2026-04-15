import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Informacion legal de BebidasAlcoholicas.org.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/aviso-legal' },
}

export default function AvisoLegalPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Aviso legal</span>
          </nav>
          <h1 className="display-md text-stone-50 mb-4">Aviso legal</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-6">
            <h2>Titularidad</h2>
            <p>BebidasAlcoholicas.org es un sitio editorial informativo sobre bebidas alcoholicas.</p>

            <h2>Objeto del sitio</h2>
            <p>El contenido tiene finalidad informativa y editorial. No constituye consejo medico ni servicio sanitario.</p>

            <h2>Responsabilidad</h2>
            <p>La informacion publicada es general. Cada lector debe valorar su contexto y consultar profesionales cuando corresponda.</p>

            <h2>Contacto</h2>
            <p>Para cuestiones legales o editoriales: hola@bebidasalcoholicas.org</p>
          </div>
        </div>
      </section>
    </>
  )
}
