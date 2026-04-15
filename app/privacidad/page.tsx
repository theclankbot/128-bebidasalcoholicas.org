import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacidad',
  description: 'Politica de privacidad de BebidasAlcoholicas.org.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Privacidad</span>
          </nav>
          <h1 className="display-md text-stone-50 mb-4">Privacidad</h1>
          <p className="text-stone-500 text-sm">Ultima actualizacion: abril de 2026</p>
        </div>
      </div>

      <section className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-6">
            <h2>Datos</h2>
            <p>El sitio no ofrece cuentas de usuario ni comercio directo. Solo puede usar analitica tecnica y anónima para mejorar contenido.</p>

            <h2>Cookies</h2>
            <p>Podemos usar cookies tecnicas y analiticas basicas. No se plantea aqui un uso publicitario propio.</p>

            <h2>Contacto</h2>
            <p>Para consultas sobre privacidad: hola@bebidasalcoholicas.org</p>
          </div>
        </div>
      </section>
    </>
  )
}
