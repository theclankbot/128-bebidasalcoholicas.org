import type { Metadata } from 'next'
import Link from 'next/link'
import AbvTable from '@/components/AbvTable'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Cuántas cervezas equivalen a un whisky — Equivalencias reales por alcohol puro',
  description:
    'La equivalencia entre bebidas alcohólicas no se calcula por volumen sino por alcohol puro. Cómo comparar cerveza, vino, whisky, vodka y ron entre sí.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/consumo/cuantas-cervezas-equivalen-a-un-whisky' },
}

const abvRows = [
  { bebida: 'Cerveza lager 330 ml (5%)', abv: '5%', racion: '330 ml', alcoholPuro: '13,2 g' },
  { bebida: 'Cerveza fuerte 330 ml (8%)', abv: '8%', racion: '330 ml', alcoholPuro: '21,1 g' },
  { bebida: 'Vino tinto copa (13%)', abv: '13%', racion: '150 ml', alcoholPuro: '15,5 g' },
  { bebida: 'Whisky medida (40%)', abv: '40%', racion: '40 ml', alcoholPuro: '12,7 g' },
  { bebida: 'Whisky medida doble (40%)', abv: '40%', racion: '80 ml', alcoholPuro: '25,4 g' },
  { bebida: 'Vodka shot (40%)', abv: '40%', racion: '40 ml', alcoholPuro: '12,7 g' },
  { bebida: 'Ron (40%) en combinado largo', abv: '40%', racion: '40 ml de ron', alcoholPuro: '12,7 g' },
  { bebida: 'Tequila shot (38%)', abv: '38%', racion: '40 ml', alcoholPuro: '12,1 g' },
]

export default function CuantasCervezasEquivalenWhiskyPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/consumo" className="hover:text-stone-300 transition-colors">Consumo real</Link>
            <span>/</span>
            <span className="text-stone-300">Cerveza vs whisky</span>
          </nav>
          <span className="badge-consumo mb-4">Consumo real</span>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            Cuántas cervezas equivalen a un whisky
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            La pregunta tiene trampa: comparar por volumen no funciona porque la graduación varía enormemente.
            La forma correcta de comparar es por alcohol puro por ración. Y la respuesta sorprende
            a la mayoría.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-6">

            <h2>La respuesta directa</h2>
            <p>
              Una medida estándar de whisky (40 ml a 40% ABV) contiene aproximadamente <strong>12,7 gramos
              de alcohol puro</strong>. Una cerveza lager estándar (330 ml a 5% ABV) contiene
              aproximadamente <strong>13,2 gramos</strong>.
            </p>
            <p>
              La respuesta, entonces: <strong>1 whisky estándar ≈ 1 cerveza estándar en cuanto a
              alcohol puro</strong>.
            </p>
            <p>
              Esto contradice la percepción popular de que "el whisky es mucho más fuerte que la cerveza".
              Lo que es más fuerte es la concentración por volumen, pero la ración de servicio habitual
              está calibrada precisamente para equilibrarse.
            </p>

            <h2>Por qué la concentración no es lo mismo que el efecto</h2>
            <p>
              El alcohol en alta concentración (40%) no se absorbe de la misma forma que en baja
              concentración (5%). La velocidad de absorción varía. Pero en términos de cantidad
              total de alcohol que llega a la sangre, <strong>40 ml de whisky al 40% producen
              la misma carga hepática que 330 ml de cerveza al 5%</strong>.
            </p>
            <p>
              Lo que sí cambia es la velocidad a la que se beben. Una cerveza dura 20 minutos.
              Un whisky solo puede durar 5 minutos o una hora. La velocidad de ingesta es lo que
              determina si el alcohol se acumula en sangre o el hígado puede seguirle el ritmo.
            </p>

          </div>

          {/* Table */}
          <div className="my-10">
            <p className="label text-stone-500 mb-4">Alcohol puro por ración — Tabla comparativa</p>
            <AbvTable
              rows={abvRows}
              caption="Comparación de alcohol puro por ración de distintas bebidas"
            />
            <p className="text-xs text-stone-600 mt-3">
              Fórmula: alcohol puro (g) = volumen (ml) × ABV/100 × 0,789 (densidad del etanol).
              Una UBE en España = 10 g de alcohol puro.
            </p>
          </div>

          <div className="prose-editorial space-y-6">

            <h2>La trampa del "doble"</h2>
            <p>
              Un bar que sirva un "whisky doble" (80 ml) sin que lo pidas explícitamente te está
              sirviendo el equivalente a dos cervezas estándar en un solo vaso. Es fácil subestimarlo
              porque el vaso de whisky parece pequeño.
            </p>
            <p>
              Del mismo modo, una cerveza de 8% (por ejemplo, algunas cervezas belgas o "strong ales")
              de 330 ml contiene 21 gramos de alcohol: el equivalente a <strong>casi dos cervezas
              normales o 1,6 whiskies estándar</strong>.
            </p>

            <h2>La copa de vino</h2>
            <p>
              Una copa de vino tinto de 150 ml al 13% contiene unos 15,5 gramos de alcohol,
              algo más que una cerveza estándar o un whisky. Pero hay que tener en cuenta que
              en muchos bares y en casa se sirven copas de 175–200 ml, lo que eleva la carga
              a 18–20 g por copa.
            </p>

            <h2>Equivalencias prácticas</h2>
            <p>
              Para simplificar: en España se usa la <strong>Unidad de Bebida Estándar (UBE)</strong>,
              que equivale a 10 g de alcohol puro. Así quedan las equivalencias:
            </p>

          </div>

          {/* UBE visual */}
          <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { bebida: 'Cerveza (330 ml, 5%)', ube: 1.3, desc: '~1,3 UBE' },
              { bebida: 'Vino (copa 150 ml, 13%)', ube: 1.5, desc: '~1,5 UBE' },
              { bebida: 'Whisky/Vodka (40 ml, 40%)', ube: 1.3, desc: '~1,3 UBE' },
              { bebida: 'Cerveza fuerte (330 ml, 8%)', ube: 2.1, desc: '~2,1 UBE' },
              { bebida: 'Chupito grande (60 ml, 40%)', ube: 1.9, desc: '~1,9 UBE' },
              { bebida: 'Copa vino grande (200 ml, 13%)', ube: 2.1, desc: '~2,1 UBE' },
            ].map((row) => (
              <div key={row.bebida} className="card p-4 rounded-xl">
                <p className="text-sm text-stone-300 mb-2">{row.bebida}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500/60 rounded-full"
                      style={{ width: `${Math.min(row.ube / 2.5, 1) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-amber-400 text-sm font-bold">{row.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="prose-editorial space-y-6">

            <h2>Conclusión</h2>
            <p>
              La equiparación "un whisky = una cerveza" es más exacta de lo que parece cuando
              se comparan las raciones estándar. El error habitual es comparar un whisky con una
              caña, olvidando que la caña son 200 ml (no 330) y el whisky son 40 ml (no 60).
            </p>
            <p>
              El principio que vale en todas las situaciones:
              <strong> no compares por volumen, compara por alcohol puro</strong>.
              Multiplicar el volumen en litros por el porcentaje de ABV y por 7,89
              te da los gramos de alcohol con suficiente precisión para tomar decisiones informadas.
            </p>

          </div>

          {/* Related */}
          <div className="mt-12 pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Más sobre consumo real</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="guia"
                title="Cuánto tarda en subir el alcohol"
                excerpt="Los factores reales que determinan la velocidad de absorción y cuándo llega el pico."
                href="/guias/cuanto-tarda-en-subir-el-alcohol"
              />
              <ArticleCard
                type="guia"
                title="Cómo tomar vodka bien"
                excerpt="Temperatura, vasos, mezcladores y los errores que arruinan incluso el vodka de calidad."
                href="/vodka/como-tomar-vodka"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
