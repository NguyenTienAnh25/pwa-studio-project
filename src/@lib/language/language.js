import React from 'react';
const Language = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px'
            }}
        >
            <div>?</div>
            <div>
                <select>
                    <option>English</option>
                    <option>VietNamese</option>
                </select>
            </div>
        </div>
    );
};

export default Language;
