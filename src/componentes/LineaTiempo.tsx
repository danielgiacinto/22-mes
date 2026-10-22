import { anios, recuerdos } from '../datos/recuerdos'
import type { Recuerdo } from '../tipos'
import { CartaFinal } from './CartaFinal'
import { SeparadorAnio } from './SeparadorAnio'
import { TarjetaPolaroid } from './TarjetaPolaroid'

type Props = {
  alAbrir: (recuerdo: Recuerdo) => void
}

export function LineaTiempo({ alAbrir }: Props) {
  const recuerdosLinea = recuerdos.filter((recuerdo) => !recuerdo.esCarta)
  const carta = recuerdos.find((recuerdo) => recuerdo.esCarta)

  return (
    <section id="recuerdos" className="relative px-4 pb-10 sm:px-8">
      <div className="mx-auto mb-6 max-w-xl text-center">
        <p className="font-serif text-[11px] tracking-[0.38em] text-tinta/40 uppercase">
          Nuestros recuerdos
        </p>
        <h2 className="mt-3 font-serif text-[clamp(2rem,7vw,3.4rem)] font-light text-tinta">
          Una línea de tiempo para vos
        </h2>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="linea-central pointer-events-none absolute top-0 bottom-8 left-6 w-px md:left-1/2 md:-translate-x-1/2" />

        {anios.map((anio) => {
          const delAnio = recuerdosLinea.filter((recuerdo) => recuerdo.anio === anio)
          return (
            <div key={anio} className="relative">
              <SeparadorAnio anio={anio} />
              <div className="flex flex-col gap-14 py-4 pl-8 md:gap-20 md:pl-0">
                {delAnio.map((recuerdo, indice) => (
                  <div key={recuerdo.id} className="relative md:grid md:grid-cols-2 md:items-center">
                    <span className="absolute top-8 left-[18px] z-10 h-3 w-3 rounded-full border border-[#d7c4b4] bg-crema md:left-1/2 md:-translate-x-1/2" />
                    {indice % 2 === 0 ? (
                      <>
                        <TarjetaPolaroid
                          recuerdo={recuerdo}
                          lado="izquierda"
                          alAbrir={alAbrir}
                        />
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <TarjetaPolaroid
                          recuerdo={recuerdo}
                          lado="derecha"
                          alAbrir={alAbrir}
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {carta ? <CartaFinal recuerdo={carta} /> : null}
    </section>
  )
}
