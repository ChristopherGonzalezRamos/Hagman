import { useState } from 'react';

interface HagmanProps {
    words: string[];
    fruts: string[];
    animals: string[];
}

const Hagman = ({ words, fruts, animals }: HagmanProps) => {
    const allWords = [...words, ...fruts, ...animals]; // Combina todas las palabras en una sola lista
    const [selectedWord, setSelectedWord] = useState(allWords[Math.floor(Math.random() * allWords.length)]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);
    const [score, setScore] = useState(0);

    const displayWord = selectedWord.split('').map((letter) => {
        console.log("SelectedWord: ", selectedWord)
        if (guessedLetters.includes(letter)){
            console.log("guessedLetters: ", guessedLetters)
            return letter;
        } else {
            return '_';
        }
    });

    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)){
            setGuessedLetters([...guessedLetters, letter]);
            if (!selectedWord.includes(letter)){
                setErrorCount(prev => prev + 1); // Incrementar el contador de errores
            }
        }
    };

    const restartGame = () => {
        const allWords = [...words, ...fruts, ...animals]; // Combina todas las palabras en una sola lista
        const newWordIndex = Math.floor(Math.random() * allWords.length); // Escoge una palabra aleatoria de la lista combinada
        const newWord = allWords[newWordIndex];
        setSelectedWord(newWord);
        setGuessedLetters([]); // Reiniciar las letras adivinadas
        setErrorCount(0);
        if (errorCount < 5) {
            setScore(score + 1); // Incrementa el puntaje si no se exceden los errores permitidos
        } else {
            setScore(0); // Reinicia el puntaje si se exceden los errores permitidos
        }
    }; 

    return (
        <div style={{ textAlign: 'center' }}>
            <p>{displayWord.join(' ')}</p>
            <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
            {(displayWord.join('') === selectedWord || errorCount >= 5) && (
                <div>
                    {displayWord.join('') === selectedWord ? (
                        <p>You won this round!</p>
                    ) : (
                        <p>You lose! The correct word was: {selectedWord}</p>
                    )}
                    <button onClick={() => restartGame()}>Select new word</button>
                </div>
            )}
            <p>Error Counts: {errorCount}</p>
            <p>Score: {score}</p> {/* Muestra el puntaje */}
        </div>
    );
};

export default Hagman;
