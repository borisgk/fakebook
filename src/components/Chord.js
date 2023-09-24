import React, { useEffect, useState } from 'react'

export default function Chord({position, name, lyrics}) {

    const [leftOffset, setLeftOffset] = useState(0)

    useEffect(() => {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        ctx.font = "1rem Roboto"

        const precedingText = lyrics.substring(0, position - 1)
        const targetText = lyrics.substring(position - 1 , position)
        const chordText = name

        const precedingTextMetrics = ctx.measureText(precedingText)
        const targetTextMetrics = ctx.measureText(targetText)
        const chordTextMetrics = ctx.measureText(chordText)

        setLeftOffset(precedingTextMetrics.width + targetTextMetrics.width / 2 - (chordTextMetrics.width + 6) / 2)

    }, [])

  return (
    <div className='chord' style={{left: `${leftOffset}px`}}>{name}</div>
  )
}
