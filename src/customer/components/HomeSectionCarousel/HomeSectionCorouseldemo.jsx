import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './custom.css';
const responsive = {
    0: { items: 1 },
    340: { items: 2 },
    670: { items: 3 },
    1020:{items:4}
};

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

const HomeSectionCorouseldemo = () => {
    return (
        <div>   
            <h2>Carousel Demo</h2>
            <Carousel />
        </div>
    );
};

export default HomeSectionCorouseldemo;
