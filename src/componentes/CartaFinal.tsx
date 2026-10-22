import { motion } from 'framer-motion'
import { DecoracionBotanica } from './DecoracionBotanica'
import type { Recuerdo } from '../tipos'

type Props = {
  recuerdo: Recuerdo
}

function parrafos(texto: string) {
  const cortes = [
    'Tan bonita, hermosa y amable que sos siempre.',
    'Siento que lo nuestro es hermoso y conocerte fue espectacular.',
    'Gracias por ser la mejor novia del mundo.',
    'A pesar de todo lo que pase, siempre voy a estar para lo que quieras.',
    'Gracias por todo y feliz mes. Te amo por siempre y te extraño mucho.',
  ]

  const partes: string[] = []
  let resto = texto
  for (const corte of cortes) {
    const indice = resto.indexOf(corte)
    if (indice <= 0) continue
    partes.push(resto.slice(0, indice).trim())
    resto = resto.slice(indice).trim()
  }
  if (resto) partes.push(resto)
  return partes
}

export function CartaFinal({ recuerdo }: Props) {
  return (
    <section className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <DecoracionBotanica
        variante="rosa"
        clase="pointer-events-none absolute -top-4 -left-2 h-32 w-28 opacity-60 sm:left-6"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_1.1fr] md:gap-14"
      >
        <div className="polaroid mx-auto w-[min(86vw,340px)] rotate-[-1.4deg] rounded-[4px] px-3 pt-3 pb-6 md:mx-0">
          <img
            src={recuerdo.archivo}
            alt="Las flores que te regalé"
            className="aspect-[4/5] w-full object-cover"
          />
          <p className="font-mano mt-3 text-center text-xl text-tinta/70">Para vos, siempre.</p>
        </div>

        <div className="font-serif text-[1.12rem] leading-[1.75] text-tinta/85 sm:text-[1.22rem]">
          <p className="text-[11px] tracking-[0.34em] text-tinta/40 uppercase">Una última.</p>
          {parrafos(recuerdo.texto).map((parrafo) => (
            <p key={parrafo} className="mt-5">
              {parrafo}
            </p>
          ))}
          <p className="font-firma mt-10 text-[2.35rem] leading-none text-tinta">
            Con amor, Daniel Giacinto
          </p>
        </div>
      </motion.div>
    </section>
  )
}
