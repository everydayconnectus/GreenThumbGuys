// Dependencies.
import React, { useState } from 'react';

// ReactStrap Definitions.
import { Carousel, CarouselItem, } from 'reactstrap';

// Array of images.
const items = [
    {
        src: '/images/backgrounds/stockslides/stock1.jpg',
    },
    {
        src: '/images/backgrounds/stockslides/stock2.jpg',
    },
    {
        src: '/images/backgrounds/stockslides/stock3.jpg',
    }
];

// Iterate through each image with a fading animation and display it as a background.
const StockSlider = () => {
    // During the array iteration, use the image at the start of the array.
    const [activeIndex, setActiveIndex] = useState(0); // Index Controller.
    const [animating, setAnimating] = useState(false); // Anim State.

    // Next Slide.
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Previous Slide.
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Compile Slide Image, Animation, and CSS states.
    const slides = items.map((item) => {
        return (
            // Define State of Carousel.
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}>

                {/* Populate Slide Images */}
                <img className="Slides" src={item.src} alt={item.src} />
            </CarouselItem>
        );
    });

    // Execute and populate slides.
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}>

            {slides}
        </Carousel>
    );
}

// Export Component.
export default StockSlider;