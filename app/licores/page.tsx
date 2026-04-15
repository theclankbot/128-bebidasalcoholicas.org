import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Licores y digestivos - Aperitivos, amargos y dulces',
  description:
    'Guia base sobre licores: aperitivos, amargos, digestivos y perfiles dulces o herbaceos.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/licores' },
}

const groups = [
  {
    name: 'Aperitivos',
    desc: 'Aperol, Campari, vermut y otros perfiles amargos o citricos para antes de comer.',
  },
  {
    name: 'Dulces',
    desc: 'Amaretto, Kahlua o licores cremosos. Funcionan mejor cuando el contexto pide postre o mezcla.',
  },
  {
    name: 'Digestivos',
    desc: 'Chartreuse, Fernet, limoncello o grappa. El final importa mas que la potencia bruta.',
  },
]

export default function LicoresPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Licores y digestivos</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Licores y digestivos</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Un grupo enorme y heterogeneo: desde aperitivos ligeros hasta botellas densas, amargas o herbaceas.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groups.map((group) => (
              <div key={group.name} className="card p-5 rounded-xl">
                <h2 className="font-serif text-lg font-semibold text-stone-100 mb-2">{group.name}</h2>
                <p className="text-sm text-stone-400 leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
