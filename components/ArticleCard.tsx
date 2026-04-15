import Link from 'next/link'

type ArticleType = 'ranking' | 'guia' | 'comparativa' | 'consumo' | 'ymyl' | 'categoria'

interface ArticleCardProps {
  type: ArticleType
  title: string
  excerpt: string
  href: string
  category?: string
}

const typeLabels: Record<ArticleType, string> = {
  ranking: 'Ranking',
  guia: 'Guía',
  comparativa: 'Comparativa',
  consumo: 'Consumo real',
  ymyl: 'Contenido sensible',
  categoria: 'Categoría',
}

const typeBadge: Record<ArticleType, string> = {
  ranking: 'badge-ranking',
  guia: 'badge-guia',
  comparativa: 'badge-comparativa',
  consumo: 'badge-consumo',
  ymyl: 'badge-ymyl',
  categoria: 'badge-categoria',
}

export default function ArticleCard({
  type,
  title,
  excerpt,
  href,
  category,
}: ArticleCardProps) {
  return (
    <Link href={href} className="group block card-hover p-5 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <span className={typeBadge[type]}>{typeLabels[type]}</span>
        {category && (
          <span className="text-xs text-stone-500">{category}</span>
        )}
      </div>
      <h3 className="font-serif text-base font-semibold text-stone-100 leading-snug mb-2 group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-stone-400 leading-relaxed line-clamp-2">{excerpt}</p>
      <div className="flex items-center gap-1 mt-4 text-xs text-amber-500 font-medium">
        Leer
        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
