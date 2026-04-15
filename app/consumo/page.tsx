import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticleBySlug } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Consumo real - Equivalencias, absorcion y limites',
  description:
    'Guias practicas sobre equivalencias de alcohol, absorcion, ritmo de consumo y limites de interpretacion.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/consumo' },
}

const equivalenciasArticle = getArticleBySlug('cuantas-cervezas-equivalen-a-un-whisky')
const absorcionArticle = getArticleBySlug('cuanto-tarda-en-subir-el-alcohol')
const limitesArticle = getArticleBySlug('cuantos-tragos-de-vodka-para-emborracharse')

export default function ConsumoPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-editorial py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Consumo real</span>
          </nav>
          <p className="label-accent mb-3">Consumo real</p>
          <h1 className="display-lg text-stone-50 mb-6">Lo que cambia el efecto de verdad</h1>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed">
            Volumen, graduacion, ritmo de ingesta, comida y tolerancia. El alcohol no se entiende
            por intuicion. Aqui concentramos las piezas practicas para comparar bebidas y situar
            mejor sus efectos.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="display-sm text-stone-100 mb-6">Principios basicos</h2>
              <div className="space-y-4 text-sm text-stone-400 leading-relaxed">
                <p>
                  <strong className="text-stone-100">No compares por volumen:</strong> una cerveza y
                  un whisky se comparan por gramos de alcohol puro, no por el tamano del vaso.
                </p>
                <p>
                  <strong className="text-stone-100">El pico llega tarde:</strong> muchas personas
                  se pasan porque siguen bebiendo antes de notar el efecto completo de la racion anterior.
                </p>
                <p>
                  <strong className="text-stone-100">La comida importa:</strong> con el estomago vacio,
                  la absorcion suele ser mas rapida y mas intensa.
                </p>
                <p>
                  <strong className="text-stone-100">La tolerancia engana:</strong> cambia la percepcion
                  subjetiva, pero no elimina la carga fisiologica ni el deterioro del juicio.
                </p>
              </div>
            </div>

            <div className="card p-6 rounded-xl">
              <p className="label text-stone-500 mb-4">Referencia rapida</p>
              <div className="space-y-3 text-sm">
                {[
                  ['Cerveza 330 ml al 5%', '~13 g de alcohol puro'],
                  ['Whisky 40 ml al 40%', '~13 g de alcohol puro'],
                  ['Vodka 40 ml al 40%', '~13 g de alcohol puro'],
                  ['Vino 150 ml al 13%', '~15,5 g de alcohol puro'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 border-b border-stone-800 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-stone-300">{label}</span>
                    <span className="font-mono text-amber-400">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-600 mt-4">
                En Espana, 1 UBE equivale a 10 g de alcohol puro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container-editorial">
          <p className="label-accent mb-2">Guias practicas</p>
          <h2 className="display-sm text-stone-100 mb-8">Equivalencias y absorcion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {equivalenciasArticle && (
              <ArticleCard
                type={equivalenciasArticle.type}
                title={equivalenciasArticle.title}
                excerpt={equivalenciasArticle.excerpt}
                href={equivalenciasArticle.href}
              />
            )}
            {absorcionArticle && (
              <ArticleCard
                type={absorcionArticle.type}
                title={absorcionArticle.title}
                excerpt={absorcionArticle.excerpt}
                href={absorcionArticle.href}
              />
            )}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-sm">
        <div className="container-editorial">
          <div className="flex items-start gap-5 p-6 bg-stone-900/50 border border-stone-800 rounded-xl">
            <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-stone-200 mb-2">Limites y riesgo</h2>
              <p className="text-sm text-stone-400 leading-relaxed mb-4 max-w-2xl">
                Algunas consultas sobre cantidad o embriaguez exigen contexto prudente. Aqui se tratan
                como informacion general, no como instrucciones ni consejo medico.
              </p>
              {limitesArticle && (
                <ArticleCard
                  type={limitesArticle.type}
                  title={limitesArticle.title}
                  excerpt={limitesArticle.excerpt}
                  href={limitesArticle.href}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
