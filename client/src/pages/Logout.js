import React from 'react';

const Logout = () => {
    //clear local user info
    localStorage.clear();

    return (
        <div className="logout">
            <h1>Goodbye...</h1>
            <div class="emoji  emoji--sad">
                <div class="emoji__face">
                    <div class="emoji__eyebrows"></div>
                    <div class="emoji__eyes"></div>
                    <div class="emoji__mouth"></div>
                </div>
            </div>
        </div>
    )
}

export default Logout;
