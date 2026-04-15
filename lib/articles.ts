export type ArticleType = 'ranking' | 'guia' | 'comparativa' | 'consumo' | 'ymyl'
export type ArticleStatus = 'live' | 'planned'

export interface Article {
  slug: string
  categorySlug: string
  type: ArticleType
  status: ArticleStatus
  title: string
  excerpt: string
  href: string
  featured?: boolean
  signal?: 'high' | 'medium' | 'low'
}

export const articles: Article[] = [
  // VODKA
  {
    slug: 'como-tomar-vodka',
    categorySlug: 'vodka',
    type: 'guia',
    status: 'live',
    title: 'Cómo tomar vodka: temperatura, vasos, mezclas y errores comunes',
    excerpt:
      'Todo lo que determina si el vodka sabe bien o fatal: temperatura de servicio, tipo de vaso, hielo, mezcladores y la diferencia entre beberlo solo o en cóctel.',
    href: '/vodka/como-tomar-vodka',
    featured: true,
    signal: 'high',
  },
  {
    slug: '10-mejores-marcas-de-vodka-de-patata',
    categorySlug: 'vodka',
    type: 'ranking',
    status: 'live',
    title: 'Las 10 mejores marcas de vodka de patata',
    excerpt:
      'El vodka de patata tiene más cuerpo, más textura y un leve dulzor terroso que lo distingue del cereal. Estas son las marcas que realmente lo demuestran.',
    href: '/vodka/10-mejores-marcas-de-vodka-de-patata',
    featured: true,
    signal: 'high',
  },
  {
    slug: 'cuantos-tragos-de-vodka-para-emborracharse',
    categorySlug: 'vodka',
    type: 'ymyl',
    status: 'live',
    title: 'Cuántos tragos de vodka para emborracharse: graduación, tolerancia y factores reales',
    excerpt:
      'Lo que determina el efecto del vodka: ABV, tamaño de ración, velocidad, peso corporal, comida y tolerancia. Un marco práctico sin simplificaciones falsas.',
    href: '/vodka/cuantos-tragos-de-vodka-para-emborracharse',
    featured: false,
    signal: 'high',
  },
  {
    slug: 'vodkas-mas-caros-del-mundo',
    categorySlug: 'vodka',
    type: 'ranking',
    status: 'planned',
    title: 'Los 10 vodkas más caros del mundo: qué los justifica',
    excerpt:
      'Precios de tres cifras para arriba. Qué hay detrás: destilación, ingredientes, ediciones limitadas y cuándo el precio tiene sentido de verdad.',
    href: '/vodka/los-10-vodkas-mas-caros-del-mundo',
    featured: false,
    signal: 'medium',
  },
  {
    slug: 'a-que-huele-el-vodka-en-el-aliento',
    categorySlug: 'vodka',
    type: 'guia',
    status: 'planned',
    title: 'A qué huele el vodka en el aliento y por qué es el destilado más discreto',
    excerpt:
      'El vodka tiene menor olor residual que la cerveza o el vino. Qué determina el olor a alcohol y por qué el tipo de bebida importa menos de lo que se piensa.',
    href: '/vodka/a-que-huele-el-vodka-en-el-aliento',
    featured: false,
    signal: 'medium',
  },

  // WHISKY
  {
    slug: 'las-4-mejores-maneras-de-beber-whisky-jack-daniels',
    categorySlug: 'whisky',
    type: 'guia',
    status: 'planned',
    title: 'Las 4 mejores formas de beber Jack Daniel\'s',
    excerpt:
      'Solo, con hielo, con cola o en cóctel. Lo que cambia en boca y cuándo tiene sentido cada opción.',
    href: '/whisky/las-4-mejores-maneras-de-beber-el-whisky-de-jack-daniels',
    featured: false,
    signal: 'medium',
  },

  // CERVEZA
  {
    slug: 'las-10-mejores-cervezas-de-brasil',
    categorySlug: 'cerveza',
    type: 'ranking',
    status: 'live',
    title: 'Las 10 mejores cervezas de Brasil',
    excerpt:
      'Brasil tiene más que Brahma y Skol. Cervezas artesanales, IPA tropicales y pilsners que merecen atención. Con criterio real.',
    href: '/cerveza/las-10-mejores-cervezas-de-brasil',
    featured: true,
    signal: 'high',
  },
  {
    slug: 'mejores-cervezas-irlandesas',
    categorySlug: 'cerveza',
    type: 'ranking',
    status: 'planned',
    title: 'Las mejores cervezas irlandesas',
    excerpt:
      'De la Guinness en barril a las stout artesanales modernas. Irlanda produce cervezas con identidad clara que va mucho más allá del color negro.',
    href: '/cerveza/las-mejores-cervezas-irlandesas',
    featured: false,
    signal: 'medium',
  },
  {
    slug: 'mejores-cervezas-canadienses',
    categorySlug: 'cerveza',
    type: 'ranking',
    status: 'planned',
    title: 'Las mejores cervezas canadienses',
    excerpt:
      'El mercado cervecero canadiense ha crecido mucho. Desde las marcas clásicas hasta la escena craft que ha explotado en la última década.',
    href: '/cerveza/las-mejores-cervezas-canadienses',
    featured: false,
    signal: 'medium',
  },

  // RON
  {
    slug: 'mejores-marcas-de-cachaca',
    categorySlug: 'ron',
    type: 'ranking',
    status: 'planned',
    title: 'Las mejores marcas de cachaça',
    excerpt:
      'La cachaça no es ron, aunque comparten la caña. Estas son las marcas que mejor representan el destilado más propio de Brasil.',
    href: '/ron/mejores-marcas-de-cachaca',
    featured: false,
    signal: 'medium',
  },
  {
    slug: 'mejores-mezcladores-para-ron',
    categorySlug: 'ron',
    type: 'guia',
    status: 'planned',
    title: 'Los 5 mejores mezcladores para ron',
    excerpt:
      'Coca-Cola es la respuesta fácil. Pero el ron tiene mucho más potencial con los mezcladores correctos según el estilo de ron.',
    href: '/ron/mejores-mezcladores-para-ron',
    featured: false,
    signal: 'medium',
  },

  // VINO
  {
    slug: 'mejores-vinos-sudafrica',
    categorySlug: 'vino',
    type: 'ranking',
    status: 'planned',
    title: 'Los 10 mejores vinos de Sudáfrica',
    excerpt:
      'Sudáfrica produce vinos con relación calidad-precio difícil de igualar. Pinotage, Chenin Blanc y cabernets que sorprenden a quien los prueba.',
    href: '/vino/los-10-mejores-vinos-de-sudafrica',
    featured: false,
    signal: 'medium',
  },
  {
    slug: 'mejores-vinos-bajos-calorias',
    categorySlug: 'vino',
    type: 'ranking',
    status: 'planned',
    title: 'Los 10 mejores vinos bajos en calorías',
    excerpt:
      'Menos azúcar, menos alcohol, menos calorías. Qué buscar en la etiqueta y qué estilos de vino tienden a ser más ligeros sin perder carácter.',
    href: '/vino/los-10-mejores-vinos-bajos-en-calorias',
    featured: false,
    signal: 'medium',
  },

  // COMPARATIVAS
  {
    slug: 'que-alcohol-es-mas-parecido-al-ron',
    categorySlug: 'comparativas',
    type: 'comparativa',
    status: 'live',
    title: '¿Qué alcohol es más parecido al ron?',
    excerpt:
      'Perfil dulce, cuerpo medio y versatilidad en cóctel. Estas son las bebidas que más se acercan al ron y en qué contexto tienen sentido como sustituto.',
    href: '/comparativas/que-alcohol-es-mas-parecido-al-ron',
    featured: true,
    signal: 'high',
  },
  {
    slug: 'vodka-patata-vs-cereal',
    categorySlug: 'comparativas',
    type: 'comparativa',
    status: 'planned',
    title: 'Vodka de patata vs vodka de cereal: diferencias reales en sabor y textura',
    excerpt:
      'No es solo marketing. La base del vodka cambia el perfil en boca. Qué esperar de cada estilo y cuándo vale la pena pagar más por la versión de patata.',
    href: '/comparativas/vodka-de-patata-vs-vodka-de-cereal',
    featured: false,
    signal: 'medium',
  },
  {
    slug: 'vino-caliente-vs-vino-normal',
    categorySlug: 'comparativas',
    type: 'comparativa',
    status: 'planned',
    title: 'Vino caliente vs vino normal: ¿cambia el alcohol con la temperatura?',
    excerpt:
      'El vino caliente sube más rápido, dicen. ¿Es verdad? La respuesta tiene que ver con el vapor de etanol, la velocidad de absorción y cómo el calor cambia la percepción.',
    href: '/comparativas/vino-caliente-vs-vino-normal',
    featured: false,
    signal: 'medium',
  },

  // GUÍAS / CONSUMO
  {
    slug: 'cuanto-tarda-en-subir-el-alcohol',
    categorySlug: 'guias',
    type: 'guia',
    status: 'live',
    title: 'Cuánto tarda en subir el alcohol y qué lo determina',
    excerpt:
      'Entre 15 y 45 minutos, pero depende de muchos factores. Vacío de estómago, tipo de bebida, graduación, velocidad de ingesta, peso corporal: todas las variables explicadas.',
    href: '/guias/cuanto-tarda-en-subir-el-alcohol',
    featured: true,
    signal: 'high',
  },
  {
    slug: 'cuantas-cervezas-equivalen-a-un-whisky',
    categorySlug: 'consumo',
    type: 'consumo',
    status: 'live',
    title: 'Cuántas cervezas equivalen a un whisky',
    excerpt:
      'No se trata solo de volumen. Hay que comparar el alcohol puro por ración: qué contiene cada bebida, qué tamaño es estándar y por qué la graduación cambia todo.',
    href: '/consumo/cuantas-cervezas-equivalen-a-un-whisky',
    featured: true,
    signal: 'high',
  },
]

export function getLiveArticles(): Article[] {
  return articles.filter((a) => a.status === 'live')
}

export function getArticlesByType(
  type: ArticleType,
  options: { includePlanned?: boolean } = {},
): Article[] {
  const source = options.includePlanned ? articles : getLiveArticles()

  return source.filter((a) => a.type === type)
}

export function getArticlesByCategory(
  categorySlug: string,
  options: { includePlanned?: boolean } = {},
): Article[] {
  const source = options.includePlanned ? articles : getLiveArticles()

  return source.filter((a) => a.categorySlug === categorySlug)
}

export function getFeaturedArticles(): Article[] {
  return getLiveArticles().filter((a) => a.featured)
}

export function getLiveArticleCountByCategory(categorySlug: string): number {
  return getArticlesByCategory(categorySlug).length
}

export function getArticleBySlug(
  slug: string,
  options: { includePlanned?: boolean } = {},
): Article | undefined {
  const source = options.includePlanned ? articles : getLiveArticles()

  return source.find((a) => a.slug === slug)
}
