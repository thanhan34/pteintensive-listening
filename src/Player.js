import React from 'react'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
import Sidebar from './Sidebar'
import write_from_dictation from './data/write_from_dictation'
function Player() {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body array={write_from_dictation} />
            </div>
            <Footer array={write_from_dictation} />
        </div>
    )
}

export default Player
