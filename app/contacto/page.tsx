import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacto editorial de BebidasAlcoholicas.org.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/contacto' },
}

export default function ContactoPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Contacto</span>
          </nav>
          <h1 className="display-md text-stone-50 mb-6">Contacto</h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            Para correcciones de datos, sugerencias editoriales o dudas sobre el sitio.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-prose">
          <div className="card p-8 rounded-xl">
            <p className="text-stone-300 leading-relaxed mb-6">
              Escribenos a <span className="text-amber-400 font-medium">hola@bebidasalcoholicas.org</span>
            </p>
            <div className="space-y-3 text-sm text-stone-400">
              <p>Usa este correo para:</p>
              <ul className="list-disc list-inside space-y-1.5">
                <li>Errores o datos desactualizados</li>
                <li>Sugerencias de temas</li>
                <li>Consultas sobre metodologia editorial</li>
                <li>Cuestiones de privacidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
