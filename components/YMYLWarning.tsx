interface YMYLWarningProps {
  compact?: boolean
}

export default function YMYLWarning({ compact = false }: YMYLWarningProps) {
  if (compact) {
    return (
      <div className="flex items-start gap-3 p-4 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-400">
        <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>
          Esta información es orientativa. Si tienes dudas sobre tu situación de salud o estás tomando
          medicación, consulta a tu médico antes de consumir alcohol.
        </p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-stone-900 border border-amber-500/20 rounded-xl">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-stone-200 mb-1 text-sm">Aviso importante</h4>
          <p className="text-sm text-stone-400 leading-relaxed">
            El contenido de esta página es informativo y tiene carácter general. No constituye consejo médico,
            farmacológico ni de salud. Cada situación personal es diferente. Si estás tomando medicación,
            tienes una condición de salud específica o tienes dudas sobre el consumo de alcohol en tu caso,
            consulta siempre a un profesional sanitario.
          </p>
        </div>
      </div>
    </div>
  )
}
