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


function Footer({ array, title }) {
    const [{ currentIndex, currentSentence, titlePlayer, timer, playing }, dispatch] = useStateValue();
    const [localIndex, setLocalIndex] = useState(0)
    const [timeoutInterval, setTimeoutInterval] = useState(null)
    const [speakIndex, setSpeakIndex] = useState(0)
    const [speakMode, setSpeakMode] = useState(false)
    const [speakValue, setSpeakValue] = useState("One")
    const [shufferIndex, setShufferIndex] = useState(0)

    useEffect(() => {
        playAudio(array[localIndex])
        dispatch({
            type: "SET_CURRENTSENTENCE",
            currentSentence: array[localIndex]
        })
        dispatch({
            type: "SET_INDEX",
            currentIndex: localIndex
        })
        dispatch({
            type: "SET_TIMER",
            timer: timeoutInterval
        })
    }, [localIndex])
    useEffect(() => {
        const repeatSentence = () => {
            for (var i = 0; i <= 2; i++) {
                playAudio(array[currentIndex + 1])
            }
        }
        repeatSentence()
        dispatch({
            type: "SET_CURRENTSENTENCE",
            currentSentence: array[currentIndex + 1]
        })
        dispatch({
            type: "SET_INDEX",
            currentIndex: currentIndex + 1
        })
        dispatch({
            type: "SET_TIMER",
            timer: timeoutInterval
        })
    }, [speakIndex])

    useEffect(() => {
        playAudio(array[shufferIndex])
        dispatch({
            type: "SET_INDEX",
            currentIndex: shufferIndex
        })
        dispatch({
            type: "SET_CURRENTSENTENCE",
            currentSentence: array[shufferIndex]
        })
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
        dispatch({
            type: "SET_TIMER",
            timer: timer
        })
    }
    const handleRepeatSentence = () => {
        setSpeakMode(!speakMode)
        stopTimer()
        // setPlaying(false)
        dispatch({
            type: "SET_PLAYING",
            playing: false
        })
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
        dispatch({
            type: "SET_CURRENTSENTENCE",
            currentSentence: array[currentIndex]
        })
        for (var i = 0; i <= 2; i++) {
            playAudio(array[currentIndex])
        }
        const timer = setInterval(() => setSpeakIndex(speakIndex => speakIndex + 1), 20000)
        setTimeoutInterval(timer)
    }

    const handlePlayPause = () => {
        dispatch({
            type: "SET_PLAYING",
            playing: !playing
        })
        stopTimer()
        dispatch({
            type: "SET_TITLE",
            titlePlayer: title
        })
        if (!playing) {
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
            // dispatch({
            //     type: "SET_INDEX",
            //     currentIndex: localIndex
            // })
            speechSynthesis.cancel()
        }
    }

    const skipNext = () => {
        stopTimer()
        speechSynthesis.cancel()
        dispatch({
            type: "SET_TITLE",
            titlePlayer: title
        })
        setLocalIndex(localIndex => localIndex + 1)
    };

    const skipPrevious = () => {
        stopTimer()
        speechSynthesis.cancel()
        dispatch({
            type: "SET_TITLE",
            titlePlayer: title
        })
        if (currentIndex === 0) {
            playAudio(array[currentIndex])
        } else {
            setLocalIndex(localIndex => localIndex - 1)
        }
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__songInfo">
                    <h4>{titlePlayer} {currentIndex + 1 === 0 ? "" : currentIndex + 1}</h4>
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
