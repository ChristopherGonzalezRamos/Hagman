import { useParams } from 'react-router-dom'; // Importa useParams

const Score = () => {
    const { score } = useParams<{ score: string }>(); // Obtiene el puntaje de los parámetros de la URL

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Your score is: {score}</h2>
        </div>
    );
};

export default Score;
