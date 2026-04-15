import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Cómo tomar vodka: temperatura, vasos, mezclas y errores comunes',
  description:
    'Guía práctica para beber vodka bien: temperatura de servicio, tipo de vaso, con o sin hielo, mezcladores y los errores más comunes.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/vodka/como-tomar-vodka' },
}

export default function ComoTomarVodkaPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/vodka" className="hover:text-stone-300 transition-colors">Vodka</Link>
            <span>/</span>
            <span className="text-stone-300">Cómo tomarlo</span>
          </nav>
          <span className="badge-guia mb-4">Guía</span>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            Cómo tomar vodka: temperatura, vasos, mezclas y errores comunes
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            El vodka tiene fama de ser insípido. Esa fama es merecida cuando se sirve mal.
            Pero hay formas de beberlo que lo hacen mucho mejor, y errores concretos que lo arruinan.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-6">

            <h2>La temperatura: el factor más ignorado</h2>
            <p>
              El vodka se bebe frío. No "con hielo", sino <strong>frío de origen</strong>. La diferencia
              es grande: el vodka directo del congelador (entre -18°C y -25°C) tiene una textura suave,
              casi aceitosa, que desaparece cuando está a temperatura ambiente. El etanol se percibe mucho
              menos cuando la temperatura es baja.
            </p>
            <p>
              La forma más sencilla: guarda la botella en el congelador. El vodka no congela (su punto
              de congelación está muy por debajo de los -18°C de un congelador doméstico), así que no hay
              riesgo. Sale espeso, casi viscoso en las versiones premium, y ese es el estado correcto.
            </p>
            <p>
              Si no tienes botella en el congelador, puedes enfriar el vaso con hielo antes de servir
              (llénalo de hielo, espera un minuto, descarta el agua y sirve). Pero la botella templada
              siempre va a quedar por detrás.
            </p>

            <h2>El vaso: no todo vale</h2>
            <p>
              El vaso correcto depende de cómo vayas a tomarlo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              {[
                {
                  vaso: 'Shot / chupitero',
                  para: 'Vodka solo, frío, de un trago',
                  desc: 'El formato clásico. 30–50 ml. Sin hielo. Sin adornos. Del congelador a la copa.',
                },
                {
                  vaso: 'Vaso de chupito con pie',
                  para: 'Vodka solo con más presencia visual',
                  desc: 'Versión más ceremoniosa del shot. Habitual en Europa del Este para vodkas premium.',
                },
                {
                  vaso: 'Highball (vaso largo)',
                  para: 'Vodka con mezclador o soda',
                  desc: 'Mucho hielo, vodka sobre el hielo, mezclador encima. La proporción importa: 1 parte de vodka por 3–4 de mezclador.',
                },
                {
                  vaso: 'Copa de cóctel (martini)',
                  para: 'Vodka Martini',
                  desc: 'En frío, sin hielo directo. El vodka se agita o remueve con hielo y se filtra a la copa helada.',
                },
                {
                  vaso: 'Taza de cobre',
                  para: 'Moscow Mule',
                  desc: 'No es estética: el cobre mantiene mejor el frío. Vodka + ginger beer + lima + mucho hielo.',
                },
              ].map((v) => (
                <div key={v.vaso} className="card p-4 rounded-xl">
                  <p className="font-semibold text-stone-100 text-sm mb-0.5">{v.vaso}</p>
                  <p className="text-xs text-amber-400 mb-2">{v.para}</p>
                  <p className="text-sm text-stone-400">{v.desc}</p>
                </div>
              ))}
            </div>

            <h2>Vodka solo: cómo apreciarlo</h2>
            <p>
              El servicio de vodka solo es más simple de lo que parece, pero hay una secuencia
              que marca la diferencia:
            </p>
            <ol>
              <li><strong>Saca la botella del congelador justo antes de servir.</strong> No dejes que se temple.</li>
              <li><strong>Vaso muy frío.</strong> Si el vaso está a temperatura ambiente, el vodka se calienta antes de llegar a la boca.</li>
              <li><strong>Cantidad correcta:</strong> 30–40 ml es la ración estándar. Más relleno pierde el ritual.</li>
              <li><strong>Sin adornos innecesarios.</strong> El limón o el pepino sobre el vaso no suman nada al vodka solo, salvo distracción.</li>
              <li><strong>Bebe despacio si es un vodka que merece atención.</strong> Un Belvedere o un Chopin se pierde en el shot instantáneo.</li>
            </ol>

            <h2>Con hielo: cuándo tiene sentido</h2>
            <p>
              El hielo diluye. Eso no es siempre malo: puede suavizar un vodka más agresivo o bajar
              la percepción de alcohol. Pero si el vodka ya viene del congelador y es de calidad,
              el hielo lo que hace es diluirlo progresivamente hasta que pierde carácter.
            </p>
            <p>
              Conclusión práctica: el hielo tiene sentido con vodkas de gama media que no vienen
              perfectamente fríos. Con vodkas premium del congelador, el hielo sobra. Con mezcladores,
              el hielo es imprescindible.
            </p>

            <h2>Mezcladores: qué funciona</h2>
            <p>
              La ventaja del vodka en cócteles es precisamente su neutralidad: no compite con el mezclador,
              lo complementa. Esto tiene un doble filo: el mezclador dominará el sabor, así que la calidad
              del mezclador importa más de lo que parece.
            </p>

            <div className="not-prose">
              <div className="overflow-x-auto rounded-xl border border-stone-800 my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800/60">
                      <th className="text-left px-4 py-3 text-stone-300 font-semibold">Mezclador</th>
                      <th className="text-left px-4 py-3 text-stone-300 font-semibold">Resultado</th>
                      <th className="text-left px-4 py-3 text-stone-300 font-semibold">Proporción típica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Soda / agua con gas', 'Limpio, neutro. Deja al vodka protagonismo.', '1:3 – 1:4'],
                      ['Tónica', 'Más carácter. El amargor de la tónica funciona bien.', '1:3'],
                      ['Zumo de naranja', 'Screwdriver. Dulce y fácil. Mejor con naranja natural.', '1:3'],
                      ['Zumo de arándano', 'Cape Codder. Ácido, frutal. Muy popular.', '1:3'],
                      ['Ginger beer', 'Moscow Mule. Con lima fresca, es uno de los mejores cócteles de vodka.', '1:4'],
                      ['Limón + azúcar', 'Base del Vodka Lemonade y el Cosmopolitan.', 'Variable'],
                    ].map(([m, r, p], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-900/50'}>
                        <td className="px-4 py-3 text-stone-200 font-medium">{m}</td>
                        <td className="px-4 py-3 text-stone-400">{r}</td>
                        <td className="px-4 py-3 text-stone-500 font-mono text-xs">{p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2>Errores comunes</h2>
            <p>
              Los errores que convierten un vodka decente en algo mediocre:
            </p>
            <ul>
              <li>
                <strong>Servirlo a temperatura ambiente.</strong> El mayor error. El etanol se percibe de forma
                agresiva sin el frío que lo suaviza.
              </li>
              <li>
                <strong>Usar un vodka de mala calidad en un cóctel y esperar que el mezclador lo tape.</strong>
                El vodka malo no desaparece: deja un regusto metálico o áspero que el mezclador no elimina.
              </li>
              <li>
                <strong>Vaso de plástico o de papel.</strong> El plástico transfiere olor. El papel enfría
                mal. El vodka merece cristal.
              </li>
              <li>
                <strong>Mezclar vodka premium con zumo de tetrabrik.</strong> La calidad del mezclador
                importa tanto como la del vodka.
              </li>
              <li>
                <strong>Agitar el Martini de vodka en lugar de removerlo.</strong> Agitar introduce burbujas
                de aire y diluye más rápido. El Martini correcto se remueve con hielo, se filtra y se sirve
                frío pero no aguado.
              </li>
            </ul>

            <h2>Maridaje con comida</h2>
            <p>
              El vodka es uno de los mejores destilados para acompañar comida, aunque no se habla de
              ello con frecuencia. Su neutralidad hace que no compita con los sabores:
            </p>
            <ul>
              <li><strong>Ahumados:</strong> salmón ahumado, caviar, arenque. La combinación clásica del este de Europa tiene sentido real.</li>
              <li><strong>Encurtidos:</strong> el vodka limpia el paladar entre bocados.</li>
              <li><strong>Carnes frías y embutidos:</strong> en formato de picoteo, el vodka frío funciona como limpiador de paladar.</li>
              <li><strong>Ostras:</strong> similar al champán: la neutralidad del vodka no compite con el yodo marino.</li>
            </ul>

          </div>

          {/* Related */}
          <div className="mt-16 pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Más sobre vodka</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="ranking"
                title="Las 10 mejores marcas de vodka de patata"
                excerpt="El vodka de patata tiene más cuerpo y textura. Estas son las marcas que realmente lo demuestran."
                href="/vodka/10-mejores-marcas-de-vodka-de-patata"
              />
              <ArticleCard
                type="comparativa"
                title="Vodka de patata vs vodka de cereal: diferencias reales"
                excerpt="No es solo marketing. La base cambia el perfil en boca. Qué esperar de cada estilo."
                href="/comparativas/vodka-de-patata-vs-vodka-de-cereal"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
