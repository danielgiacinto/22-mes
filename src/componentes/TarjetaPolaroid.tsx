import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { Recuerdo } from '../tipos'

type Props = {
  recuerdo: Recuerdo
  lado: 'izquierda' | 'derecha'
  alAbrir: (recuerdo: Recuerdo) => void
}

export function TarjetaPolaroid({ recuerdo, lado, alAbrir }: Props) {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!recuerdo.esVideo || !video.current) return
    const nodo = video.current
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) void nodo.play()
        else nodo.pause()
      },
      { threshold: 0.4 },
    )
    observador.observe(nodo)
    return () => observador.disconnect()
  }, [recuerdo.esVideo])

  const alineacion =
    lado === 'izquierda'
      ? 'md:mr-auto md:ml-0 md:origin-right'
      : 'md:ml-auto md:mr-0 md:origin-left'

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative z-[2] mx-auto w-full max-w-[320px] md:w-[min(42vw,340px)] ${alineacion}`}
    >
      <button
        type="button"
        onClick={() => alAbrir(recuerdo)}
        className="polaroid group w-full rounded-[4px] px-3 pt-3 pb-5 text-left"
        style={{ ['--giro' as string]: `${recuerdo.rotacion}deg` }}
      >
        <span className="absolute -top-2 left-8 h-5 w-16 rotate-[-8deg] bg-[#f0e2b8]/80 shadow-sm" />
        <span className="block aspect-[4/5] overflow-hidden bg-crema-suave">
          {recuerdo.esVideo ? (
            <video
              ref={video}
              src={recuerdo.archivo}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={recuerdo.archivo}
              alt={recuerdo.texto}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          )}
        </span>
        <p className="font-mano mt-3 px-1 text-[1.2rem] leading-snug text-tinta/85">
          {recuerdo.texto}
        </p>
        <span className="font-mano mt-2 block text-right text-sm text-tinta/40">
          {recuerdo.anio}
        </span>
      </button>
    </motion.article>
  )
}
