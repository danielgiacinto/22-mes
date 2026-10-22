import { motion } from 'framer-motion'
import { DecoracionBotanica } from './DecoracionBotanica'
import { Enredadera } from './Enredadera'

type Props = {
  anio: number
}

export function SeparadorAnio({ anio }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center py-10 sm:py-16"
    >
      <Enredadera clase="pointer-events-none absolute -left-4 top-[-20%] hidden h-48 w-16 opacity-50 sm:block sm:left-0 sm:h-56 sm:w-20" />
      <DecoracionBotanica
        variante="rama"
        clase="pointer-events-none absolute left-2 h-28 w-20 opacity-70 sm:left-8 sm:h-36 sm:w-24"
      />
      <p className="anio-grande text-[22vw] sm:text-[9rem]">{anio}</p>
      <DecoracionBotanica
        variante="tulipan"
        clase="pointer-events-none absolute right-1 h-28 w-16 opacity-70 sm:right-8 sm:h-40 sm:w-24"
      />
      <Enredadera clase="pointer-events-none absolute -right-6 top-[-10%] hidden h-44 w-16 -scale-x-100 opacity-45 sm:block sm:right-2 sm:h-52 sm:w-20" />
    </motion.div>
  )
}
