import React from 'react';
const Details = () => {
    function myFunction() {
        location.href =
            'https://pwa-one-studio-yfe2b.local.pwadev:8540/page/TienAnh';
    }
    return (
        <div
            style={{
                border: '1px',
                borderStyle: 'solid',
                background: 'white',
                color: 'black',
                borderRadius: '10px',
                width: '100%',
                padding: '10px'
            }}
        >
            <h1 style={{ fontWeight: 'bold' }}>Hỏi về sản phẩm</h1>
            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                Bạn có thắc mắc gì cần giải đáp?
            </p>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <button
                    onClick={myFunction}
                    style={{
                        height: '40px',
                        paddingLiftRight: '10px',
                        background: 'gray',
                        borderRadius: '10px',
                        margin: 'auto',
                        width: '100%'
                    }}
                >
                    Hỏi shop ngay
                </button>
            </div>
        </div>
    );
};

export default Details;
