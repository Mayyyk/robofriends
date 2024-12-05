import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{ 
            overflowY: 'scroll',
            border: '3px solid #66FCF1',
            height: '80vh',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(102, 252, 241, 0.3)',
            background: 'rgba(31, 40, 51, 0.7)',
            backdropFilter: 'blur(5px)'
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;