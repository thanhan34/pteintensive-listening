import React from 'react'
import './SongRow.css'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import { useStateValue } from "./StateProvider";
import playAudio from './playAudio';
function SongRow({ sentence, index, title, playing }) {
    const [{ currentIndex, currentSentence, titlePlayer, timer }, dispatch] = useStateValue();
    const playSong = () => {
        speechSynthesis.cancel()
        playAudio(sentence)
        dispatch({
            type: "SET_INDEX",
            currentIndex: index
        })
        dispatch({
            type: "SET_CURRENTSENTENCE",
            currentSentence: sentence
        })
        dispatch({
            type: "SET_TITLE",
            titlePlayer: title
        })
        clearInterval(timer)
        dispatch({
            type: "SET_PLAYING",
            playing: false
        })
    }
    return (
        <div className="songRow" onClick={playSong}>
            <div className="songRow__info">
                <div className="songRow__header">
                    <GraphicEqIcon />
                    <h1>{title} {index + 1}</h1>
                </div>
                <p>
                    {sentence}
                </p>
            </div>
        </div>
    )
}

export default SongRow
