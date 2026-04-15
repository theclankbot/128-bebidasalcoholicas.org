import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByCategory } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Vodka - Tipos, servicio y marcas',
  description:
    'Guia base sobre vodka: estilos, temperatura, servicio y piezas editoriales publicadas.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/vodka' },
}

const vodkaArticles = getArticlesByCategory('vodka')

const vodkaStyles = [
  {
    name: 'Vodka de cereal',
    desc: 'Mas seco y lineal. Suele ser la base del vodka global de corte neutro.',
  },
  {
    name: 'Vodka de patata',
    desc: 'Mas cuerpo y mas textura. El cambio se nota sobre todo cuando se bebe solo.',
  },
  {
    name: 'Vodka para coctel',
    desc: 'Aqui importa la limpieza, no solo el precio. La mezcla manda mas que el lujo.',
  },
]

export default function VodkaPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Vodka</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Vodka</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Un destilado mas variado de lo que parece. La base, la temperatura y el uso cambian mucho la experiencia.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vodkaStyles.map((style) => (
              <div key={style.name} className="card p-5 rounded-xl">
                <h2 className="font-serif text-lg font-semibold text-stone-100 mb-2">{style.name}</h2>
                <p className="text-sm text-stone-400 leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="display-sm text-stone-100 mb-6">Como se sirve</h2>
              <div className="space-y-4 text-sm text-stone-400 leading-relaxed">
                <p><strong className="text-stone-100">Muy frio:</strong> suaviza la percepcion del alcohol y favorece la textura.</p>
                <p><strong className="text-stone-100">Solo o con hielo:</strong> ideal para notar diferencias de base y cuerpo.</p>
                <p><strong className="text-stone-100">En coctel:</strong> la neutralidad lo vuelve util, pero no todos los vodkas funcionan igual.</p>
              </div>
            </div>
            <div className="card p-6 rounded-xl">
              <p className="label text-stone-500 mb-4">Referencia rapida</p>
              <div className="space-y-3 text-sm text-stone-400">
                <p>ABV habitual: 37.5% a 50%</p>
                <p>Racion comun: 40 ml</p>
                <p>Origenes clave: Polonia, Suecia, Rusia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {vodkaArticles.length > 0 && (
        <>
          <div className="divider" />
          <section className="section">
            <div className="container-editorial">
              <h2 className="display-sm text-stone-100 mb-8">Guias y rankings de vodka</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vodkaArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    type={article.type}
                    title={article.title}
                    excerpt={article.excerpt}
                    href={article.href}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
