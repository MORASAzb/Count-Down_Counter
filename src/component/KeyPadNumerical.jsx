
import './KeyPadNumerical.css'
import { useState, useEffect } from 'react';
import Timer from './Timer';




function KeyPadNumerical() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [timer, setTimer] = useState('00:00:00');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputNumber, setInputNumber] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countdown, setCountdown] = useState(false);

    const updateTimer = () => {
        const validInput = inputNumber.slice(0, 6).padStart(6, '0');
        const hours = validInput.slice(0, 2);
        const minutes = validInput.slice(2, 4);
        const seconds = validInput.slice(4, 6);


        setTimer(`${hours}:${minutes}:${seconds}`);
    };


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        updateTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputNumber]);

    const handleNumberClick = (number) => {
        if (inputNumber.length < 6) {
            setInputNumber(inputNumber + number);
        }
    };


    const clearInput = () => {
        setInputNumber('');
    };

const countdownToggle = (newCountdownValue)=>{
    setCountdown(newCountdownValue)
}


    return (
        <div className="main">
            <h1>Countdown Timer</h1>
            <div className="timer-display">{timer}</div>
            <div className='every'>

                <div className="keypad">
                    {[5, 6, 7, 8, 9, 0, 1, 2, 3, 4,].map((number) => (
                        <button key={number} onClick={() => handleNumberClick(String(number))}>
                            {number}
                        </button>
                    ))}
                </div>
                <div className="buttons">
                    <button onClick={clearInput}>
                        Clear
                    </button>
             
                </div>

            </div>
            <Timer timerValue={timer}  countdown={countdown}  countdownToggle={countdownToggle} />
        </div>
    );
}

export default KeyPadNumerical;


