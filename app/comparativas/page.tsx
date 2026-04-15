import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByType } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Comparativas de bebidas alcoholicas - Diferencias que importan',
  description:
    'Comparativas reales entre bebidas, estilos y usos. Menos opinion vaga y mas criterio practico.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/comparativas' },
}

const comparativas = getArticlesByType('comparativa')

export default function ComparativasPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Comparativas</span>
          </nav>
          <p className="label-accent mb-3">Comparativas</p>
          <h1 className="display-lg text-stone-50 mb-6">Diferencias que importan</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Comparamos bebidas por perfil, uso, servicio y contexto. No solo por fama o precio.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          {comparativas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {comparativas.map((article) => (
                <ArticleCard
                  key={article.slug}
                  type={article.type}
                  title={article.title}
                  excerpt={article.excerpt}
                  href={article.href}
                />
              ))}
            </div>
          ) : (
            <p className="text-stone-500 text-center py-12">Todavia no hay comparativas publicadas.</p>
          )}
        </div>
      </section>
    </>
  )
}
