import React, { useEffect, useState } from 'react'
import './Body.css'
import Header from './Header'
import write_from_dictation from '../src/data/write_from_dictation'
import SongRow from './SongRow';
import { useStateValue } from "./StateProvider";

function Body() {

    return (
        <div className="body">
            <Header />
            <div className="body__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Write From Dictation</h2>
                </div>
            </div>

            <div className="body__songs">
                {
                    write_from_dictation.map((sentence, index) => (
                        <SongRow key={index} sentence={sentence} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body
