import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{ 
            overflowY: 'scroll',
            border: '2px solid rgba(255, 140, 0, 0.3)',
            height: '80vh',
            margin: '10px',
            padding: '10px',
            borderRadius: '15px',
            boxShadow: '0 0 25px rgba(255, 77, 0, 0.2)',
            background: 'rgba(26, 15, 15, 0.7)',
            backdropFilter: 'blur(10px)'
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;