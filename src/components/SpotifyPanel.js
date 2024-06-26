import React, { useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { BiSkipPrevious } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import FileComponent from './FileComponent';

export default function SpotifyPanel() {
    const [songs,setSongs] = useState([
        {
            title:"Song",
            by:"Singer"
        },
        {
            title:"Song",
            by:"Singer"
        },
        {
            title:"Song",
            by:"Singer"
        },
        {
            title:"Song",
            by:"Singer"
        },
        {
            title:"Song",
            by:"Singer"
        },
    ])
  return (
    <>
      <div className="spp-header"><FaSpotify style={{backgroundColor:"white"}}/>Spotify</div>
      <div className="spp-songs">
            {songs.map((song)=>{
                return (
                    <FileComponent title={song.title} by={song.by}/>
                )
            })}
      </div>
      <div className="player">
        <BiSkipPrevious className='controls' style={{backgroundColor:'white'}}/>
        <FaPlay className='controls' style={{backgroundColor:'white'}}/>
        <MdSkipNext className='controls' style={{backgroundColor:'white'}}/>

      </div>
    </>
  )
}
