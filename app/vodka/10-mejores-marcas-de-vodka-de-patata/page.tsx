import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Las 10 mejores marcas de vodka de patata',
  description:
    'Ranking de los mejores vodkas de patata: Chopin, Luksusowa, Chase y más. Con perfil de sabor, precio y para quién encaja cada uno.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/vodka/10-mejores-marcas-de-vodka-de-patata' },
}

const marcas = [
  {
    posicion: 1,
    nombre: 'Chopin',
    origen: 'Polonia',
    abv: '40%',
    precio: '€€€',
    perfil: 'Cremoso, denso, con un dulzor terroso limpio. El referente del estilo. Sin aristas.',
    paraQuien: 'Para tomarlo solo y apreciar qué es el vodka de patata de verdad.',
    nota: 'Hay una versión de centeno y otra de trigo del mismo productor. La de patata es la estrella.',
  },
  {
    posicion: 2,
    nombre: 'Luksusowa',
    origen: 'Polonia',
    abv: '40%',
    precio: '€',
    perfil: 'Suave, limpio, algo más ligero que el Chopin. Excelente relación calidad-precio.',
    paraQuien: 'La opción honesta si quieres vodka de patata sin gastarte 40€. Sorprende bien.',
    nota: 'Una de las mejores relaciones calidad-precio de toda la categoría.',
  },
  {
    posicion: 3,
    nombre: 'Chase Potato Vodka',
    origen: 'Reino Unido',
    abv: '40%',
    precio: '€€€',
    perfil: 'Patata inglesa Herefordshire. Perfil suave, con un punto más afrutado que los polacos.',
    paraQuien: 'Para quien quiere explorar el estilo de patata fuera de Polonia.',
    nota: 'Destilería familiar. Hacen ellos mismos el proceso desde la patata hasta el embotellado.',
  },
  {
    posicion: 4,
    nombre: 'Karlsson\'s Gold',
    origen: 'Suecia',
    abv: '40%',
    precio: '€€€',
    perfil: 'Hecho con patatas nuevas de cosecha única. Perfil vegetal-fresco, muy reconocible.',
    paraQuien: 'Para cata comparativa. Muy distinto a los polacos. Interesante si buscas algo diferente.',
    nota: 'Usa patatas sin pelar. El perfil es más robusto y con más carácter de la propia patata.',
  },
  {
    posicion: 5,
    nombre: 'Boyd & Blair',
    origen: 'EE.UU.',
    abv: '40%',
    precio: '€€€',
    perfil: 'Pequeño lote artesanal. Sorprendentemente suave para ser americano. Muy limpio.',
    paraQuien: 'Amantes del craft que quieren explorar el estilo de patata en versión norteamericana.',
    nota: 'Ha ganado varios premios internacionales. Difícil de encontrar fuera de EE.UU.',
  },
  {
    posicion: 6,
    nombre: 'Vesper',
    origen: 'Polonia',
    abv: '40%',
    precio: '€€',
    perfil: 'Patata + centeno. Textura media, muy versátil. Más accesible en precio que el Chopin.',
    paraQuien: 'Para cócteles que quieren el carácter de patata sin el precio premium.',
    nota: 'Mezcla de bases que equilibra lo mejor de los dos estilos.',
  },
  {
    posicion: 7,
    nombre: 'Tater',
    origen: 'EE.UU.',
    abv: '40%',
    precio: '€€',
    perfil: 'Patata de Idaho. Suave, algo dulce, perfil clásico del estilo americano.',
    paraQuien: 'Alternativa americana accesible. Buena base para cócteles.',
    nota: 'Idaho es conocido por sus patatas de calidad. El vodka lo refleja.',
  },
  {
    posicion: 8,
    nombre: 'Zodiac',
    origen: 'EE.UU.',
    abv: '40%',
    precio: '€€',
    perfil: 'Cuádruple destilado, filtrado en carbón. Muy neutro para ser de patata.',
    paraQuien: 'Para quien quiere el cuerpo de la patata con el perfil limpio del cereal.',
    nota: 'El filtrado elimina mucho del carácter de la patata. Es una elección, no un defecto.',
  },
  {
    posicion: 9,
    nombre: 'Cracovia',
    origen: 'Polonia',
    abv: '40%',
    precio: '€',
    perfil: 'Económico, funcional. Típico vodka polaco de supermercado de gama entrada.',
    paraQuien: 'Para mezclar. No para solo. Honesto a su precio.',
    nota: 'Si el objetivo es un Moscow Mule o un Bloody Mary, cumple sin que nadie lo note.',
  },
  {
    posicion: 10,
    nombre: 'Monopolowa',
    origen: 'Austria',
    abv: '40%',
    precio: '€',
    perfil: 'Patata de triple destilado. Suave, limpio, algo más ligero que los polacos equivalentes.',
    paraQuien: 'Para iniciarse en el estilo de patata sin gastar demasiado.',
    nota: 'Muy popular en mercados centroeuropeos. Menos conocido en España pero fácil de encontrar online.',
  },
]

export default function MejoresMarcasVodkaPatataPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/vodka" className="hover:text-stone-300 transition-colors">Vodka</Link>
            <span>/</span>
            <span className="text-stone-300">Mejores marcas de patata</span>
          </nav>
          <span className="badge-ranking mb-4">Ranking</span>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            Las 10 mejores marcas de vodka de patata
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            El vodka de patata no es solo un subtipo de nicho. Tiene más cuerpo, más textura y un perfil
            distinto que el de cereal. Estas son las marcas que lo demuestran de verdad, desde el referente
            polaco hasta las alternativas más asequibles.
          </p>

          {/* Criterios */}
          <div className="mt-8 p-5 bg-stone-900/60 border border-stone-800 rounded-xl">
            <p className="label text-stone-500 mb-3">Criterios de selección</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-stone-400">
              <div>
                <p className="text-stone-200 font-medium mb-1">Perfil real</p>
                <p>El vodka de patata debe notar diferencia respecto al de cereal.</p>
              </div>
              <div>
                <p className="text-stone-200 font-medium mb-1">Relación precio/calidad</p>
                <p>Marcamos cuando el precio es alto sin justificación clara.</p>
              </div>
              <div>
                <p className="text-stone-200 font-medium mb-1">Disponibilidad</p>
                <p>Priorizamos marcas encontrables en España o con envío Europa.</p>
              </div>
              <div>
                <p className="text-stone-200 font-medium mb-1">Para quién encaja</p>
                <p>Cada marca es diferente: no hay una mejor universal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ranking */}
      <section className="section">
        <div className="container-prose">
          <div className="space-y-6">
            {marcas.map((m) => (
              <div key={m.nombre} className="card p-6 rounded-xl">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-amber-400 font-bold text-sm">#{m.posicion}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="font-serif text-xl font-bold text-stone-100">{m.nombre}</h2>
                      <span className="badge badge-categoria">{m.origen}</span>
                      <span className="font-mono text-xs text-amber-400">{m.abv}</span>
                      <span className="font-mono text-xs text-stone-400 bg-stone-800 px-2 py-0.5 rounded">{m.precio}</span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-xs text-stone-500 mb-1">Perfil de sabor</p>
                        <p className="text-stone-300">{m.perfil}</p>
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 mb-1">Para quién encaja</p>
                        <p className="text-stone-400">{m.paraQuien}</p>
                      </div>
                      {m.nota && (
                        <div className="pl-3 border-l border-amber-500/30">
                          <p className="text-xs text-stone-500">{m.nota}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusión */}
          <div className="mt-12 p-6 card rounded-xl">
            <h2 className="font-serif text-lg font-semibold text-stone-100 mb-4">Resumen: qué elegir</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-amber-400 font-medium mb-1">Mejor del ranking</p>
                <p className="text-stone-300">Chopin. Sin discusión si el presupuesto lo permite.</p>
              </div>
              <div>
                <p className="text-amber-400 font-medium mb-1">Mejor calidad-precio</p>
                <p className="text-stone-300">Luksusowa. La sorpresa del ranking y el más honesto económicamente.</p>
              </div>
              <div>
                <p className="text-amber-400 font-medium mb-1">Para cócteles</p>
                <p className="text-stone-300">Cracovia o Monopolowa. El mezclador domina, no es necesario gastar más.</p>
              </div>
            </div>
          </div>

          {/* Nota precio */}
          <p className="text-xs text-stone-600 mt-4">
            Rangos de precio: € = menos de 15€ | €€ = 15–30€ | €€€ = más de 30€ por botella 70 cl.
            Precios orientativos, pueden variar según tienda y mercado.
          </p>

          {/* Related */}
          <div className="mt-12 pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Más sobre vodka</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="guia"
                title="Cómo tomar vodka: temperatura, vasos y errores comunes"
                excerpt="La temperatura es el factor más ignorado. Cómo servir vodka para que realmente sepa bien."
                href="/vodka/como-tomar-vodka"
              />
              <ArticleCard
                type="comparativa"
                title="Vodka de patata vs cereal: diferencias reales"
                excerpt="No es solo marketing. La base cambia el perfil en boca. Qué esperar de cada estilo."
                href="/comparativas/vodka-de-patata-vs-vodka-de-cereal"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
