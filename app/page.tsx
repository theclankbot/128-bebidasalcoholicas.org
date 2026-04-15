import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/lib/categories'
import { getArticleBySlug, getArticlesByType } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Bebidas Alcoholicas - Guia editorial en espanol',
  description:
    'Tipos de bebida, comparativas, rankings y guias practicas para entender que bebes y como se sirve.',
  alternates: { canonical: 'https://bebidasalcoholicas.org' },
}

const comparativas = getArticlesByType('comparativa')
const rankings = getArticlesByType('ranking').slice(0, 4)
const guias = getArticlesByType('guia').slice(0, 4)
const consumo = getArticleBySlug('cuantas-cervezas-equivalen-a-un-whisky')
const absorcion = getArticleBySlug('cuanto-tarda-en-subir-el-alcohol')

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black" />
        <div className="relative container-editorial py-24 md:py-32 lg:py-36">
          <div className="max-w-3xl">
            <p className="label-accent mb-6">Guia editorial de bebidas</p>
            <h1 className="display-xl text-stone-50 mb-6">
              Entiende que bebes.
            </h1>
            <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-10 max-w-2xl">
              Una web editorial en espanol sobre bebidas alcoholicas, servicio,
              comparativas y consumo con criterio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/vodka" className="btn-primary">Tipos de bebida</Link>
              <Link href="/comparativas" className="btn-ghost">Comparativas</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <p className="label-accent mb-2">Tipos de bebida</p>
          <h2 className="display-sm text-stone-100 mb-8">Explora por categoria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                description={category.shortDesc}
                href={`/${category.slug}`}
                articleCount={category.articleCount}
                abv={category.abv}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container-editorial">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="label-accent mb-2">Comparativas</p>
              <h2 className="display-sm text-stone-100">Diferencias utiles</h2>
            </div>
            <Link href="/comparativas" className="text-sm text-amber-500 hover:text-amber-400 hidden sm:block">
              Ver todas -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparativas.map((article) => (
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

      <div className="divider" />

      <section className="section">
        <div className="container-editorial">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="label-accent mb-2">Rankings</p>
              <h2 className="display-sm text-stone-100">Marcas con criterio</h2>
            </div>
            <Link href="/rankings" className="text-sm text-amber-500 hover:text-amber-400 hidden sm:block">
              Ver todos -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <div className="divider" />

      <section className="section">
        <div className="container-editorial">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="label-accent mb-2">Guias</p>
              <h2 className="display-sm text-stone-100">Servicio y contexto</h2>
            </div>
            <Link href="/guias" className="text-sm text-amber-500 hover:text-amber-400 hidden sm:block">
              Ver todas -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <div className="divider" />

      <section className="section bg-stone-900/30">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="label-accent mb-3">Consumo real</p>
              <h2 className="display-md text-stone-100 mb-6">Equivalencias y absorcion</h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                El efecto no depende solo de la bebida. Tambien importan el ABV, la racon,
                la velocidad y si has comido. Este bloque recoge las piezas practicas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/consumo" className="btn-primary">Abrir hub de consumo</Link>
                <Link href="/consumo-responsable" className="btn-ghost">Consumo responsable</Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {consumo && (
                <ArticleCard
                  type={consumo.type}
                  title={consumo.title}
                  excerpt={consumo.excerpt}
                  href={consumo.href}
                />
              )}
              {absorcion && (
                <ArticleCard
                  type={absorcion.type}
                  title={absorcion.title}
                  excerpt={absorcion.excerpt}
                  href={absorcion.href}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
