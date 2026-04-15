import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consumo responsable — Información y recursos',
  description:
    'Posición editorial sobre el alcohol: riesgos reales, límites del contenido y recursos de ayuda. Esta web no da consejos médicos.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/consumo-responsable' },
}

export default function ConsumoResponsablePage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-stone-300">Consumo responsable</span>
          </nav>
          <h1 className="display-md text-stone-50 mb-6">Consumo responsable</h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            Nuestra posición sobre el alcohol, los límites de este sitio y los recursos
            disponibles para quien los necesite.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-8">

            <div className="p-6 bg-stone-900 border border-amber-500/20 rounded-xl">
              <h2 className="text-lg font-semibold text-stone-100 mb-3 mt-0">Posición editorial</h2>
              <p className="text-stone-400 leading-relaxed">
                Esta web es una guía editorial sobre bebidas alcohólicas. Su función es informar,
                comparar y explicar. No promueve el consumo, no lo valida como saludable y no minimiza
                sus riesgos. El alcohol es una sustancia legal con riesgos reales que varían
                según la persona, el contexto y el patrón de consumo.
              </p>
            </div>

            <h2>Lo que este sitio no es</h2>
            <ul>
              <li>No es un consultorio médico ni farmacológico.</li>
              <li>No da consejos de salud personalizados.</li>
              <li>No valida el consumo de alcohol como beneficioso para la salud.</li>
              <li>No es una fuente de referencia para decisiones médicas.</li>
            </ul>
            <p>
              Cualquier contenido sobre efectos del alcohol en el organismo, interacciones
              o situaciones específicas de salud tiene carácter informativo general.
              Consulta siempre a un profesional sanitario para tu situación concreta.
            </p>

            <h2>Lo que sí es este sitio</h2>
            <ul>
              <li>Una guía editorial sobre tipos de bebida, cultura y servicio.</li>
              <li>Una referencia para entender qué contiene lo que bebes.</li>
              <li>Un espacio que trata el contenido sensible con tono prudente y sin amplificarlo.</li>
              <li>Una fuente que aclara sus fuentes y metodología.</li>
            </ul>

            <h2>Riesgos reales del consumo de alcohol</h2>
            <p>
              El alcohol etílico (etanol) es una sustancia psicoactiva clasificada por la OMS
              como carcinógeno del grupo 1. Su consumo habitual se asocia con riesgo de:
            </p>
            <ul>
              <li>Dependencia y trastorno por uso de alcohol</li>
              <li>Daño hepático (hígado graso, hepatitis, cirrosis)</li>
              <li>Enfermedades cardiovasculares</li>
              <li>Varios tipos de cáncer</li>
              <li>Deterioro cognitivo con consumo prolongado</li>
              <li>Riesgo de accidentes bajo los efectos del alcohol</li>
            </ul>
            <p>
              No existe un nivel de consumo de alcohol que sea universalmente seguro para todas las personas.
              Esto es especialmente importante durante el embarazo, en personas con condiciones de salud
              específicas y al combinar alcohol con medicamentos.
            </p>

            <h2>Grupos para los que el alcohol está contraindicado</h2>
            <ul>
              <li><strong>Menores de edad:</strong> el consumo de alcohol en menores está prohibido legalmente y tiene efectos negativos documentados en el desarrollo cerebral.</li>
              <li><strong>Embarazo y lactancia:</strong> no existe un nivel seguro de consumo durante el embarazo. El alcohol atraviesa la barrera placentaria.</li>
              <li><strong>Personas en tratamiento con medicamentos incompatibles:</strong> muchos fármacos tienen interacción con el alcohol. Consulta siempre al médico o farmacéutico.</li>
              <li><strong>Personas con historial de dependencia:</strong> el consumo moderado no es una opción universal para quienes han tenido dependencia.</li>
              <li><strong>Personas con enfermedad hepática:</strong> el hígado es el principal órgano metabolizador del alcohol. Cualquier daño hepático previo afecta drásticamente cómo se procesa.</li>
            </ul>

            <h2>Recursos de ayuda en España</h2>
            <div className="not-prose space-y-3">
              {[
                {
                  nombre: 'Línea de Atención a las Adicciones',
                  descripcion: 'Ministerio de Sanidad. Gratuita y confidencial.',
                  contacto: '900 200 514',
                  tipo: 'Teléfono',
                },
                {
                  nombre: 'Alcohólicos Anónimos España',
                  descripcion: 'Grupos de autoayuda. Sin cuotas, sin afiliación religiosa obligatoria.',
                  contacto: 'www.alcoholicos-anonimos.org',
                  tipo: 'Web',
                },
                {
                  nombre: 'Cruz Roja — Atención a drogodependencias',
                  descripcion: 'Atención social y derivación a recursos especializados.',
                  contacto: '900 22 44 22',
                  tipo: 'Teléfono',
                },
                {
                  nombre: 'Médico de atención primaria',
                  descripcion: 'El punto de entrada más accesible para evaluación y derivación a especialistas.',
                  contacto: 'Centro de salud más cercano',
                  tipo: 'Presencial',
                },
              ].map((r) => (
                <div key={r.nombre} className="card p-5 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-stone-200 mb-1">{r.nombre}</p>
                      <p className="text-sm text-stone-400">{r.descripcion}</p>
                    </div>
                    <span className="badge badge-guia ml-4 flex-shrink-0">{r.tipo}</span>
                  </div>
                  <p className="text-sm text-amber-400 mt-3 font-medium">{r.contacto}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </article>
    </>
  )
}
