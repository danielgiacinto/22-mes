const petalos = [
  { left: '4%', delay: '0s', duracion: '16s', tamano: 14, color: '#e8b4b4', deriva: '28px' },
  { left: '12%', delay: '2s', duracion: '19s', tamano: 10, color: '#d7a8a0', deriva: '-36px' },
  { left: '21%', delay: '6s', duracion: '22s', tamano: 16, color: '#f0d0c8', deriva: '18px' },
  { left: '33%', delay: '1s', duracion: '18s', tamano: 12, color: '#c98989', deriva: '-22px' },
  { left: '41%', delay: '8s', duracion: '21s', tamano: 9, color: '#ead3b5', deriva: '40px' },
  { left: '52%', delay: '3s', duracion: '17s', tamano: 15, color: '#e8b4b4', deriva: '-14px' },
  { left: '61%', delay: '11s', duracion: '20s', tamano: 11, color: '#d7c4b4', deriva: '26px' },
  { left: '73%', delay: '4s', duracion: '23s', tamano: 13, color: '#c98989', deriva: '-30px' },
  { left: '82%', delay: '7s', duracion: '16s', tamano: 10, color: '#f0d0c8', deriva: '12px' },
  { left: '91%', delay: '9s', duracion: '19s', tamano: 14, color: '#e8b4b4', deriva: '-24px' },
  { left: '28%', delay: '13s', duracion: '24s', tamano: 8, color: '#7d8b6f', deriva: '20px' },
  { left: '68%', delay: '5s', duracion: '18s', tamano: 9, color: '#ead3b5', deriva: '-18px' },
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
            height: petalo.tamano * 1.35,
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
