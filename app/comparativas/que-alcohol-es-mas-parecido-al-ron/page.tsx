import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: '¿Qué alcohol es más parecido al ron? Comparativa por perfil',
  description:
    'Perfil dulce, cuerpo medio y versatilidad en cóctel. Qué bebidas se parecen más al ron y cuándo tienen sentido como alternativa.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/comparativas/que-alcohol-es-mas-parecido-al-ron' },
}

const alternativas = [
  {
    bebida: 'Cachaça',
    similitud: '95%',
    razon:
      'La cachaça es el alcohol más parecido al ron del mundo. Ambos provienen de la caña de azúcar: el ron de melaza, la cachaça de jugo de caña fresco. El resultado es más fresco y vegetal en la cachaça, más dulce y profundo en el ron añejado. En cócteles, son intercambiables con matices.',
    diferencias: 'La cachaça tiene más acidez y carácter herbáceo. El ron añejado tiene más vainilla y caramelo.',
    usoComo: 'Sustituto directo en Mojito (se convierte en Caipiríña). En daiquiri también funciona.',
    disponibilidad: 'Fácil de encontrar. Cachaça Ypióca o Leblon en supermercados grandes.',
  },
  {
    bebida: 'Brandy / Coñac (joven)',
    similitud: '60%',
    razon:
      'El brandy joven comparte el perfil dulce y afrutado del ron, aunque su base es la uva en lugar de la caña. En cócteles donde el ron aporta dulzura y cuerpo, el brandy puede sustituirlo con resultados aceptables, aunque el perfil frutal cambia.',
    diferencias: 'El brandy tiene más acidez de uva y menos dulzor de caña. El añejado en roble puede acercarse más.',
    usoComo: 'En drinks como el Rum Punch o mezclas dulces. No para Mojito: la acidez del brandy distorsiona.',
    disponibilidad: 'Fácil. Torres 10, Veterano, Magno en cualquier supermercado.',
  },
  {
    bebida: 'Pisco',
    similitud: '55%',
    razon:
      'El pisco es un destilado de uva sin añejar, con un perfil aromático frutal intenso. Se parece al ron en cuanto a cuerpo y versatilidad en cóctel, aunque su sabor es completamente distinto. La similitud es funcional, no de sabor.',
    diferencias: 'El pisco es mucho más aromático, con notas florales y frutales que el ron no tiene.',
    usoComo: 'Pisco Sour en lugar de Daiquiri. En mezclas tropicales donde el ron aportaría caña.',
    disponibilidad: 'Más difícil de encontrar. Bodegas especializadas o tiendas online.',
  },
  {
    bebida: 'Tequila reposado',
    similitud: '45%',
    razon:
      'El tequila reposado (2–12 meses en barrica) tiene un punto dulce y especiado que puede recordar vagamente a los rones medios. La similitud es limitada: el agave tiene un perfil muy propio. Pero en cócteles tropicales, puede funcionar como alternativa.',
    diferencias: 'El agave tiene un carácter herbáceo y ligeramente amargo que el ron no tiene. Muy distinto en solo.',
    usoComo: 'En margaritas con perfil tropical, que pueden recordar a cócteles de ron. No en Mojito.',
    disponibilidad: 'Muy fácil. Olmeca, Herradura, Jose Cuervo en cualquier tienda.',
  },
  {
    bebida: 'Bourbon',
    similitud: '40%',
    razon:
      'El bourbon tiene el dulzor de la vainilla y el caramelo de la barrica nueva de roble americano. En bebidas largas y dulces, puede sustituir al ron con un perfil diferente pero que funciona. La base de maíz da una dulzura que no existe en el centeno escocés.',
    diferencias: 'El bourbon tiene notas de cereales y especias que el ron no tiene. Mucho más robusto.',
    usoComo: 'En highballs dulces. El "Dark and Stormy" con bourbon en lugar de ron es un cóctel distinto pero bueno.',
    disponibilidad: 'Fácil. Jim Beam, Maker\'s Mark, Wild Turkey en grandes superficies.',
  },
]

const perfilRon = [
  { atributo: 'Dulzor', valor: 80, desc: 'Alta presencia de caña, melaza y crianza en barrica' },
  { atributo: 'Cuerpo', valor: 65, desc: 'Medio-alto según el estilo. Los añejados tienen más cuerpo.' },
  { atributo: 'Acidez', valor: 30, desc: 'Baja. Mucho menor que el brandy o el pisco.' },
  { atributo: 'Amargor', valor: 15, desc: 'Casi inexistente en rones estándar.' },
  { atributo: 'Complejidad', valor: 70, desc: 'Alta en rones añejados. Media en blancos.' },
]

export default function AlcoholParecidoRonPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/comparativas" className="hover:text-stone-300 transition-colors">Comparativas</Link>
            <span>/</span>
            <span className="text-stone-300">Parecido al ron</span>
          </nav>
          <span className="badge-comparativa mb-4">Comparativa</span>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            ¿Qué alcohol es más parecido al ron?
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            El ron tiene un perfil dulce, cuerpo medio y mucha versatilidad en cóctel. Si buscas un
            sustituto o quieres entender qué bebidas comparten su carácter, estas son las alternativas
            reales, ordenadas por similitud.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose">

          {/* Perfil del ron */}
          <div className="card p-6 rounded-xl mb-12">
            <p className="label text-stone-500 mb-5">Perfil del ron — por qué es difícil de sustituir</p>
            <div className="space-y-4">
              {perfilRon.map((p) => (
                <div key={p.atributo}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-stone-300 font-medium">{p.atributo}</span>
                    <span className="text-xs text-stone-500">{p.desc}</span>
                  </div>
                  <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500/60 rounded-full"
                      style={{ width: `${p.valor}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-600 mt-4">
              El dulzor y la versatilidad son los atributos más difíciles de igualar. La mayoría de alternativas
              tienen más amargor, más acidez o menos cuerpo.
            </p>
          </div>

          {/* Alternativas */}
          <h2 className="display-sm text-stone-100 mb-8">Las 5 alternativas más cercanas</h2>
          <div className="space-y-6">
            {alternativas.map((a, i) => (
              <div key={a.bebida} className="card p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-xs text-stone-400">#{i + 1}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-100">{a.bebida}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-500 mb-1">Similitud</p>
                    <p className="font-mono text-amber-400 font-bold">{a.similitud}</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <p className="text-stone-300 leading-relaxed">{a.razon}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-stone-500 mb-1.5">Diferencias clave</p>
                      <p className="text-stone-400 leading-relaxed">{a.diferencias}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 mb-1.5">Cuándo usarlo como sustituto</p>
                      <p className="text-stone-400 leading-relaxed">{a.usoComo}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-stone-800">
                    <p className="text-xs text-stone-600 font-medium">Disponibilidad:</p>
                    <p className="text-xs text-stone-500">{a.disponibilidad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusión */}
          <div className="mt-12 prose-editorial">
            <h2>Conclusión directa</h2>
            <p>
              Si necesitas un sustituto del ron para un cóctel, <strong>la cachaça es la respuesta obvia</strong>.
              Mismo origen (caña de azúcar), misma función en el vaso, perfil diferente pero complementario.
              Con cachaça en un Mojito tienes un Mojito diferente pero igualmente bueno.
            </p>
            <p>
              Si lo que buscas es entender qué bebida comparte la filosofía del ron
              (dulce, versátil, de caña), ninguna otra la tiene completamente.
              El brandy se acerca en dulzor pero cambia la base aromática. El tequila reposado tiene
              algún punto en común, pero el agave tiene su propio carácter.
            </p>
            <p>
              El ron es difícil de sustituir exactamente porque <strong>la melaza de caña tiene un
              perfil que ninguna otra materia prima replica</strong>. Lo que puedes encontrar son
              alternativas funcionales —que cumplen en el cóctel— o perfiles similares en algún
              atributo concreto.
            </p>
          </div>

          {/* Related */}
          <div className="mt-12 pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Más comparativas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="comparativa"
                title="Vodka de patata vs vodka de cereal"
                excerpt="La base del vodka cambia el perfil en boca. Diferencias reales entre los dos estilos."
                href="/comparativas/vodka-de-patata-vs-vodka-de-cereal"
              />
              <ArticleCard
                type="consumo"
                title="Cuántas cervezas equivalen a un whisky"
                excerpt="No se trata de volumen sino de alcohol puro por ración. Cómo comparar bebidas entre sí."
                href="/consumo/cuantas-cervezas-equivalen-a-un-whisky"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
