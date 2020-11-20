import React from 'react'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
import Sidebar from './Sidebar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import write_from_dictation from './data/write_from_dictation'
import repeat_sentence from './data/repeat_sentence'
import answer_short_question from './data/answer_short_question'
function Player() {
    return (
        <div className="player">
            <Router>
                <Switch>
                    <Route path="/wfd">
                        <div className="player__body">
                            <Sidebar />
                            <Body array={write_from_dictation} title="Write From Dictation" />
                        </div>
                        <Footer array={write_from_dictation} title="Write From Dictation" />
                    </Route>
                    <Route path="/rs">
                        <div className="player__body">
                            <Sidebar />
                            <Body array={repeat_sentence} title="Repeat Sentence" />
                        </div>
                        <Footer array={repeat_sentence} title="Repeat Sentence" />
                    </Route>
                    <Route path="/asq">
                        <div className="player__body">
                            <Sidebar />
                            <Body array={answer_short_question} title="Answer Short Question" />
                        </div>
                        <Footer array={answer_short_question} title="Answer Short Question" />
                    </Route>
                    <Route path="/">
                        <div className="player__body">
                            <Sidebar />
                            <Body array={repeat_sentence} title="Repeat Sentence" />
                        </div>
                        <Footer array={repeat_sentence} title="Repeat Sentence" />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default Player
