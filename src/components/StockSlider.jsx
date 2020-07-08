// ------------------------------ I M P O R T E D _ _ D E P E N D E N C I E S_ -----------------------------------------------


import React, { useState } from 'react';

// Reactstrap Carousel Imports.
import {
    Carousel,
    CarouselItem,
    CarouselCaption
} from 'reactstrap';


// -------------------------------------------------------------------------------------------------------------------------------




// Array of images.
const items = [
    {
        src: '/images/backgrounds/lawn.jpg',
    },
    {
        src: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        src: 'https://images.pexels.com/photos/321542/pexels-photo-321542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }
];

// Iterate through each image with a fading animation and display it as a background.
const StockSlider = () => {
    // During the array iteration, use the image at the start of the array.
    const [activeIndex, setActiveIndex] = useState(2); // Index Controller.
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
                key={item.src}
            >
                {/* Populate Slide Images */}
                <img class="Slides" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    // Execute and populate slides.
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {slides}

        </Carousel>
    );
}

// Do Export.
export default StockSlider;