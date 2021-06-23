import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';
import Axios from 'axios';


const MODAL_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#6a040f',
    padding: '50px',
    zindex: 2000,
    borderRadius: '10px',
} 


const OVERLAY_STYLE = {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zindex: 2000,
}


const BUTTONS_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
}

export default function UserModal({ open, children, onClose }) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const user_id = localStorage.getItem('userid');
    const localPassword = localStorage.getItem('password');

    const updateName = () => {


        Axios.put('http://localhost:3001/apiroutes/updateDetails', {
            name: name,
            password: password,
            id: user_id
        }).then(() => {
        })
        .catch(e => console.log(e));
        localStorage.setItem('username', name)
        localStorage.setItem('password', password);
    }

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLE} />
                <div style={MODAL_STYLES}>
                    <label>New UserName</label>
                    <input type="text" onChange={(event) => {
                        setName(event.target.value);
                    }}/>
                    <label>New Password</label>
                    <input type="text" onChange={(event) => {
                            setPassword(event.target.value)
                    }}/>
                    {children}
                <div style={BUTTONS_STYLE}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={updateName}>Submit</button>
                </div>        
            </div>
        </>,
        document.getElementById('portal')
    )
}
