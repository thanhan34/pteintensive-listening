import React from 'react'
import './SongRow.css'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import { useStateValue } from "./StateProvider";
import playAudio from './playAudio';
function SongRow({ sentence, index }) {
    const [{ currentIndex }, dispatch] = useStateValue();
    const playSong = () => {
        speechSynthesis.cancel()
        playAudio(sentence)
        dispatch({
            type: "SET_INDEX",
            currentIndex: index
        })
    }
    return (
        <div className="songRow" onClick={playSong}>

            <div className="songRow__info">
                <div className="songRow__header">
                    <GraphicEqIcon />
                    <h1>WFD {index + 1}</h1>
                </div>
                <p>
                    {sentence}
                </p>
            </div>
        </div>
    )
}

export default SongRow
