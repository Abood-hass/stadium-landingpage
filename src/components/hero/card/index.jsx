import { animated, useScroll } from '@react-spring/web'
import './style.css'
import React from 'react';

export default function index({ gridArea, bgColor, colorText, slideYVal, icon, text }) {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [translateVal, setTranslateVal] = React.useState(-20);


    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            if (scrollYProgress > 0.08) {
                setTranslateVal(0);
            } else {
                setTranslateVal(-20);
            } 
            console.log(scrollYProgress);
        }
    });

    return (
        <animated.div
            style={{
                gridArea: gridArea,
                color: colorText,
                background: bgColor,
                transform: `translateY(${translateVal}%)`,
            }} className='card-container'>

            <img src={'assets\/hero-images\/' + icon + '.png'} alt="" />
            <p>{text}</p>
        </animated.div>
    )
}