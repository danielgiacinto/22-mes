import { Environment } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, type MutableRefObject } from 'react'
import {
  Color,
  DoubleSide,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  MathUtils,
  MeshPhysicalMaterial,
  Shape,
} from 'three'

type PropsFlor = {
  progreso: MutableRefObject<number>
}

function geometriaPetalo(ancho: number, alto: number, curva: number, colorBase: string, colorPunta: string) {
  const forma = new Shape()
  forma.moveTo(0, 0)
  forma.bezierCurveTo(ancho * 0.42, alto * 0.08, ancho * 0.95, alto * 0.38, ancho * 0.78, alto * 0.68)
  forma.bezierCurveTo(ancho * 0.58, alto * 0.9, ancho * 0.2, alto * 1.02, 0, alto)
  forma.bezierCurveTo(-ancho * 0.2, alto * 1.02, -ancho * 0.58, alto * 0.9, -ancho * 0.78, alto * 0.68)
  forma.bezierCurveTo(-ancho * 0.95, alto * 0.38, -ancho * 0.42, alto * 0.08, 0, 0)

  const geometria = new ExtrudeGeometry(forma, {
    depth: 0.028,
    bevelEnabled: true,
    bevelThickness: 0.014,
    bevelSize: 0.012,
    bevelSegments: 3,
    curveSegments: 28,
  })

  const posicion = geometria.attributes.position
  const colores = new Float32Array(posicion.count * 3)
  const base = new Color(colorBase)
  const punta = new Color(colorPunta)
  const actual = new Color()

  for (let i = 0; i < posicion.count; i += 1) {
    const y = posicion.getY(i)
    const x = posicion.getX(i)
    const t = Math.max(0, Math.min(1, y / alto))
    const pliegue = Math.min(1, Math.abs(x) / Math.max(0.001, ancho))
    posicion.setZ(i, posicion.getZ(i) - t * t * curva)
    actual.copy(base).lerp(punta, t ** 1.05)
    actual.offsetHSL(0, 0, -0.1 * (1 - t) - pliegue * 0.04)
    colores[i * 3] = actual.r
    colores[i * 3 + 1] = actual.g
    colores[i * 3 + 2] = actual.b
  }

  geometria.setAttribute('color', new Float32BufferAttribute(colores, 3))
  geometria.computeVertexNormals()
  geometria.translate(0, 0, -0.014)
  return geometria
}

function PetaloViento({
  geometria,
  material,
  posicion,
  rotacion,
  escala = 1,
  fase,
}: {
  geometria: ExtrudeGeometry
  material: MeshPhysicalMaterial
  posicion: [number, number, number]
  rotacion: [number, number, number]
  escala?: number
  fase: number
}) {
  const grupo = useRef<Group>(null)

  useFrame((estado) => {
    if (!grupo.current) return
    const t = estado.clock.elapsedTime
    grupo.current.rotation.x = rotacion[0] + Math.sin(t * 0.7 + fase) * 0.02
    grupo.current.rotation.y = rotacion[1]
    grupo.current.rotation.z = rotacion[2] + Math.sin(t * 0.85 + fase * 0.8) * 0.028
  })

  return (
    <group ref={grupo} position={posicion}>
      <mesh geometry={geometria} material={material} scale={escala} />
    </group>
  )
}

function Tulipan() {
  const grupo = useRef<Group>(null)
  const tactil = useRef(false)
  const reducir = useRef(false)

  const geoAfuera = useMemo(
    () => geometriaPetalo(0.4, 1.62, 0.42, '#9d6a66', '#f0ddd8'),
    [],
  )
  const geoAdentro = useMemo(
    () => geometriaPetalo(0.28, 1.28, 0.3, '#c4928c', '#f7ece8'),
    [],
  )
  const geoHoja = useMemo(
    () => geometriaPetalo(0.22, 1.55, 0.08, '#3f4d36', '#8b9878'),
    [],
  )
  const matFlor = useMemo(
    () =>
      new MeshPhysicalMaterial({
        vertexColors: true,
        roughness: 0.52,
        metalness: 0,
        sheen: 0.6,
        sheenRoughness: 0.5,
        sheenColor: new Color('#f3d9d4'),
        clearcoat: 0.05,
        clearcoatRoughness: 0.78,
        side: DoubleSide,
      }),
    [],
  )
  const matHoja = useMemo(
    () =>
      new MeshPhysicalMaterial({
        vertexColors: true,
        roughness: 0.82,
        metalness: 0,
        sheen: 0.12,
        sheenColor: new Color('#c5d2a8'),
        side: DoubleSide,
      }),
    [],
  )

  useEffect(() => {
    tactil.current = window.matchMedia('(pointer: coarse)').matches
    reducir.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => {
      geoAfuera.dispose()
      geoAdentro.dispose()
      geoHoja.dispose()
      matFlor.dispose()
      matHoja.dispose()
    }
  }, [geoAfuera, geoAdentro, geoHoja, matFlor, matHoja])

  useFrame((estado) => {
    if (!grupo.current) return
    const tiempo = estado.clock.elapsedTime
    const viento = reducir.current ? 0 : Math.sin(tiempo * 0.45) * 0.035
    const mouseY = tactil.current ? 0 : estado.pointer.x * 0.14
    const mouseX = tactil.current ? 0 : -estado.pointer.y * 0.06
    grupo.current.rotation.y = MathUtils.lerp(grupo.current.rotation.y, mouseY + viento, 0.06)
    grupo.current.rotation.x = MathUtils.lerp(grupo.current.rotation.x, mouseX + viento * 0.25, 0.06)
  })

  const afuera = [0, 60, 120, 180, 240, 300]
  const adentro = [30, 150, 270]

  return (
    <group ref={grupo}>
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.026, 0.038, 2.05, 20]} />
        <meshStandardMaterial color="#4d5a3f" roughness={0.84} />
      </mesh>

      <PetaloViento
        geometria={geoHoja}
        material={matHoja}
        posicion={[-0.06, 0.28, 0.08]}
        rotacion={[0.42, 0.18, 1.18]}
        fase={0.4}
      />
      <PetaloViento
        geometria={geoHoja}
        material={matHoja}
        posicion={[0.08, 0.48, -0.06]}
        rotacion={[0.34, -0.28, -1.14]}
        escala={0.86}
        fase={1.1}
      />

      {afuera.map((angulo, indice) => (
        <PetaloViento
          key={`afuera-${angulo}`}
          geometria={geoAfuera}
          material={matFlor}
          posicion={[0, 1.9, 0]}
          rotacion={[-0.22, MathUtils.degToRad(angulo), indice % 2 === 0 ? -0.04 : 0.04]}
          fase={indice * 0.7}
        />
      ))}
      {adentro.map((angulo, indice) => (
        <PetaloViento
          key={`adentro-${angulo}`}
          geometria={geoAdentro}
          material={matFlor}
          posicion={[0, 1.96, 0]}
          rotacion={[-0.1, MathUtils.degToRad(angulo), 0]}
          escala={0.86}
          fase={indice * 0.55 + 0.3}
        />
      ))}
    </group>
  )
}

function EscenaConScroll({ progreso }: PropsFlor) {
  const envoltorio = useRef<Group>(null)
  const suavizado = useRef(0)

  useFrame((_, delta) => {
    if (!envoltorio.current) return
    suavizado.current = MathUtils.damp(suavizado.current, progreso.current, 1.7, delta)
    const p = suavizado.current * suavizado.current * (3 - 2 * suavizado.current)
    envoltorio.current.rotation.y = p * 0.28
    envoltorio.current.rotation.x = p * 0.05
    envoltorio.current.position.y = -1.82 + p * 0.1
    envoltorio.current.scale.setScalar(0.88 - p * 0.035)
  })

  return (
    <group ref={envoltorio} position={[0, -1.82, 0]}>
      <Tulipan />
    </group>
  )
}

export function FlorTridimensional({ progreso }: PropsFlor) {
  return (
    <div className="tulipan-escena relative mx-auto h-full w-full max-w-[560px]">
      <div className="pointer-events-none absolute inset-x-[18%] top-[18%] h-[46%] rounded-full bg-[#e8cfc8]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-5 w-[34%] -translate-x-1/2 rounded-full bg-[#d7c4b8]/22 blur-2xl" />
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.12, 8], fov: 26 }}
        style={{ background: 'transparent' }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.08, 0)
        }}
      >
        <hemisphereLight args={['#fff6ef', '#8a8f7a', 0.85]} />
        <directionalLight position={[2.6, 5.4, 4]} intensity={1.15} color="#fff6ee" />
        <directionalLight position={[-2.8, 1.8, -1.6]} intensity={0.35} color="#e4c4be" />
        <Environment preset="studio" environmentIntensity={0.22} />
        <EscenaConScroll progreso={progreso} />
      </Canvas>
    </div>
  )
}
