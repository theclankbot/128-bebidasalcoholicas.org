import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página no encontrada | Bebidas Alcohólicas',
  description: 'La página que buscas no está disponible en Bebidas Alcohólicas.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-20 text-stone-100">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">404</p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Esta página no está disponible.
      </h1>
      <p className="max-w-2xl text-lg text-stone-300">
        Puede que el contenido se haya movido, que el enlace esté roto o que la URL ya no exista.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300">
          Volver al inicio
        </Link>
        <Link href="/guias" className="rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900">
          Explorar guías
        </Link>
      </div>
    </main>
  )
}
