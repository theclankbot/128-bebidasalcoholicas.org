import { getLiveArticleCountByCategory } from './articles'

export interface Category {
  slug: string
  name: string
  description: string
  shortDesc: string
  icon: string
  abv: string
  articleCount: number
  color: string
}

const baseCategories: Omit<Category, 'articleCount'>[] = [
  {
    slug: 'vodka',
    name: 'Vodka',
    description:
      'El destilado más neutro y versátil. Desde las tradiciones polaca y rusa hasta las versiones premium de todo el mundo. Perfil limpio, textura variable según la base.',
    shortDesc: 'El destilado más neutro. Cereal o patata, frío o en cóctel.',
    icon: '🫗',
    abv: '37,5–50%',
    color: 'from-blue-950/40',
  },
  {
    slug: 'whisky',
    name: 'Whisky',
    description:
      'Escocés, irlandés, bourbon, japonés. El mundo del whisky tiene más matices que cualquier otra categoría. Ahumado, afrutado, dulce o especiado: hay uno para cada contexto.',
    shortDesc: 'Escocés, bourbon, japonés. Cada origen, un perfil distinto.',
    icon: '🥃',
    abv: '40–68%',
    color: 'from-amber-950/40',
  },
  {
    slug: 'ron',
    name: 'Ron',
    description:
      'Destilado de caña de azúcar o melaza con una enorme variación de estilos: ligero caribeño, añejado latinoamericano, agrícola francés. Color, cuerpo y dulzor dependen del origen.',
    shortDesc: 'Caribeño, añejado, agrícola. Caña y melaza con muchos perfiles.',
    icon: '🍹',
    abv: '37,5–55%',
    color: 'from-orange-950/40',
  },
  {
    slug: 'vino',
    name: 'Vino',
    description:
      'Tinto, blanco, rosado, espumoso. La complejidad del vino viene de la uva, el suelo y la elaboración. Maridaje, temperatura de servicio y vocabulario básico para entenderlo de verdad.',
    shortDesc: 'Tinto, blanco, espumoso. Uva, origen y crianza.',
    icon: '🍷',
    abv: '10–16%',
    color: 'from-red-950/40',
  },
  {
    slug: 'cerveza',
    name: 'Cerveza',
    description:
      'Lager, ale, stout, IPA. La cerveza tiene más estilos de lo que parece. Maltas, lúpulos, fermentación: las variables que explican por qué dos cervezas pueden ser completamente distintas.',
    shortDesc: 'Lager, ale, IPA, stout. La complejidad que no te esperas.',
    icon: '🍺',
    abv: '4–12%',
    color: 'from-yellow-950/40',
  },
  {
    slug: 'tequila',
    name: 'Tequila y Mezcal',
    description:
      'Dos destilados de agave con identidades muy distintas. El tequila es preciso y limpio; el mezcal, más rústico y ahumado. Ambos tienen mucho más que contar que lo que el shot medio sugiere.',
    shortDesc: 'Agave en dos versiones: tequila limpio y mezcal ahumado.',
    icon: '🌵',
    abv: '38–55%',
    color: 'from-green-950/40',
  },
  {
    slug: 'ginebra',
    name: 'Ginebra',
    description:
      'London Dry, New Western, Sloe. La ginebra vive un momento de diversidad sin precedentes. El enebro es obligatorio; lo demás, abierto. Cómo distinguir un gin mediocre de uno que merece la pena.',
    shortDesc: 'Enebro y botánicos. De la London Dry a los estilos modernos.',
    icon: '🌿',
    abv: '37,5–50%',
    color: 'from-teal-950/40',
  },
  {
    slug: 'licores',
    name: 'Licores y digestivos',
    description:
      'Amaretto, Baileys, Chartreuse, Campari, Aperol. Los licores cubren todo el espectro de dulce a amargo. Aperitivos, digestivos y todo lo que no encaja bien en otra categoría.',
    shortDesc: 'Dulces, amargos, herbáceos. Del aperitivo al digestivo.',
    icon: '🍸',
    abv: '15–55%',
    color: 'from-purple-950/40',
  },
]

export const categories: Category[] = baseCategories.map((category) => ({
  ...category,
  articleCount: getLiveArticleCountByCategory(category.slug),
}))

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
