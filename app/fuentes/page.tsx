import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fuentes y metodología — Cómo construimos el contenido',
  description:
    'Qué fuentes usamos, cómo elaboramos comparativas y rankings, qué criterios aplicamos y cuáles son los límites del contenido de BebidasAlcohólicas.org.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/fuentes' },
}

export default function FuentesPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Fuentes y metodología</span>
          </nav>
          <h1 className="display-md text-stone-50 mb-6">Fuentes y metodología</h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            Cómo elaboramos el contenido, qué fuentes consultamos y cuáles son los límites de
            lo que publicamos.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-8">

            <h2>Fuentes para graduación, categorías y origen</h2>
            <p>
              Los datos sobre ABV (alcohol por volumen), normativa legal por denominaciones de origen
              y clasificaciones de estilo provienen de:
            </p>
            <ul>
              <li><strong>Reglamento (CE) 110/2008</strong> sobre definición, designación y etiquetado de bebidas espirituosas en la UE.</li>
              <li><strong>Reglamento (UE) 2019/787</strong>, que sustituyó al anterior y actualiza la normativa de destilados.</li>
              <li><strong>BJCP Style Guidelines</strong> (Beer Judge Certification Program) para estilos de cerveza.</li>
              <li><strong>Scotch Whisky Regulations 2009</strong> para la clasificación del scotch.</li>
              <li><strong>TTB (Alcohol and Tobacco Tax and Trade Bureau)</strong> para estándares de bourbon y destilados americanos.</li>
              <li><strong>OIV (Organización Internacional de la Viña y el Vino)</strong> para datos de vino.</li>
            </ul>

            <h2>Cómo elaboramos los rankings</h2>
            <p>
              Los rankings de marcas no son listas de afiliados ni patrocinados. Se construyen a partir de:
            </p>
            <ul>
              <li><strong>Perfil de sabor documentado:</strong> basado en notas de cata publicadas por medios especializados y productores.</li>
              <li><strong>Disponibilidad real:</strong> priorizamos marcas encontrables en España o con envío a Europa.</li>
              <li><strong>Relación calidad-precio:</strong> el precio se contrasta con el perfil y las alternativas equivalentes.</li>
              <li><strong>Para quién encaja:</strong> diferenciamos usos (solo, cóctel, cata) y públicos (experto, iniciado, curioso).</li>
              <li><strong>Ausencia de conflicto de interés:</strong> ninguna marca paga por aparecer en un ranking ni por su posición.</li>
            </ul>

            <h2>Cómo elaboramos las comparativas</h2>
            <p>
              Las comparativas identifican diferencias reales, no solo superficiales. El proceso:
            </p>
            <ol>
              <li>Definir el eje de comparación (sabor, precio, uso, base, origen).</li>
              <li>Documentar las características de cada elemento con fuentes verificables.</li>
              <li>Identificar en qué contextos tienen sentido cada alternativa.</li>
              <li>Dar una conclusión directa, no evasiva.</li>
            </ol>

            <h2>Límites del contenido sobre efectos y salud</h2>
            <p>
              Cuando publicamos contenido sobre efectos del alcohol en el organismo (absorción, equivalencias,
              tolerancia), utilizamos:
            </p>
            <ul>
              <li><strong>Literatura científica revisada</strong> sobre metabolismo del etanol.</li>
              <li><strong>Datos de organismos de salud pública</strong> (OMS, Ministerio de Sanidad de España, NIAAA).</li>
              <li><strong>Formulación prudente:</strong> siempre en términos de promedios y rangos, no como aplicación individual.</li>
            </ul>
            <p>
              Estos contenidos tienen como objetivo ayudar al lector a tomar decisiones más informadas,
              no sustituir consejo médico. Las situaciones individuales requieren evaluación profesional.
            </p>

            <h2>Transparencia sobre actualizaciones</h2>
            <p>
              El mercado de bebidas cambia: marcas entran y salen, precios varían, normativas se actualizan.
              Cuando un dato relevante cambia en una página, lo actualizamos y lo indicamos.
              Si encuentras información desactualizada o incorrecta, escríbenos a través de la{' '}
              <Link href="/contacto">página de contacto</Link>.
            </p>

            <h2>Sobre la ausencia de patrocinios editoriales</h2>
            <p>
              Los rankings, comparativas y recomendaciones de BebidasAlcohólicas.org no son contenido
              patrocinado. Ninguna marca paga por aparecer, por su posición en un ranking ni por el
              tono del texto que la describe. Si en algún momento eso cambiara, se indicaría
              explícitamente en el artículo correspondiente.
            </p>

          </div>
        </div>
      </article>
    </>
  )
}
