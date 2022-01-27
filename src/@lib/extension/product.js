import React from 'react';
import './index.css';
const category = [
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    },
    {
        image: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        title: 'Clothing & Apparel',
        nameProduct: 'Accessories',
        nameProduct1: 'Bags',
        nameProduct2: "Kid's Fashion",
        nameProduct3: 'Mens'
    }
];
const Product = () => {
    return (
        <div>
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: '32px',
                    paddingLeft: '10px',
                    color: '#005500'
                }}
            >
                Product Category
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto auto',
                    gap: '20px',
                    paddingLeft: '10px',
                    paddingRight: '20px',
                    paddingTop: '20px'
                }}
            >
                {category.map((item, index) => (
                    <div
                        class="sad"
                        key={index}
                        style={{
                            display: 'flex',
                            gap: '20px',
                            border: '1px solid #bbb',
                            padding: '10px'
                        }}
                    >
                        <div
                            style={{
                                width: '30%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img src={item.image} />
                        </div>
                        <div>
                            <div
                                style={{ fontWeight: 'bold', fontSize: '16px' }}
                            >
                                {item.title}
                            </div>
                            <div
                                style={{ fontSize: '12px', paddingTop: '10px' }}
                            >
                                <p>{item.nameProduct}</p>
                                <p>{item.nameProduct1}</p>
                                <p>{item.nameProduct2}</p>
                                <p>{item.nameProduct3}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
