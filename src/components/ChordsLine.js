import React from 'react'
import Chord from './Chord'

export default function ChordsLine({chords, lyrics}) {
  return (
    <div className='chords-line'>
        {Object.keys(chords).map((key, index) => 
            <Chord position={key} name={chords[key]} lyrics={lyrics} />
        )}
    </div>
  )
}
