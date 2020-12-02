import React from 'react'
import './Body.css'
import Header from './Header'
import SongRow from './SongRow';
import { useStateValue } from "./StateProvider";

function Body({ array, title }) {
    const [{ currentSentence }, dispatch] = useStateValue();
    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{title}</h2>
                    <p>{currentSentence}</p>
                </div>
            </div>

            <div className="body__songs">
                {
                    array.map((sentence, index) => (
                        <SongRow key={index} sentence={sentence} index={index} title={title} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body
