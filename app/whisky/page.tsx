import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByCategory } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Whisky - Estilos, servicio y lectura editorial',
  description:
    'Guia base sobre whisky: estilos principales, como servirlo y contenido publicado en el sitio.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/whisky' },
}

const whiskyArticles = getArticlesByCategory('whisky')

const whiskyStyles = [
  'Scotch: amplitud de perfiles, del ahumado al frutal.',
  'Bourbon: maiz, barrica nueva y un perfil mas dulce.',
  'Irish whiskey: mas accesible, mas redondo, menos humo.',
]

export default function WhiskyPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Whisky</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Whisky</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Un universo mas amplio que cualquier otro destilado popular. El origen y la barrica cambian todo.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whiskyStyles.map((style) => (
              <div key={style} className="card p-5 rounded-xl">
                <p className="text-sm text-stone-300 leading-relaxed">{style}</p>
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
              <h2 className="display-sm text-stone-100 mb-6">Como beberlo</h2>
              <div className="space-y-4 text-sm text-stone-400 leading-relaxed">
                <p><strong className="text-stone-100">Solo:</strong> la mejor forma de entender el perfil base.</p>
                <p><strong className="text-stone-100">Con unas gotas de agua:</strong> puede abrir aromas sin arruinar el conjunto.</p>
                <p><strong className="text-stone-100">En highball o coctel:</strong> muy valido cuando el whisky y el contexto lo piden.</p>
              </div>
            </div>
            <div className="card p-6 rounded-xl">
              <p className="label text-stone-500 mb-4">Referencia rapida</p>
              <div className="space-y-3 text-sm text-stone-400">
                <p>ABV habitual: 40% a 68%</p>
                <p>Crianza minima de Scotch: 3 anos</p>
                <p>Origenes clave: Escocia, EEUU, Irlanda, Japon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {whiskyArticles.length > 0 && (
        <>
          <div className="divider" />
          <section className="section">
            <div className="container-editorial">
              <h2 className="display-sm text-stone-100 mb-8">Guias y rankings de whisky</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whiskyArticles.map((article) => (
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
