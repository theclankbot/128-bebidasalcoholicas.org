import type { Metadata } from 'next'
import Link from 'next/link'
import YMYLWarning from '@/components/YMYLWarning'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Cuántos tragos de vodka para emborracharse: graduación, tolerancia y factores reales',
  description:
    'No existe una respuesta universal. Los factores que determinan el efecto del vodka: ABV, ración, velocidad, peso corporal, comida y tolerancia.',
  alternates: {
    canonical: 'https://bebidasalcoholicas.org/vodka/cuantos-tragos-de-vodka-para-emborracharse',
  },
}

export default function CuantosTragosVodkaPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/vodka" className="hover:text-stone-300 transition-colors">Vodka</Link>
            <span>/</span>
            <span className="text-stone-300">Cuántos tragos para emborracharse</span>
          </nav>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            Cuántos tragos de vodka hacen falta para emborracharse
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            No hay una respuesta universal. La que circula en foros y memes —"tres shots y ya estás"—
            ignora todas las variables que determinan el efecto real del vodka en cada persona.
            Aquí están los factores que sí importan.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose space-y-8">

          {/* Aviso YMYL */}
          <YMYLWarning />

          <div className="prose-editorial space-y-6">

            <h2>Por qué no existe un número fijo</h2>
            <p>
              El efecto del alcohol sobre una persona depende de la concentración de alcohol en sangre
              (tasa de alcoholemia), y esa concentración varía según factores individuales que son
              independientes del número de tragos. Dos personas pueden beber la misma cantidad con
              resultados completamente distintos.
            </p>

            <h2>Los factores que determinan el efecto</h2>

            <h3>1. Peso corporal y composición</h3>
            <p>
              El alcohol se distribuye por el agua del cuerpo. A mayor peso y mayor porcentaje de
              masa muscular (más agua), el mismo volumen de alcohol genera una concentración menor
              en sangre. Una persona de 60 kg tendrá más del doble de concentración que una de
              130 kg con la misma cantidad ingerida.
            </p>

            <h3>2. Si has comido</h3>
            <p>
              Con el estómago vacío, el vodka llega al intestino delgado rápidamente y la absorción
              es más intensa y veloz. Con comida (especialmente grasas y proteínas), el proceso se
              ralentiza y el pico es menor y más tardío. La diferencia puede ser de 30–40% en
              la concentración máxima alcanzada.
            </p>

            <h3>3. La velocidad de ingesta</h3>
            <p>
              El hígado metaboliza el alcohol a una tasa de aproximadamente 7–10 g/hora. Si bebes
              más rápido, el exceso se acumula en sangre. Si bebes despacio (menos de 1 medida por
              hora), el hígado puede seguir el ritmo y la concentración apenas sube.
            </p>

            <h3>4. La tolerancia</h3>
            <p>
              La tolerancia afecta a la percepción del efecto, no al efecto real en el organismo.
              Una persona con alta tolerancia puede sentirse menos afectada con la misma alcoholemia
              que alguien sin tolerancia. Pero la coordinación, el tiempo de reacción y el juicio
              se deterioran por igual.
            </p>

            <h3>5. Sexo biológico</h3>
            <p>
              En promedio, las mujeres tienen más porcentaje de grasa y menos agua que los hombres
              del mismo peso. Además, producen menos cantidad de alcohol deshidrogenasa (la enzima
              que metaboliza el alcohol en el estómago). El resultado es que la misma cantidad
              de alcohol genera una concentración mayor en sangre.
            </p>

          </div>

          {/* Estimaciones orientativas */}
          <div className="card p-6 rounded-xl">
            <p className="label text-stone-500 mb-5">Estimaciones orientativas — Shots de vodka (40%, 40 ml)</p>
            <p className="text-xs text-stone-500 mb-5">
              Estas cifras son aproximaciones para adultos en buenas condiciones de salud, con algo de
              comida, a ritmo normal. No son aplicables universalmente. Las variaciones individuales son grandes.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-800/60">
                    <th className="text-left px-4 py-3 text-stone-300 font-semibold">Perfil</th>
                    <th className="text-left px-4 py-3 text-stone-300 font-semibold">Shots para notar efecto</th>
                    <th className="text-left px-4 py-3 text-stone-300 font-semibold">Referencia</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Adulto 60 kg, sin tolerancia, estómago vacío', '1–2', 'Efecto rápido y pronunciado'],
                    ['Adulto 60 kg, sin tolerancia, con comida', '2–3', 'Absorción más lenta'],
                    ['Adulto 80 kg, tolerancia media, con comida', '3–4', 'El rango más frecuente'],
                    ['Adulto 100 kg, tolerancia alta', '4–5+', 'Alto umbral de percepción subjetiva'],
                  ].map(([perfil, shots, ref], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-900/50'}>
                      <td className="px-4 py-3 text-stone-300">{perfil}</td>
                      <td className="px-4 py-3 text-amber-400 font-mono font-semibold">{shots}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose-editorial space-y-6">

            <h2>Lo que "emborracharse" significa según la tasa de alcoholemia</h2>
            <p>
              El efecto del alcohol varía de forma predecible con la tasa en sangre:
            </p>
            <ul>
              <li><strong>0,2–0,5 g/l:</strong> Relajación, leve euforia. La mayoría de personas no lo nota mucho.</li>
              <li><strong>0,5–1,0 g/l:</strong> Desinhibición, deterioro leve de coordinación y juicio. El límite legal para conducir en España es 0,5 g/l.</li>
              <li><strong>1,0–1,5 g/l:</strong> Habla afectada, pérdida de equilibrio, tiempo de reacción aumentado. Lo que coloquialmente se llama "estar borracho".</li>
              <li><strong>1,5–2,5 g/l:</strong> Deterioro severo, posibles vómitos, dificultad para mantenerse de pie.</li>
              <li><strong>Por encima de 3 g/l:</strong> Zona de riesgo real. Pérdida de conocimiento, fallo respiratorio en casos extremos.</li>
            </ul>

            <h2>Qué hacer con esta información</h2>
            <p>
              La pregunta sobre cuántos tragos hacen falta para emborracharse suele esconder una
              pregunta más práctica: <em>¿cómo controlo mi consumo para no pasarme?</em>
            </p>
            <p>
              Lo más útil: conocer la ración estándar (40 ml de vodka al 40% = 12,7 g de alcohol = ~1,3 UBE),
              beber despacio, hacerlo siempre con comida en el estómago, e ir comprobando el efecto antes
              de seguir. El alcohol tarda entre 15 y 45 minutos en llegar al pico: muchas personas
              beben más de lo planeado porque el efecto del trago anterior aún no ha llegado.
            </p>

          </div>

          {/* Aviso consumo responsable */}
          <div className="p-5 bg-stone-900/50 border border-stone-800 rounded-xl">
            <p className="text-sm text-stone-400 leading-relaxed">
              Si tienes dudas sobre tu consumo de alcohol, el Teléfono de Atención a las Adicciones
              del Ministerio de Sanidad de España es el <strong className="text-stone-200">900 200 514</strong>.
              Gratuito y confidencial.
            </p>
          </div>

          {/* Related */}
          <div className="pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Relacionado</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="guia"
                title="Cuánto tarda en subir el alcohol"
                excerpt="Los factores que determinan la velocidad de absorción y por qué el efecto llega después de lo que parece."
                href="/guias/cuanto-tarda-en-subir-el-alcohol"
              />
              <ArticleCard
                type="consumo"
                title="Cuántas cervezas equivalen a un whisky"
                excerpt="Comparar bebidas por volumen no funciona. La forma correcta es por alcohol puro por ración."
                href="/consumo/cuantas-cervezas-equivalen-a-un-whisky"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
