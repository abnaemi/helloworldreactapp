import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";

const groupNames: string[] = ["Abdul", "Levin", "Steffen"]

function App() {
    return (
        <div className="App">
            <Greetings names={groupNames}/>
        </div>
    );
}

export default App;