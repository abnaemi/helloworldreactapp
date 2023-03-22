import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './GreetingsMethod';

function App() {
    const names = ["Steffen", "Levin", "Abdul"];

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    {names.map(name => (
                        <Greetings name={name} key={name} />
                    ))}
                    <p>
                        Hello World
                    </p>
                </div>
            </header>
        </div>
    );
}

export default App;
