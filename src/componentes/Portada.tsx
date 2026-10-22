import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FlorTridimensional } from './FlorTridimensional'

export function Portada() {
  const progreso = useRef(0)
  const textos = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const actualizar = () => {
      const tope = Math.max(1, window.innerHeight * 0.85)
      const valor = Math.min(1, Math.max(0, window.scrollY / tope))
      progreso.current = valor

      if (textos.current) {
        const entrada = Math.min(1, valor / 0.8)
        textos.current.style.opacity = String(0.97 + entrada * 0.03)
      }
    }
    actualizar()
    window.addEventListener('scroll', actualizar, { passive: true })
    return () => window.removeEventListener('scroll', actualizar)
  }, [])

  return (
    <section className="relative z-10 h-[165svh]">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden px-5 pt-6 pb-6 text-center">
        <p className="relative z-20 shrink-0 font-serif text-[11px] tracking-[0.42em] text-tinta/45 uppercase">
          Un mes más · nosotros
        </p>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          <div className="relative mx-auto h-[34vh] w-full max-w-[460px] sm:h-[40vh] sm:max-w-[520px] md:h-[44vh] md:max-w-[560px]">
            <FlorTridimensional progreso={progreso} />
          </div>

          <div ref={textos} className="relative z-20 w-[min(92%,36rem)] will-change-opacity">
            <div className="rounded-3xl bg-crema/80 px-4 py-4 backdrop-blur-[3px] sm:px-6 sm:py-5">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="font-serif text-[clamp(2.2rem,8vw,4.6rem)] leading-[0.95] font-light text-tinta"
              >
                Feliz mes, amor.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
                className="mt-3 font-serif text-[clamp(1.25rem,4.2vw,2rem)] italic font-light text-tinta"
              >
                Te amo mucho.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mx-auto mt-4 max-w-[30rem] font-serif text-[1.08rem] leading-relaxed text-tinta/80 italic sm:text-[1.28rem]"
              >
                Espero te guste esta sorpresita. Te dejo varios recuerdos…
              </motion.p>
              <a
                href="#recuerdos"
                className="mt-6 inline-flex flex-col items-center gap-2 text-[11px] tracking-[0.32em] text-tinta/50 uppercase"
              >
                Seguí bajando
                <span className="block h-8 w-px bg-tinta/25" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
