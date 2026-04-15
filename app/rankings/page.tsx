import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByType } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Rankings de bebidas alcoholicas - Marcas con criterio',
  description:
    'Rankings editoriales de marcas y botellas por categoria, con foco en perfil, precio y uso real.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/rankings' },
}

const rankings = getArticlesByType('ranking')

export default function RankingsPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Rankings</span>
          </nav>
          <p className="label-accent mb-3">Rankings</p>
          <h1 className="display-lg text-stone-50 mb-6">Marcas con criterio real</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Listas utiles, no relleno. Cada entrada debe justificar por que entra y para quien encaja.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rankings.map((article) => (
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
