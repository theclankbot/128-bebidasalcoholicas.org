import Link from 'next/link'

interface CategoryCardProps {
  name: string
  description: string
  href: string
  articleCount?: number
  abv?: string
  icon?: string
}

export default function CategoryCard({
  name,
  description,
  href,
  articleCount,
  abv,
  icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block card-hover p-6 rounded-xl relative overflow-hidden"
    >
      {/* Accent line top */}
      <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-4">
        {icon && (
          <span className="text-3xl select-none">{icon}</span>
        )}
        {abv && (
          <span className="label text-stone-600">{abv}</span>
        )}
      </div>

      <h3 className="font-serif text-xl font-bold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors duration-200">
        {name}
      </h3>
      <p className="text-sm text-stone-400 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-stone-800">
        {articleCount !== undefined && (
          <span className="text-xs text-stone-600">
            {articleCount} artículo{articleCount !== 1 ? 's' : ''}
          </span>
        )}
        <span className="text-xs text-amber-500 font-medium flex items-center gap-1 ml-auto">
          Explorar
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
