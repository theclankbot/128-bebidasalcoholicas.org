import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ginebra - Estilos y botanicos',
  description:
    'Guia base sobre ginebra: estilos, botanicos y maneras de distinguir perfiles muy distintos.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/ginebra' },
}

const styles = [
  'London Dry: eje claro de enebro y perfil seco.',
  'New Western: botanicos mas visibles y menos dominio del enebro.',
  'Old Tom y Navy Strength: estilos utiles cuando buscas mas contexto o mas potencia.',
]

export default function GinebraPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Ginebra</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Ginebra</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            El enebro es la base, pero el estilo puede moverse desde lo clasico hasta lo floral y contemporaneo.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {styles.map((style) => (
              <div key={style} className="card p-5 rounded-xl">
                <p className="text-sm text-stone-300 leading-relaxed">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
