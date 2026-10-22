const petalos = [
  { left: '5%', delay: '-3s', duracion: '18s', tamano: 13, color: '#e8b4b4', deriva: '26px' },
  { left: '13%', delay: '-11s', duracion: '21s', tamano: 9, color: '#d7a8a0', deriva: '-32px' },
  { left: '22%', delay: '-7s', duracion: '19s', tamano: 15, color: '#f0d0c8', deriva: '16px' },
  { left: '31%', delay: '-16s', duracion: '22s', tamano: 11, color: '#c98989', deriva: '-20px' },
  { left: '42%', delay: '-5s', duracion: '20s', tamano: 8, color: '#ead3b5', deriva: '34px' },
  { left: '53%', delay: '-13s', duracion: '17s', tamano: 14, color: '#e8b4b4', deriva: '-12px' },
  { left: '64%', delay: '-9s', duracion: '23s', tamano: 10, color: '#d7c4b4', deriva: '22px' },
  { left: '74%', delay: '-18s', duracion: '19s', tamano: 12, color: '#c98989', deriva: '-28px' },
  { left: '84%', delay: '-4s', duracion: '21s', tamano: 9, color: '#f0d0c8', deriva: '14px' },
  { left: '93%', delay: '-14s', duracion: '18s', tamano: 13, color: '#e8b4b4', deriva: '-24px' },
  { left: '27%', delay: '-8s', duracion: '24s', tamano: 8, color: '#8fa07e', deriva: '18px' },
  { left: '69%', delay: '-15s', duracion: '20s', tamano: 9, color: '#ead3b5', deriva: '-16px' },
]

export function PetalosFlotantes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {petalos.map((petalo, indice) => (
        <span
          key={indice}
          className="petalo"
          style={{
            left: petalo.left,
            width: petalo.tamano,
            height: petalo.tamano * 1.4,
            background: petalo.color,
            animationDelay: petalo.delay,
            animationDuration: petalo.duracion,
            ['--deriva' as string]: petalo.deriva,
          }}
        />
      ))}
    </div>
  )
}
