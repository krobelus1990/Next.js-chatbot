
import React from 'react';

const Background = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            backgroundColor:"rgb(9,6,27)"
        }}>
        </div>
    );
};

export default Background;
