import React from 'react';

const Product = [
    {
        image: 'https://media3.scdn.vn/img3/2019/11_29/eu5Q82.jpg',
        name: '2-tier stainless steel steamer, hot pot',
        price: '89.000 đ'
    },
    {
        image: 'https://media3.scdn.vn/img3/2019/11_29/eu5Q82.jpg',
        name: '2-tier stainless steel steamer, hot pot',
        price: '89.000 đ'
    },
    {
        image: 'https://media3.scdn.vn/img3/2019/11_29/eu5Q82.jpg',
        name: '2-tier stainless steel steamer, hot pot',
        price: '89.000 đ'
    }
];

const Page = () => {
    return (
        <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ height: '20%', width: '10%' }}>
                    <img
                        style={{
                            borderRadius: '50%'
                        }}
                        src="https://media3.scdn.vn/img4/2021/04_22/qlDHhqKxDxDUOm6L0sk7.jpg"
                    />
                </div>
                <div style={{ paddingLeft: '10px' }}>
                    <div
                        style={{
                            fontWeight: 'bold',
                            paddingBottom: '10px'
                        }}
                    >
                        Ngoc Minh General Warehouse
                    </div>
                    <div
                        style={{
                            fontWeight: 'bold',
                            paddingBottom: '10px'
                        }}
                    >
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                    </div>
                    <div>Lạng Sơn | 4.4 *</div>
                </div>
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto auto auto',
                    paddingTop: '20px',
                    textAlign: 'center',
                    width: '50%'
                }}
            >
                <div>
                    <p style={{ fontWeight: 'bold' }}>3 year</p>
                    <p>Sold at sendo</p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold' }}>368</p>
                    <p>Product</p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold' }}>1 day</p>
                    <p>Preparing goods</p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold' }}>35%</p>
                    <p>Response rate</p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold' }}>Often...</p>
                    <p>Shop feedback</p>
                </div>
            </div>
            <div style={{ paddingTop: '20px' }}>
                <div style={{ width: '50%', display: 'flex', gap: '20px' }}>
                    <button
                        style={{
                            width: '40%',
                            background: '#bbb',
                            borderRadius: '10px',
                            height: '50px',
                            fontWeight: 'bold'
                        }}
                    >
                        Follow the shop
                    </button>
                    <button
                        style={{
                            width: '40%',
                            background: '#bbb',
                            borderRadius: '10px',
                            height: '50px',
                            fontWeight: 'bold'
                        }}
                    >
                        Go to the shop
                    </button>
                    <button
                        style={{
                            width: '10%',
                            background: '#bbb',
                            borderRadius: '10px',
                            height: '50px',
                            fontWeight: 'bold'
                        }}
                    >
                        Icon
                    </button>
                </div>
            </div>

            <div style={{ width: '50%' }}>
                <div
                    style={{
                        width: '90%',
                        // paddingLeft: '10px',
                        padding: '10px',
                        marginLeft: '10px',
                        borderBottom: '1px solid #bbb',
                        margin: 'auto'
                    }}
                />
            </div>
            <div>
                <p style={{ fontWeight: 'bold', paddingTop: '10px' }}>
                    More suggestions from the shop
                </p>
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        width: '50%',
                        paddingTop: '10px'
                    }}
                >
                    {Product.map((item, index) => (
                        <div key={index}>
                            <div>
                                <img src={item.image} />
                            </div>
                            <div
                                style={{
                                    paddingTop: '5px'
                                }}
                            >
                                {item.name}
                            </div>
                            <div
                                style={{
                                    fontWeight: 'bold',
                                    paddingTop: '5px'
                                }}
                            >
                                {item.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
