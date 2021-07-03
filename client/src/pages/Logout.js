import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    
    //clear local user info
    localStorage.clear();
    
    let history = useHistory();
    const goLogin = () => {
        history.push('/')
    }

    return (
        <div className="logout">
            <h1>Au revoir...</h1>
            <div class="emoji  emoji--sad">
                <div class="emoji__face">
                    <div class="emoji__eyebrows"></div>
                    <div class="emoji__eyes"></div>
                    <div class="emoji__mouth"></div>
                </div>
            </div>
            <button onClick={goLogin}>Se connecter</button>
        </div>
    )
}

export default Logout;
