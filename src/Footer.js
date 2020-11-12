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
import playAudio from './playAudio'
import Filter3Icon from '@material-ui/icons/Filter3';


function Footer({ array }) {
    const [{ currentIndex }, dispatch] = useStateValue();
    const [localIndex, setLocalIndex] = useState(-1)
    const [currentSentence, setCurrentSentence] = useState("")
    const [timeoutInterval, setTimeoutInterval] = useState(null)
    const [speakIndex, setSpeakIndex] = useState(0)
    const [speakMode, setSpeakMode] = useState(false)
    const [speakValue, setSpeakValue] = useState("")
    const [playing, setPlaying] = useState(false)
    const [shufferIndex, setShufferIndex] = useState(-1)
    useEffect(() => {
        setSpeakIndex(0)
        setLocalIndex(0)
        setSpeakValue("One")
    }, [])
    useEffect(() => {
        playAudio(array[localIndex])
        setCurrentSentence(array[localIndex])
        dispatch({
            type: "SET_INDEX",
            currentIndex: localIndex
        })
    }, [localIndex])
    useEffect(() => {
        const repeatSentence = () => {
            for (var i = 0; i <= 2; i++) {
                playAudio(array[currentIndex + 1])
            }
        }
        repeatSentence()
        setCurrentSentence(array[currentIndex + 1])
        dispatch({
            type: "SET_INDEX",
            currentIndex: currentIndex + 1
        })
    }, [speakIndex])

    useEffect(() => {
        playAudio(array[shufferIndex])
        dispatch({
            type: "SET_INDEX",
            currentIndex: shufferIndex
        })
        setCurrentSentence(array[shufferIndex])
    }, [shufferIndex])


    const shufferSentence = () => {

        setSpeakValue("Shuffer")
    }
    const playShuffer = () => {
        stopTimer()
        speechSynthesis.cancel()
        setLocalIndex(currentIndex)
        playAudio(array[localIndex])
        const timer = setInterval(() => setShufferIndex(Math.floor(Math.random() * array.length)), 8000)
        setTimeoutInterval(timer)
    }
    const handleRepeatSentence = () => {
        setSpeakMode(!speakMode)
        stopTimer()
        setPlaying(false)
        speechSynthesis.cancel()
        speakMode ? setSpeakValue("One") : setSpeakValue("Three")
    }
    const stopTimer = () => {
        clearInterval(timeoutInterval)
    }

    const playOne = () => {
        setLocalIndex(currentIndex)
        playAudio(array[localIndex])
        const timer = setInterval(() => setLocalIndex(localIndex => localIndex + 1), 8000)
        setTimeoutInterval(timer)
    }

    const playThree = () => {
        setCurrentSentence(array[currentIndex])
        for (var i = 0; i <= 2; i++) {
            playAudio(array[currentIndex])
        }
        const timer = setInterval(() => setSpeakIndex(speakIndex => speakIndex + 1), 20000)
        setTimeoutInterval(timer)
    }

    const handlePlayPause = () => {
        setPlaying(!playing)
        stopTimer()
        if (!playing) {
            // if (speakMode) {
            //     playOne()
            // }
            // else {
            //     playThree()
            // }
            switch (speakValue) {
                case "Three":
                    playThree()
                    break;
                case "Shuffer":
                    playShuffer()
                    break;
                default:
                    playOne()
                    break;
            }
        }
        else {
            dispatch({
                type: "SET_INDEX",
                currentIndex: localIndex
            })
            speechSynthesis.cancel()
        }
    }

    const skipNext = () => {
        speechSynthesis.cancel()
        dispatch({
            type: "SET_INDEX",
            currentIndex: currentIndex + 1
        })
        playAudio(array[currentIndex])
    };

    const skipPrevious = () => {
        speechSynthesis.cancel()
        if (currentIndex === 0) {
            playAudio(array[currentIndex])
        } else {
            dispatch({
                type: "SET_INDEX",
                currentIndex: currentIndex - 1
            })
            playAudio(array[currentIndex])
        }
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__songInfo">
                    <h4>Write From Dictation {currentIndex + 1}</h4>
                    <p>{currentSentence}</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" onClick={shufferSentence} />
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

                {
                    speakMode ? (<RepeatIcon
                        className="footer__green"
                        onClick={() => handleRepeatSentence()} />
                    ) : (
                            <Filter3Icon
                                className="footer__green"
                                onClick={() => handleRepeatSentence()} />
                        )
                }
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
