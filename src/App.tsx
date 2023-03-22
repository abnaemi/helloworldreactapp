import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './GreetingsMethod';

function App() {
    const name = "Test Termann";

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Greetings name={name} />
                        Hello World2

                </div>
            </header>
        </div>
    );
}

export default App;
