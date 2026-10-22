import { motion } from 'framer-motion'
import { FlorTridimensional } from './FlorTridimensional'

export function Portada() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-14 pt-8 text-center">
      <p className="font-serif text-[11px] tracking-[0.42em] text-tinta/45 uppercase">
        Un mes más · nosotros
      </p>

      <div className="relative mt-1 w-full">
        <FlorTridimensional />
        <div className="relative z-10 -mt-6 px-2 sm:-mt-10 md:absolute md:inset-x-0 md:top-[40%] md:mt-0">
          <div className="mx-auto max-w-[22rem] py-2 md:max-w-none">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="font-serif text-[clamp(2.5rem,9vw,5.6rem)] leading-[0.95] font-light text-tinta"
            >
              Feliz mes, amor.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
              className="mt-3 font-serif text-[clamp(1.35rem,4.4vw,2.15rem)] italic font-light text-tinta/80"
            >
              Te amo mucho.
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 mt-2 max-w-[34rem] px-2"
      >
        <p className="font-serif text-[1.15rem] leading-relaxed text-tinta-suave italic sm:text-[1.3rem]">
          Espero te guste esta sorpresita. Te dejo varios recuerdos…
        </p>
        <a
          href="#recuerdos"
          className="mt-8 inline-flex flex-col items-center gap-2 text-[11px] tracking-[0.32em] text-tinta/50 uppercase"
        >
          Seguí bajando
          <span className="block h-10 w-px bg-tinta/25" />
        </a>
      </motion.div>
    </section>
  )
}
