import React from 'react'
import { Link } from 'react-router-dom'

export default function SongList({songs}) {
  return (
    <table className='songs-table'>
        <thead>
            <tr>
                <th className='songs-table-header author'>Author</th>
                <th className='songs-table-header title'>Title</th>
            </tr>
        </thead>
        <tbody>
            {songs.map((song, index) => 
                <tr key={index}>
                    <td className='songs-table-cell author'>{song.author}</td>
                    <td className='songs-table-cell title'><Link to={`/songs/${index}`}>{song.title}</Link></td>
                </tr>
            )}
        </tbody>
    </table>
  )
}
