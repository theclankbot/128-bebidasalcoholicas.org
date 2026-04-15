# bebidasalcoholicas.org — PROJECT-BRIEF

## Estado
Proyecto en redefinición / reconstrucción editorial.

## Objetivo
Reconstruir bebidasalcoholicas.org como una web editorial sobre bebidas alcohólicas en español con foco en:
- tipos de bebida
- cultura de producto
- comparativas y rankings
- servicio, graduación y consumo práctico
- consumo responsable

## Fuente de verdad actual
- Prompt maestro: `PROMPT.md`
- datos: `Migration/`
- resumen previo: `analysis-summary.json`

## Datos disponibles
- `Migration/gsc_pages_16m.csv`
- `Migration/gsc_queries_by_page_16m.csv`
- `Migration/bing_pages.csv`
- `analysis-summary.json`

## Lectura estratégica actual
La web vieja mezclaba:
- guías de bebida y marcas
- comparativas útiles
- FAQs clickbait sobre emborracharse
- pseudo-salud y pseudo-farmacología

La nueva marca NO debe crecer desde la parte pseudo-médica.
Debe crecer desde bebida + cultura + servicio + comparativas + consumo responsable.

## Clústeres prioritarios
- vodka / cómo tomar / cuánto pega / marcas de vodka de patata
- comparativas entre bebidas
- rankings y marcas por categoría o país
- dudas prácticas: conservación, olor, equivalencias, graduación

## Clúster delicado
- alcohol + medicamentos / síntomas / efectos corporales

Regla:
- solo rescatar URLs con señal clara
- tono prudente
- no ampliar el cluster más de la cuenta
- no convertir la web en consultorio

## Decisiones clave
- no usar como arquitectura principal taxonomías viejas tipo `fuerte`, `suave`, `sin-alcohol`
- priorizar hubs por bebida, comparativa, rankings, guías y consumo responsable
- mantener slugs legacy con señal solo cuando compense
- matar o consolidar contenido oportunista sin identidad

## Dirección visual
- premium
- sobria
- editorial
- adulta
- útil
- nada de estética de discoteca barata ni afiliado cutre

## Última actualización
2026-04-15
- reescrito `PROMPT.md` con posicionamiento más fuerte y control explícito del frente YMYL
- creado este `PROJECT-BRIEF.md`
