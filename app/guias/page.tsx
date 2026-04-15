import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByType } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Guias de bebidas alcoholicas - Servicio, ritmo y contexto',
  description:
    'Guias practicas sobre servicio, temperatura, ritmo de consumo y errores comunes al beber.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/guias' },
}

const guias = getArticlesByType('guia')

export default function GuiasPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Guias</span>
          </nav>
          <p className="label-accent mb-3">Guias practicas</p>
          <h1 className="display-lg text-stone-50 mb-6">Como se bebe mejor</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Temperatura, vaso, mezcladores, tiempo y contexto. Lo practico antes que el postureo.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guias.map((article) => (
              <ArticleCard
                key={article.slug}
                type={article.type}
                title={article.title}
                excerpt={article.excerpt}
                href={article.href}
                category={article.categorySlug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
