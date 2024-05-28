import React from 'react';
import Hagman from './components/Hagman';
import Welcome from './components/Welcome';

const words = ['date', 'time', 'hello', 'phone', 'heaven'];
const fruts = ['apple', 'banana', 'cherry', 'grape', 'kiwi'];
const animals = ['pig', 'cow', 'turtle', 'hen', 'chicken', 'lion'];

function App() {
    return (
        <div className='App'>
            <Welcome words={words} fruts={fruts} animals={animals} />
            {/* Agrega las tres listas como props al componente Welcome */}
            <Hagman words={words} fruts={fruts} animals={animals} />
        </div>
    );
}

export default App;