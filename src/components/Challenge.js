import { useState } from 'react';
import '../styles/Challenge.css';
import { useRef } from 'react';

export default function Challenge({ title, targetTime }) {
    const time = useRef()
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const handleStart = (timeSet) => {
        setTimerExpired(false)
        const timeSetCalc = timeSet * 1000


        time.current = setTimeout(() => {
            // Set the timer as expired and stop the timer
            setTimerExpired(true)
            setTimerStarted(false)
        }, timeSetCalc)

        // Mark the timer as started
        setTimerStarted(true)
    }

    const handleStop = () => {
        // Clear the timeout to stop the timer
        clearTimeout(time.current)
        // Mark the timer as stopped
        setTimerStarted(false)
    }
    return (
        <div className="challengeWrapper">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} seconds
            </p>
            <button onClick={timerStarted ? handleStop : () => handleStart(targetTime)}>{timerStarted ? 'Stop Challenge' : 'Start Challenge'}</button>
            <p>{timerStarted ? 'Timer is running' : 'Timer inactive'}</p>
            <p>{timerExpired && 'Failed'}</p>
        </div>
    )
}