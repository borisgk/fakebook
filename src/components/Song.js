import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function Song({songs}) {

  const params = useParams()
  const song = songs[params.songID]

  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    ctx.font = "normal 1rem Roboto"
    let precedingString = ctx.measureText('Дело шло к рассв')
    let targetSymbol = ctx.measureText('е')
    let offset = precedingString.width + targetSymbol.width / 2
    let chordMarker = ctx.measureText('M')
    let markerLeft = offset - chordMarker.width / 2

    const marker = document.getElementById('marker')
    marker.style.left = `${markerLeft}px`
  })

  return (
    <div>
      <h2>{song.author} &middot; {song.title}</h2>
      {song.lyrics.map((line, index) =>
        <p key={index}>{line}</p>
      )}
      <canvas id="canvas"></canvas>
      <div id='marker'>M</div>
    </div>
  )
}
