import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tequila y Mezcal - Dos lecturas del agave',
  description:
    'Guia base sobre tequila y mezcal: diferencias de materia prima, elaboracion y servicio.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/tequila' },
}

export default function TequilaPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Tequila y Mezcal</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Tequila y Mezcal</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Ambos vienen del agave, pero el proceso y el resultado final pueden ser muy distintos.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6 rounded-xl">
              <h2 className="display-sm text-stone-100 mb-4">Tequila</h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Se asocia al agave azul y a un perfil mas limpio. Blanco, reposado y anejo responden a tiempos de barrica y estilo de uso.
              </p>
            </div>
            <div className="card p-6 rounded-xl">
              <h2 className="display-sm text-stone-100 mb-4">Mezcal</h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Puede usar muchas variedades de agave y suele mostrar mas rusticidad, mas humo y mas identidad de productor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
