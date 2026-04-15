import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByCategory } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Ron - Estilos, servicio y contexto',
  description:
    'Guia base sobre ron: estilos, usos y contenido editorial publicado.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/ron' },
}

const ronArticles = getArticlesByCategory('ron')

const ronNotes = [
  'Ron blanco: mas util para cocteleria clasica.',
  'Ron anejo: mas barrica, mas peso y mas lectura en boca.',
  'Rhum agricole y cachaca: la cana manda mas que la madera.',
]

export default function RonPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Ron</span>
          </nav>
          <p className="label-accent mb-3">Tipos de bebida</p>
          <h1 className="display-lg text-stone-50 mb-6">Ron</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Un destilado de cana con mas variedad de la que suele admitir su reputacion popular.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ronNotes.map((note) => (
              <div key={note} className="card p-5 rounded-xl">
                <p className="text-sm text-stone-300 leading-relaxed">{note}</p>
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
                <p><strong className="text-stone-100">Solo:</strong> funciona mejor en rones anejos con estructura real.</p>
                <p><strong className="text-stone-100">En coctel:</strong> Mojito, Daiquiri y Cuba Libre siguen siendo utiles si el ron encaja.</p>
                <p><strong className="text-stone-100">Con mezclador:</strong> el estilo del ron importa mas de lo que parece.</p>
              </div>
            </div>
            <div className="card p-6 rounded-xl">
              <p className="label text-stone-500 mb-4">Referencia rapida</p>
              <div className="space-y-3 text-sm text-stone-400">
                <p>ABV habitual: 37.5% a 55%</p>
                <p>Base: melaza o jugo de cana</p>
                <p>Origenes clave: Caribe y Latinoamerica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {ronArticles.length > 0 && (
        <>
          <div className="divider" />
          <section className="section">
            <div className="container-editorial">
              <h2 className="display-sm text-stone-100 mb-8">Guias y rankings de ron</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ronArticles.map((article) => (
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
