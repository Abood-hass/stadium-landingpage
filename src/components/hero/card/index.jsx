import { animated, useSpring } from '@react-spring/web'
import React from 'react'

import './style.css'

export default function index({gridArea, marginTop, bgColor, colorText, slideYVal, icon, text }) {

    const [card_1_SlideAnime] = useSpring(() => ({
        from: { y: slideYVal },
        to: { y: 0 },
    }), [])


    return (
        <animated.div
            style={{
                gridArea: gridArea,
                color: colorText,
                marginTop: marginTop,
                background: bgColor,
                ...card_1_SlideAnime
            }} className='card-container'>

            <img src={'assets\/hero-images\/' + icon + '.png'} alt="" />
            <p>{text}</p>
        </animated.div>
    )
}