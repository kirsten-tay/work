import React, { Fragment, useEffect, useState } from 'react';

import { motion } from 'framer-motion'
const images = [
   
]

const variants = {
    hidden: { x: -200 },
    visible: { x: 0 }
}


const Slider = () => {

    const [activeIndex, setActiveIndex] = react.useState(0);

    useEffect(() => {
        setInterval(() => setActiveIndex(activeIndex % 4), 2000)
    }, [])

    return (
        <Fragment>
            {activeIndex === 0 && (
                <motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[0]} alt={images[0].slice(-6)} />
            )}
            {activeIndex === 1 && (<motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[1]} alt={images[1].slice(-6)} />)}
            {activeIndex === 2 && (<motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[2]} alt={images[2].slice(-6)} />)}
            {activeIndex === 3 && (<motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[3]} alt={images[3].slice(-6)} />)}
        </Fragment>
    )
    const sliderControl = isLeft => (
        <button
          type="button"
          onClick={isLeft ? previousImage : nextImage}
          className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
          style={{ top: '40%' }}
        >
          <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
            {isLeft ? '◀' : '▶'}
          </span>
        </button>
      );
    
}

export default Slider;
