import { Enredadera } from './Enredadera'
import { DecoracionBotanica } from './DecoracionBotanica'

export function FondoJardin() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <Enredadera clase="absolute -left-6 top-[-2%] h-[78vh] w-24 opacity-60 sm:-left-2 sm:w-36 md:w-44 md:opacity-75" />
      <Enredadera clase="absolute -right-6 top-[6%] h-[76vh] w-24 -scale-x-100 opacity-55 sm:right-0 sm:w-36 md:w-44 md:opacity-70" />

      <DecoracionBotanica
        variante="rosa"
        clase="absolute top-[18%] left-[8%] hidden h-28 w-24 opacity-50 sm:block md:left-[12%] md:h-36 md:w-32 md:opacity-60"
      />
      <DecoracionBotanica
        variante="tulipan"
        clase="absolute top-[22%] right-[6%] hidden h-32 w-20 opacity-50 sm:block md:right-[10%] md:h-40 md:w-24"
      />
      <DecoracionBotanica
        variante="rama"
        clase="absolute top-[70%] left-[3%] h-24 w-16 opacity-45 sm:h-32 sm:w-24 md:left-[6%]"
      />
      <DecoracionBotanica
        variante="rosa"
        clase="absolute top-[78%] right-[4%] h-24 w-20 opacity-45 sm:h-32 sm:w-28 md:right-[8%]"
      />

      <Enredadera clase="absolute -left-16 top-[120vh] hidden h-[110vh] w-40 opacity-40 lg:block" />
      <Enredadera clase="absolute -right-16 top-[210vh] hidden h-[110vh] w-40 -scale-x-100 opacity-35 lg:block" />
      <Enredadera clase="absolute -left-14 top-[340vh] hidden h-[100vh] w-36 opacity-35 lg:block" />
      <Enredadera clase="absolute -right-14 top-[470vh] hidden h-[100vh] w-36 -scale-x-100 opacity-35 lg:block" />
    </div>
  )
}
