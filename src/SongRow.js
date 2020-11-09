import React from 'react'
import './SongRow.css'
import write_from_dictation from '../src/data/write_from_dictation'
import { useStateValue } from "./StateProvider";
function SongRow({ sentence, index }) {
    const [{ currentIndex }, dispatch] = useStateValue();
    const playSong = () => {
        window.responsiveVoice.speak(write_from_dictation[index])
        dispatch({
            type: "SET_INDEX",
            currentIndex: index
        })
    }
    return (
        <div className="songRow" onClick={playSong}>
            {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
            <div className="songRow__info">
                <h1>WFD {index + 1}</h1>
                <p>
                    {sentence}
                </p>
            </div>
        </div>
    )
}

export default SongRow
