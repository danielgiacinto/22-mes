import { useEffect, useRef } from 'react'

export function FlorTridimensional() {
  const escena = useRef<HTMLDivElement>(null)
  const flor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nodoEscena = escena.current
    const nodoFlor = flor.current
    if (!nodoEscena || !nodoFlor) return

    const mover = (evento: PointerEvent) => {
      const caja = nodoEscena.getBoundingClientRect()
      const x = (evento.clientX - caja.left) / caja.width - 0.5
      const y = (evento.clientY - caja.top) / caja.height - 0.5
      nodoFlor.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 12}deg)`
    }

    const salir = () => {
      nodoFlor.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }

    window.addEventListener('pointermove', mover)
    nodoEscena.addEventListener('pointerleave', salir)
    return () => {
      window.removeEventListener('pointermove', mover)
      nodoEscena.removeEventListener('pointerleave', salir)
    }
  }, [])

  return (
    <div ref={escena} className="tulipan-escena relative mx-auto h-[34vh] w-full max-w-[520px] sm:h-[48vh] md:h-[54vh]">
      <div
        className="pointer-events-none absolute inset-x-[12%] top-[18%] h-[58%] rounded-full bg-[#f0d0c8]/50 blur-3xl"
        aria-hidden="true"
      />
      <div ref={flor} className="tulipan relative mx-auto h-full w-[min(100%,380px)]">
        <svg viewBox="0 0 320 420" className="h-full w-full drop-shadow-[0_30px_50px_rgba(201,137,137,0.28)]">
          <defs>
            <linearGradient id="tallo" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#8fa07e" />
              <stop offset="100%" stopColor="#6b7a5e" />
            </linearGradient>
            <radialGradient id="petalo-a" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#f7e4df" />
              <stop offset="55%" stopColor="#e8b4b4" />
              <stop offset="100%" stopColor="#c98989" />
            </radialGradient>
            <radialGradient id="petalo-b" cx="60%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#fff4f0" />
              <stop offset="60%" stopColor="#f0d0c8" />
              <stop offset="100%" stopColor="#d7a8a0" />
            </radialGradient>
            <filter id="suave" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.1" />
            </filter>
          </defs>
          <path
            d="M160 400C162 300 154 230 160 168"
            stroke="url(#tallo)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M162 290c48 10 70-18 74-46-28 8-52 6-74 18z"
            fill="#8fa07e"
            opacity=".9"
          />
          <path
            d="M158 320c-50 8-72-16-76-44 30 8 54 4 76 16z"
            fill="#7d8b6f"
            opacity=".88"
          />
          <g filter="url(#suave)">
            <path d="M160 176c-46-62-18-118 0-132 18 14 46 70 0 132z" fill="url(#petalo-a)" />
            <path d="M160 176c-38-40-52-96-28-124 32 22 44 78 28 124z" fill="url(#petalo-b)" />
            <path d="M160 176c38-40 52-96 28-124-32 22-44 78-28 124z" fill="url(#petalo-a)" />
            <path d="M160 176c-20-48-8-92 12-112 6 36-2 78-12 112z" fill="#f3d0cc" />
            <path d="M160 176c20-48 8-92-12-112-6 36 2 78 12 112z" fill="#d7a8a0" />
            <ellipse cx="160" cy="168" rx="10" ry="8" fill="#f7e6e2" />
          </g>
        </svg>
      </div>
    </div>
  )
}
