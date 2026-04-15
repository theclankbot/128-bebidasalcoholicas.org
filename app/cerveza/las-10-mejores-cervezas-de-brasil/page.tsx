import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Las 10 mejores cervezas de Brasil',
  description:
    'Brasil tiene mucho más que Brahma y Skol. Cervezas artesanales, IPAs tropicales y pilsners que merecen atención. Ranking con criterio.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/cerveza/las-10-mejores-cervezas-de-brasil' },
}

const cervezas = [
  {
    posicion: 1,
    nombre: 'Colorado Indica',
    tipo: 'India Pale Ale',
    abv: '7%',
    precio: '€€',
    perfil: 'IPA de autor con lúpulos tropicales y maracuyá. Amargor medio, notas frutales intensas. Una de las mejores IPAs de América del Sur.',
    nota: 'La cervecería Colorado de Ribeirão Preto es pionera del movimiento artesanal brasileño.',
  },
  {
    posicion: 2,
    nombre: 'Wäls Petroleum',
    tipo: 'Imperial Stout',
    abv: '11%',
    precio: '€€€',
    perfil: 'Stout imperial oscura con notas de café, chocolate amargo y caramelo. Cuerpo denso, final largo. Para beber despacio.',
    nota: 'Una de las mejores cervezas oscuras de Brasil. Ediciones especiales con barrel aging.',
  },
  {
    posicion: 3,
    nombre: 'Eisenbahn Dunkel',
    tipo: 'Dunkel Lager',
    abv: '4,8%',
    precio: '€',
    perfil: 'Lager oscura de influencia alemana. Malta tostada, caramelo suave, baja amargura. Muy equilibrada y accesible.',
    nota: 'Eisenbahn de Blumenau refleja la fuerte tradición cervecera alemana del sur de Brasil.',
  },
  {
    posicion: 4,
    nombre: 'Seasons Belgian Tripel',
    tipo: 'Belgian Tripel',
    abv: '9%',
    precio: '€€',
    perfil: 'Tripel de estilo belga con notas especiadas, frutas amarillas y una carbonatación elegante. Compleja para su precio.',
    nota: 'De la cervecería Seasons, Minas Gerais. De las mejores belgas de América del Sur.',
  },
  {
    posicion: 5,
    nombre: 'Bamberg Rauchbier',
    tipo: 'Rauchbier',
    abv: '5,2%',
    precio: '€€',
    perfil: 'Cerveza ahumada de estilo alemán. Malta ahumada intensa, cuerpo medio, final seco y persistente. No es para todo el mundo, pero es auténtica.',
    nota: 'Rara fuera de Brasil. Si la encuentras, pruébala si te interesan los estilos ahumados.',
  },
  {
    posicion: 6,
    nombre: 'Skol (edición artesanal)',
    tipo: 'Pilsner',
    abv: '4,7%',
    precio: '€',
    perfil: 'La Skol convencional es una lager muy light. Las ediciones artesanales limitadas tienen más carácter. En ningún caso comparable a las posiciones anteriores.',
    nota: 'Incluida por reconocimiento de marca. No compite con las anteriores en calidad.',
  },
  {
    posicion: 7,
    nombre: 'Bohemia (original, 1853)',
    tipo: 'Pilsner Premium',
    abv: '4,7%',
    precio: '€',
    perfil: 'La primera cerveza premium de Brasil. Más carácter que Brahma o Skol. Lúpulo más presente, sabor más definido.',
    nota: 'Hay que distinguir entre Bohemia Weiss, Bock y la original. La original es la más equilibrada.',
  },
  {
    posicion: 8,
    nombre: 'Dama Bier Catharina Sour',
    tipo: 'Catharina Sour',
    abv: '4,5%',
    precio: '€€',
    perfil: 'Estilo de Berliner Weisse con frutas tropicales brasileñas. Ligera, ácida, refrescante. Maracuyá o mango frecuentemente.',
    nota: 'La Catharina Sour es un estilo cervecero creado en Brasil. Representación auténtica.',
  },
  {
    posicion: 9,
    nombre: 'Cerrado Cerrado Lager',
    tipo: 'Lager Artesanal',
    abv: '5%',
    precio: '€€',
    perfil: 'Lager artesanal del corazón de Brasil, Distrito Federal. Más limpia y con más personalidad que las industriales.',
    nota: 'Cervecería de referencia en la región del cerrado brasileño.',
  },
  {
    posicion: 10,
    nombre: 'Itaipava',
    tipo: 'Lager',
    abv: '4,5%',
    precio: '€',
    perfil: 'Lager suave y refrescante. Bajo amargor, muy ligera. Funciona bien muy fría en clima cálido.',
    nota: 'La alternativa más accesible para quienes buscan algo refrescante sin complejidad.',
  },
]

export default function MejoresCervezasBrasilPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/cerveza" className="hover:text-stone-300 transition-colors">Cerveza</Link>
            <span>/</span>
            <span className="text-stone-300">Las 10 mejores de Brasil</span>
          </nav>
          <span className="badge-ranking mb-4">Ranking</span>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            Las 10 mejores cervezas de Brasil
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            Brasil tiene una de las escenas cerveceras más activas de América Latina. Más allá de
            Brahma y Skol, hay cervezas artesanales de altura. Este ranking va de las más interesantes
            a las más accesibles, con criterio claro.
          </p>
          <div className="mt-6 p-4 bg-stone-900/60 border border-stone-800 rounded-xl text-sm text-stone-400">
            Las posiciones 1–5 son cervezas artesanales de calidad real. Las posiciones 6–10 incluyen
            opciones más accesibles y conocidas, con su contexto honesto.
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-prose">
          <div className="space-y-5">
            {cervezas.map((c) => (
              <div key={c.nombre} className="card p-6 rounded-xl">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-amber-400 font-bold text-sm">#{c.posicion}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="font-serif text-xl font-bold text-stone-100">{c.nombre}</h2>
                      <span className="badge badge-categoria">{c.tipo}</span>
                      <span className="font-mono text-xs text-amber-400">{c.abv}</span>
                      <span className="font-mono text-xs text-stone-400 bg-stone-800 px-2 py-0.5 rounded">{c.precio}</span>
                    </div>
                    <p className="text-sm text-stone-300 leading-relaxed mb-3">{c.perfil}</p>
                    {c.nota && (
                      <div className="pl-3 border-l border-amber-500/30">
                        <p className="text-xs text-stone-500">{c.nota}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Más rankings de cerveza</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="ranking"
                title="Las mejores cervezas irlandesas"
                excerpt="De la Guinness en barril a las stouts artesanales modernas. Irlanda tiene mucho más que el color negro."
                href="/cerveza/las-mejores-cervezas-irlandesas"
              />
              <ArticleCard
                type="ranking"
                title="Las mejores cervezas canadienses"
                excerpt="El mercado craft canadiense ha explotado. Desde las clásicas hasta la escena artesanal más reciente."
                href="/cerveza/las-mejores-cervezas-canadienses"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
