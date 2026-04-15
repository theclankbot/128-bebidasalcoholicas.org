import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import AbvTable from '@/components/AbvTable'

export const metadata: Metadata = {
  title: 'Cuánto tarda en subir el alcohol y qué lo determina',
  description:
    'Entre 15 y 45 minutos en la mayoría de casos. Pero depende del tipo de bebida, comida en el estómago, peso, tolerancia y velocidad de ingesta.',
  alternates: { canonical: 'https://bebidasalcoholicas.org/guias/cuanto-tarda-en-subir-el-alcohol' },
}

const abvRows = [
  { bebida: 'Cerveza lager (330 ml, 5%)', abv: '5%', racion: '330 ml', alcoholPuro: '~13 g' },
  { bebida: 'Vino tinto (copa, 13%)', abv: '13%', racion: '150 ml', alcoholPuro: '~15 g' },
  { bebida: 'Vino espumoso (copa, 11%)', abv: '11%', racion: '150 ml', alcoholPuro: '~13 g' },
  { bebida: 'Whisky (medida, 40%)', abv: '40%', racion: '40 ml', alcoholPuro: '~13 g' },
  { bebida: 'Vodka shot (40%)', abv: '40%', racion: '40 ml', alcoholPuro: '~13 g' },
  { bebida: 'Ron con cola (40 ml ron)', abv: '40%', racion: '40 ml ron + cola', alcoholPuro: '~13 g' },
  { bebida: 'Tequila shot (38%)', abv: '38%', racion: '40 ml', alcoholPuro: '~12 g' },
]

export default function CuantoTardaSubirAlcoholPage() {
  return (
    <>
      <div className="bg-stone-950 border-b border-stone-800">
        <div className="container-prose py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/guias" className="hover:text-stone-300 transition-colors">Guías</Link>
            <span>/</span>
            <span className="text-stone-300">Cuánto tarda en subir</span>
          </nav>
          <span className="badge-guia mb-4">Guía</span>
          <h1 className="display-md text-stone-50 mt-3 mb-6">
            Cuánto tarda en subir el alcohol y qué lo determina
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed">
            La respuesta corta: entre 15 y 45 minutos para notar el efecto en la mayoría de situaciones.
            Pero esa horquilla cambia drásticamente según cinco variables que pocas personas tienen en cuenta.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-prose">
          <div className="prose-editorial space-y-6">

            <h2>La respuesta directa</h2>
            <p>
              El alcohol empieza a absorberse en el estómago y, sobre todo, en el intestino delgado.
              En condiciones normales (estómago con algo de comida, bebida moderada, temperatura ambiente),
              el pico de concentración en sangre se alcanza entre <strong>30 y 90 minutos</strong> después
              de empezar a beber.
            </p>
            <p>
              Pero la percepción subjetiva del efecto puede empezar antes: en algunos casos,
              <strong>10–15 minutos</strong> después de la primera bebida. Esto depende de lo que
              hayas comido, de la graduación y de tu tolerancia.
            </p>

            <h2>Los cinco factores que más influyen</h2>

            <h3>1. Si has comido o no</h3>
            <p>
              Este es el factor más determinante. Con el estómago vacío, el alcohol pasa al intestino
              delgado mucho más rápido y la absorción es casi inmediata. El efecto puede llegar en
              10–15 minutos y ser más intenso.
            </p>
            <p>
              Con comida en el estómago (especialmente grasas y proteínas), el vaciado gástrico se
              ralentiza, el alcohol se mezcla con el contenido estomacal y la absorción se frena.
              El pico puede llegar a los 60–90 minutos y el efecto total es menor.
            </p>
            <p>
              Las grasas son lo más efectivo para ralentizar la absorción. Los carbohidratos también
              ayudan, pero menos.
            </p>

            <h3>2. La graduación y el tipo de bebida</h3>
            <p>
              El alcohol en soluciones de baja concentración (cerveza, vino) se absorbe más rápido
              que en concentraciones muy altas (un destilado puro sin mezcla). Esto parece
              contraintuitivo, pero tiene explicación: las concentraciones muy altas provocan
              un cierre parcial del esfínter pilórico, ralentizando el paso al intestino.
            </p>
            <p>
              El rango con absorción más rápida está entre el 10% y el 30% de ABV. Por eso el vino
              y la cerveza diluida con gas suben relativamente rápido. Un shot de 40% puro puede
              tardar algo más, aunque el volumen total de alcohol es lo que determina el efecto final.
            </p>

            <h3>3. El gas carbónico</h3>
            <p>
              Las bebidas carbonatadas (cava, cerveza, combinados con soda) aceleran la absorción.
              El gas facilita el paso del alcohol a través del estómago al intestino delgado, donde
              la absorción es más eficiente. Por eso el cava y las mimosas suben más rápido de lo
              que parecería por su graduación.
            </p>

            <h3>4. El peso corporal y el porcentaje de agua</h3>
            <p>
              El alcohol se distribuye por el agua del organismo. A mayor masa corporal y mayor
              porcentaje de agua en el cuerpo, el alcohol se diluye más y la concentración en
              sangre por la misma cantidad es menor. Las mujeres tienen, en promedio, más porcentaje
              de grasa y menos de agua que los hombres, por lo que el mismo volumen de alcohol
              produce una concentración mayor.
            </p>

            <h3>5. La velocidad de ingesta</h3>
            <p>
              El hígado metaboliza el alcohol a una velocidad relativamente constante: entre 7 y 10 g
              de alcohol puro por hora en un adulto medio. Si bebes más rápido que esa tasa, el
              exceso se acumula en sangre. Si bebes despacio, el hígado puede mantenerse al ritmo y
              la concentración en sangre sube mucho menos.
            </p>

          </div>

          {/* ABV table */}
          <div className="my-10">
            <p className="label text-stone-500 mb-4">Referencia — Alcohol por ración estándar</p>
            <AbvTable
              rows={abvRows}
              caption="Comparación de alcohol puro por ración típica de distintas bebidas"
            />
            <p className="text-xs text-stone-600 mt-3">
              Una unidad de bebida estándar en España es 10 g de alcohol puro (1 UBE).
              El hígado metaboliza aproximadamente 1 UBE por hora.
            </p>
          </div>

          <div className="prose-editorial space-y-6">

            <h2>La tolerancia: por qué no es lo mismo que el efecto real</h2>
            <p>
              La tolerancia afecta a la <strong>percepción subjetiva</strong>, no a la concentración
              real de alcohol en sangre. Una persona con alta tolerancia puede sentir menos los
              efectos con la misma tasa de alcoholemia que alguien sin tolerancia.
            </p>
            <p>
              Esto es relevante porque la capacidad de conducir, la coordinación motora y el juicio
              se ven afectados por el alcohol independientemente de cómo te sientas. La tolerancia
              puede enmascarar el deterioro real.
            </p>

            <h2>Cuánto tarda en bajar</h2>
            <p>
              La tasa de eliminación es aproximadamente 0,15 mg/ml de sangre por hora (lo que en
              la práctica equivale a una bebida estándar por hora en condiciones normales).
              No existe ningún método que acelere este proceso de forma significativa:
            </p>
            <ul>
              <li>El café no baja el alcohol. Te mantiene despierto, pero la tasa sigue igual.</li>
              <li>El agua no baja el alcohol. Ayuda con la hidratación y los síntomas, no con el metabolismo.</li>
              <li>El ejercicio no acelera la eliminación de forma relevante.</li>
              <li>Solo el tiempo funciona.</li>
            </ul>

            <h2>El error más común</h2>
            <p>
              La mayoría de personas subestima el tiempo que tarda el alcohol en llegar al pico.
              Beben en las primeras horas sin sentir gran efecto, siguen bebiendo, y el pico llega
              cuando ya han ingerido más de lo que calculaban. Esto se agrava con el estómago lleno:
              puedes beber bastante sin sentir mucho durante la cena, y notar el efecto acumulado
              una hora después de terminar.
            </p>
            <p>
              El principio práctico más útil: <strong>el efecto real de lo que estás bebiendo
              llegará 30–60 minutos después, no ahora mismo</strong>. Esa demora es la que hace
              que muchas personas consuman más de lo que habían planeado.
            </p>

          </div>

          {/* Related */}
          <div className="mt-12 pt-10 border-t border-stone-800">
            <p className="label text-stone-500 mb-6">Relacionado</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ArticleCard
                type="consumo"
                title="Cuántas cervezas equivalen a un whisky"
                excerpt="Comparar bebidas por volumen no funciona. Cómo comparar por alcohol puro real."
                href="/consumo/cuantas-cervezas-equivalen-a-un-whisky"
              />
              <ArticleCard
                type="guia"
                title="Cómo tomar vodka sin errores"
                excerpt="Temperatura, vasos, mezcladores y los errores que arruinan el vodka más fino."
                href="/vodka/como-tomar-vodka"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
