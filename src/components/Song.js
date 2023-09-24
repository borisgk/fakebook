import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function Song({songs}) {

  const params = useParams()
  const song = songs[params.songID]
  const chords = song.chords

  useEffect(() => {
    const canvas = document.getElementById('songcanvas')
    const ctx = canvas.getContext('2d', {alpha: false})
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, 800, 1500)
    ctx.fillStyle = '#666666'
    ctx.font = '18px Roboto'

    let offsetTop = 54
    for (let line of song.lyrics) {
      ctx.fillText(line, 30, offsetTop)
      offsetTop += 54
    }

    ctx.fillStyle = '#FF6666'

    // console.log(song.chords)
    let chordOffsetTop = 36
    for (let chordLine in chords) {
      for (let chord in chords[chordLine]) {

        const precedingText = song.lyrics[chordLine].substring(0, chord - 1)
        console.log(chord, precedingText)
        const targetText = song.lyrics[chordLine].substring(chord - 1 , chord)
        console.log(chord, targetText)
        const chordText = chords[chordLine][chord]

        const precedingTextMetrics = ctx.measureText(precedingText)
        const targetTextMetrics = ctx.measureText(targetText)
        const chordTextMetrics = ctx.measureText(chordText)

        const leftOffset = precedingTextMetrics.width + targetTextMetrics.width / 2 - chordTextMetrics.width / 2 + 30
        
        ctx.fillStyle = '#FF6666'
        ctx.fillText(chordText, leftOffset, chordOffsetTop + 54 * chordLine)

        ctx.fillStyle = '#000000'
        ctx.fillText(targetText, precedingTextMetrics.width + 30, 54 + 54 * chordLine)
      }
    }

  })

  return (
    <div>
      <h2>{song.author} &middot; {song.title}</h2>
      <div className='songcanvas'><canvas id="songcanvas" width={800} height={1500}></canvas></div>
    </div>
  )
}
