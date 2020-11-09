import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import write_from_dictation from '../src/data/write_from_dictation'
import playAudio from './playAudio'

function Footer() {
    const [{ currentIndex, playing }, dispatch] = useStateValue();
    const [localIndex, setLocalIndex] = useState(0)
    const [currentSentence, setCurrentSentence] = useState("")
    const [timeoutInterval, setTimeoutInterval] = useState(null)

    useEffect(() => {
        playAudio(write_from_dictation[localIndex])
        setCurrentSentence(write_from_dictation[localIndex])
    }, [localIndex])

    const stopTimer = () => {
        clearInterval(timeoutInterval)
    }
    const handlePlayPause = () => {
        dispatch({
            type: "SET_PLAYING",
            playing: !playing
        })

        if (!playing) {
            setLocalIndex(currentIndex)
            playAudio(write_from_dictation[localIndex])
            const timer = setInterval(() => setLocalIndex(localIndex => localIndex + 1), 8000)
            setTimeoutInterval(timer)
        }
        else {
            dispatch({
                type: "SET_INDEX",
                currentIndex: localIndex
            })
            stopTimer()
            window.responsiveVoice.cancel()
        }
    }


    const skipNext = () => {
        window.responsiveVoice.cancel()
        dispatch({
            type: "SET_INDEX",
            currentIndex: currentIndex + 1
        })
        playAudio(write_from_dictation[currentIndex])
    };

    const skipPrevious = () => {
        window.responsiveVoice.cancel()
        if (currentIndex === 0) {
            playAudio(write_from_dictation[currentIndex])
        } else {
            dispatch({
                type: "SET_INDEX",
                currentIndex: currentIndex - 1
            })
            playAudio(write_from_dictation[currentIndex])
        }
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__songInfo">
                    <h4>Write From Dictation {localIndex + 1}</h4>
                    <p>{currentSentence}</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon onClick={skipPrevious} className="footer__icon" />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                ) : (
                        <PlayCircleOutlineIcon
                            onClick={handlePlayPause}
                            fontSize="large"
                            className="footer__icon"
                        />
                    )}
                <SkipNextIcon onClick={skipNext} className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
