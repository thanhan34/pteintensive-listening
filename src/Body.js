import React from 'react'
import './Body.css'
import Header from './Header'
import SongRow from './SongRow';


function Body({ array, title }) {
    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{title}</h2>
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
