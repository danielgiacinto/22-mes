import { useEffect } from 'react'
import type { Recuerdo } from '../tipos'

type Props = {
  recuerdo: Recuerdo | null
  alCerrar: () => void
}

export function VisorFoto({ recuerdo, alCerrar }: Props) {
  useEffect(() => {
    if (!recuerdo) return
    const tecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') alCerrar()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', tecla)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', tecla)
    }
  }, [recuerdo, alCerrar])

  if (!recuerdo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#142022]/72 px-4 py-8 backdrop-blur-sm"
      onClick={alCerrar}
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
    >
      <figure
        className="polaroid w-[min(92vw,420px)] rounded-[4px] px-3 pt-3 pb-6"
        onClick={(evento) => evento.stopPropagation()}
      >
        <span className="block max-h-[68vh] overflow-hidden bg-crema-suave">
          {recuerdo.esVideo ? (
            <video
              src={recuerdo.archivo}
              controls
              autoPlay
              playsInline
              className="max-h-[68vh] w-full object-contain"
            />
          ) : (
            <img
              src={recuerdo.archivo}
              alt={recuerdo.texto}
              className="max-h-[68vh] w-full object-contain"
            />
          )}
        </span>
        <figcaption className="font-mano mt-4 px-2 text-[1.25rem] leading-snug text-tinta">
          {recuerdo.texto}
        </figcaption>
        <button
          type="button"
          onClick={alCerrar}
          className="mt-4 w-full text-center text-[11px] tracking-[0.28em] text-tinta/50 uppercase"
        >
          Cerrar
        </button>
      </figure>
    </div>
  )
}
