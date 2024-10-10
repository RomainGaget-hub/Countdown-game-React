import { useState } from 'react';
import '../styles/Challenge.css';
import { useRef } from 'react';

export default function Challenge({ title, targetTime }) {
    const time = useRef()
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const handleStart = (time) => {

        time.current = setTimeout(() => {
            setTimerExpired(true)
        }, time * 1000)

        setTimerStarted(true)
    }

    const handleStop = () => {
        clearTimeout(time.current)
    }
    return (
        <div className="challengeWrapper">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} seconds
            </p>
            <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop Challenge' : 'Start Challenge'}</button>
        </div>
    )
}