import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ChordsLine from './ChordsLine'

export default function SongHTML({songs}) {

    const params = useParams()
    const song = songs[params.songID]
    const chords = song.chords
  
    return (
        <div>
            <h2>{song.author} &middot; {song.title}</h2>
            <div className='lyrics-container'>
                {song.lyrics.map((line, index) => 
                    <div className='lyrics-line' key={index}>{line}
                        {chords ? <ChordsLine chords={chords[index]} lyrics={line} /> : null}
                    </div>
                )}
            </div>
            <canvas id="canvas" width={0} height={0}></canvas>
        </div>
    )
}
