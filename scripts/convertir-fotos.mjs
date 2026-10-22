import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import ffmpegStatic from 'ffmpeg-static'

const require = createRequire(import.meta.url)
const convertirHeic = require('heic-convert')

const origen = 'C:\\Users\\danie\\Downloads\\fotos'
const destino = path.resolve('public/fotos')

await mkdir(destino, { recursive: true })

const archivos = await readdir(origen)

function nombreSalida(nombre) {
  const match = nombre.match(/^(\d+)foto-(\d{4})\./i)
  if (!match) return null
  const numero = String(match[1]).padStart(2, '0')
  const anio = match[2]
  const extension = nombre.toLowerCase().endsWith('.mov') ? 'mp4' : 'jpg'
  return `${numero}-${anio}.${extension}`
}

function ejecutarFfmpeg(entrada, salida) {
  return new Promise((resolve, reject) => {
    const proceso = spawn(ffmpegStatic, [
      '-y',
      '-i',
      entrada,
      '-vf',
      'scale=1280:-2',
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-crf',
      '26',
      '-preset',
      'medium',
      '-an',
      '-movflags',
      '+faststart',
      salida,
    ])

    let error = ''
    proceso.stderr.on('data', (pieza) => {
      error += pieza.toString()
    })
    proceso.on('close', (codigo) => {
      if (codigo === 0) resolve()
      else reject(new Error(error.slice(-400)))
    })
  })
}

async function aJpeg(buffer, salida) {
  await sharp(buffer)
    .rotate()
    .resize({
      width: 1400,
      height: 1400,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(salida)
}

for (const archivo of archivos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
  const salida = nombreSalida(archivo)
  if (!salida) continue

  const rutaOrigen = path.join(origen, archivo)
  const rutaDestino = path.join(destino, salida)
  const extension = path.extname(archivo).toLowerCase()

  try {
    if (extension === '.mov') {
      await ejecutarFfmpeg(rutaOrigen, rutaDestino)
    } else if (extension === '.heic') {
      const buffer = await readFile(rutaOrigen)
      const jpeg = await convertirHeic({
        buffer,
        format: 'JPEG',
        quality: 0.86,
      })
      await aJpeg(jpeg, rutaDestino)
    } else {
      const buffer = await readFile(rutaOrigen)
      await aJpeg(buffer, rutaDestino)
    }
    console.log(`OK ${archivo} -> ${salida}`)
  } catch (error) {
    console.error(`ERROR ${archivo}`, error.message)
  }
}

await writeFile(path.join(destino, '.gitkeep'), '')
console.log('Listo')
