import React, { useState, useEffect } from 'react';
import Hagman from '../img/hagman.png';
import '../css/main.css';

interface WelcomeProps {
    words: string[];
    fruts: string[];
    animals: string[];
}

const Welcome: React.FC<WelcomeProps> = ({ words, fruts, animals }) => {
    const [hint, setHint] = useState<string>('');
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const selectHint = () => {
        if (words.length > 0) {
            setHint('Hint: These words are related to words.');
        } else if (fruts.length > 0) {
            setHint('Hint: These words are related to fruits.');
        } else if (animals.length > 0) {
            setHint('Hint: These words are related to animals.');
        } else {
            setHint('No hint available.');
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div className="wrapper">
                <h1>Welcome to the best Hagman Game!!</h1>
                <h2>Classical Game</h2>
                <img src={Hagman} alt="Hagman image.." width={200} height={200}/>
                <h3>Pista de la palabra</h3>
                <h4>{hint}</h4>
                <p>Time: {formatTime(time)}</p>
                <button onClick={selectHint}>Start Game</button>
            </div>
        </>
    );
};

export default Welcome;
