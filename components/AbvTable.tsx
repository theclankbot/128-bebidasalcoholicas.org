interface AbvRow {
  bebida: string
  abv: string
  racion: string
  alcoholPuro: string
}

interface AbvTableProps {
  rows: AbvRow[]
  caption?: string
}

export default function AbvTable({ rows, caption }: AbvTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-800">
      <table className="w-full text-sm">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="bg-stone-800/60">
            <th className="text-left px-4 py-3 text-stone-300 font-semibold">Bebida</th>
            <th className="text-left px-4 py-3 text-stone-300 font-semibold">ABV</th>
            <th className="text-left px-4 py-3 text-stone-300 font-semibold">Ración típica</th>
            <th className="text-left px-4 py-3 text-stone-300 font-semibold">Alcohol puro aprox.</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-900/50'}>
              <td className="px-4 py-3 text-stone-200 font-medium">{row.bebida}</td>
              <td className="px-4 py-3 text-amber-400 font-mono">{row.abv}</td>
              <td className="px-4 py-3 text-stone-400">{row.racion}</td>
              <td className="px-4 py-3 text-stone-400">{row.alcoholPuro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
