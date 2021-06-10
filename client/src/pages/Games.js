import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../App.css';

const Games = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/Home')
    }

    return (
        <div className="games">
            <h1>Games</h1>
            <button onClick={goHome}>Back to Home</button>
            <div id="root"></div>
            <div id="phaser"></div>
        </div>
    )
}

export default Games;