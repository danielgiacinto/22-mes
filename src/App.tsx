import { useState } from 'react'
import { FondoJardin } from './componentes/FondoJardin'
import { LineaTiempo } from './componentes/LineaTiempo'
import { PetalosFlotantes } from './componentes/PetalosFlotantes'
import { Portada } from './componentes/Portada'
import { VisorFoto } from './componentes/VisorFoto'
import type { Recuerdo } from './tipos'

function App() {
  const [abierto, setAbierto] = useState<Recuerdo | null>(null)

  return (
    <div className="relative min-h-svh bg-crema text-tinta">
      <div className="grano" aria-hidden="true" />
      <FondoJardin />
      <PetalosFlotantes />
      <Portada />
      <LineaTiempo alAbrir={setAbierto} />

      <footer className="px-5 pb-12 text-center">
        <p className="font-serif text-sm italic text-tinta/40">Feliz mes. Te amo.</p>
      </footer>

      <VisorFoto recuerdo={abierto} alCerrar={() => setAbierto(null)} />
    </div>
  )
}

export default App
