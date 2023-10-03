
import  { useState, useEffect } from 'react';

const Timer = ({ timerValue, countdown ,countdownToggle }) => {
    const [remainingTime, setRemainingTime] = useState(0);

    const [initialTimerValue, setInitialTimerValue] = useState('00:00:00');
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const calculateTotalSeconds = (timeValue) => {
            const timeParts = timeValue.split(':');
            const hours = parseInt(timeParts[0], 10);
            const minutes = parseInt(timeParts[1], 10);
            const seconds = parseInt(timeParts[2], 10);
            return hours * 3600 + minutes * 60 + seconds;
        };

        const totalSeconds = calculateTotalSeconds(timerValue);
        setRemainingTime(totalSeconds);

        if (intervalId) {
            clearInterval(intervalId);
        }

        if (countdown && totalSeconds > 0) {
            const newIntervalId = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if(prevTime>0){
                        return prevTime - 1
                    }
                    return 0;
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }else{
            clearInterval(intervalId)
        }

    }, [timerValue, countdown]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const calculateTotalSeconds = (timerValue) => {

        const timeParts = timerValue.split(':'); const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const seconds = parseInt(timeParts[2], 10);
        return hours * 3600 + minutes * 60 + seconds;
    };

    const clearTimer = () => {
        const totalSeconds = calculateTotalSeconds(initialTimerValue);
        setRemainingTime(totalSeconds);

        if (intervalId) {
            clearInterval(intervalId);
        }
    };

    return (
        <div>
            <div className="timer-display">
                {formatTime(remainingTime)}
            </div>
            <button onClick={() => countdownToggle(!countdown)}>
                {countdown ? 'Pause' : 'Start Countdown'}
            </button>
            <button onClick={clearTimer}>Clear</button>
        </div>
    );
};

export default Timer;
