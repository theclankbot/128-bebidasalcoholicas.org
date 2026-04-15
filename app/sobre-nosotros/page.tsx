import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre nosotros — Quiénes somos y qué es esta web',
  description:
    'Qué es BebidasAlcohólicas.org, cuál es su posicionamiento editorial y con qué criterio se construye el contenido.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/sobre-nosotros' },
}

export default function SobreNosotrosPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Sobre nosotros</span>
          </nav>
          <h1 className="display-md text-stone-50 mb-6">Sobre nosotros</h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            Qué es esta web, para qué existe y con qué criterio editorial trabajamos.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-6">

            <h2>Qué es BebidasAlcohólicas.org</h2>
            <p>
              BebidasAlcohólicas.org es una guía editorial en español sobre bebidas alcohólicas.
              Su objetivo es ser la referencia más clara y útil en español para entender tipos de
              bebida, comparar estilos y marcas, aprender a servir y consumir con criterio.
            </p>
            <p>
              No es un blog personal de opiniones. No es una tienda de bebidas. No es un consultorio
              médico. Es una publicación editorial con criterio propio y metodología clara.
            </p>

            <h2>Posicionamiento editorial</h2>
            <p>
              La mayoría de webs en español sobre bebidas alcohólicas están en uno de estos extremos:
              listas superficiales de marcas, contenido médico-preventivo de dudosa fiabilidad, o
              clickbait de borracheras y curiosidades. Ninguno de esos extremos es lo que queremos ser.
            </p>
            <p>
              Queremos ser la guía que hubiera querido tener alguien que está empezando a interesarse
              por el vodka, el whisky, la cerveza artesanal o el ron de calidad. Información real,
              explicada bien, sin postureo y sin moralismos innecesarios.
            </p>

            <h2>Qué tipo de contenido publicamos</h2>
            <ul>
              <li><strong>Guías de categoría:</strong> qué es cada bebida, subestilos, graduación, cómo se sirve y marcas.</li>
              <li><strong>Comparativas:</strong> diferencias reales entre estilos, bases, orígenes o marcas concretas.</li>
              <li><strong>Rankings:</strong> con criterio explícito, precio, perfil y para quién encaja cada opción.</li>
              <li><strong>Guías prácticas:</strong> temperatura, vasos, mezcladores, conservación, maridaje.</li>
              <li><strong>Contenido de consumo real:</strong> equivalencias, absorción, factores que determinan el efecto.</li>
            </ul>

            <h2>Qué no publicamos</h2>
            <ul>
              <li>Consejos médicos, farmacológicos o de salud personalizados.</li>
              <li>Combinaciones de alcohol con medicamentos escritas como si fuéramos una autoridad sanitaria.</li>
              <li>Contenido diseñado para maximizar clicks sin aportar valor real.</li>
              <li>Rankings vacíos con 200 palabras y ningún criterio explicado.</li>
            </ul>

            <h2>Criterio editorial sobre contenido sensible</h2>
            <p>
              Algunos temas que rodean al alcohol son delicados: efectos en el organismo, interacciones
              con fármacos, consumo problemático. Cuando abordamos estos temas:
            </p>
            <ul>
              <li>Utilizamos tono prudente y sin simplificaciones.</li>
              <li>Indicamos claramente los límites del contenido.</li>
              <li>Recomendamos consultar profesionales cuando aplica.</li>
              <li>No ampliamos ese tipo de contenido más allá de lo estrictamente necesario.</li>
            </ul>

            <h2>Contacto</h2>
            <p>
              Para consultas editoriales, correcciones de datos o información sobre el sitio,
              puedes escribirnos a través de la{' '}
              <Link href="/contacto">página de contacto</Link>.
            </p>

          </div>
        </div>
      </article>
    </>
  )
}
