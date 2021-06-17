import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Records = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/Home')
    }

    return (
        <div className="records">
            <Navigation />
            <h1>Records</h1>
            <button onClick={goHome}>Back to Home</button>
        </div>
    )
}

export default Records;