import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByCategory } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Vino - Tipos, servicio y lectura editorial',
  description:
    'Guia base sobre vino: tipos, temperatura de servicio y articulos publicados.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/vino' },
}

const vinoArticles = getArticlesByCategory('vino')

const wineTypes = [
  'Tinto: mas cuerpo y mas tanino.',
  'Blanco: mas acidez, mas frescura y mas rango de servicio.',
  'Rosado y espumoso: categorias utiles cuando el contexto cambia.',
]

export default function VinoPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Vino</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Vino</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Uva, origen, crianza y temperatura. El vino se entiende mejor cuando se simplifica sin banalizar.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wineTypes.map((item) => (
              <div key={item} className="card p-5 rounded-xl">
                <p className="text-sm text-stone-300 leading-relaxed">{item}</p>
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
              <h2 className="display-sm text-stone-100 mb-6">Temperatura de servicio</h2>
              <div className="space-y-4 text-sm text-stone-400 leading-relaxed">
                <p><strong className="text-stone-100">Blancos:</strong> 8C a 12C segun cuerpo y crianza.</p>
                <p><strong className="text-stone-100">Tintos:</strong> 14C a 18C. Menos calor y mas precision.</p>
                <p><strong className="text-stone-100">Espumosos:</strong> frios de verdad para mantener filo y gas.</p>
              </div>
            </div>
            <div className="card p-6 rounded-xl">
              <p className="label text-stone-500 mb-4">Referencia rapida</p>
              <div className="space-y-3 text-sm text-stone-400">
                <p>ABV habitual: 10% a 16%</p>
                <p>Variables clave: uva, suelo, crianza</p>
                <p>Formatos utiles: copa corta, copa amplia, espumoso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {vinoArticles.length > 0 && (
        <>
          <div className="divider" />
          <section className="section">
            <div className="container-editorial">
              <h2 className="display-sm text-stone-100 mb-8">Rankings y guias de vino</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vinoArticles.map((article) => (
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
