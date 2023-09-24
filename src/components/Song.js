import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function Song({songs}) {

  const params = useParams()
  const song = songs[params.songID]
  const chords = song.chords

  const offsetTop = 154
  const chordOffsetTop = 136
  const lineSpacing = 54
  const leftMargin = 30


  useEffect(() => {
    const canvas = document.getElementById('songcanvas')
    const ctx = canvas.getContext('2d', {alpha: false})
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, 800, 1500)

    // Author and title
    ctx.fillStyle = '#000000'
    ctx.font = '24px Roboto'
    const title = `${song.author} · ${song.title}`
    const titleMetrics = ctx.measureText(title)
    const titleLeft = (800 - titleMetrics.width) / 2
    ctx.fillText(title, titleLeft, 50)

    ctx.fillStyle = '#666666'
    ctx.font = '18px Roboto'

    let fromTop = offsetTop
    for (let line of song.lyrics) {
      ctx.fillText(line, leftMargin, fromTop)
      fromTop += lineSpacing
    }

    ctx.fillStyle = '#FF6666'

    
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
        ctx.fillText(chordText, leftOffset, chordOffsetTop + lineSpacing * chordLine)

        ctx.fillStyle = '#000000'
        ctx.fillText(targetText, precedingTextMetrics.width + leftMargin, offsetTop + lineSpacing * chordLine)
      }
    }

  })

  return (
    <div>
      <div className='songcanvas'><canvas id="songcanvas" width={800} height={1500}></canvas></div>
    </div>
  )
}
