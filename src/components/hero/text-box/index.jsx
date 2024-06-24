import React from 'react'
import { animated, useSpring } from '@react-spring/web'

import './style.css'

export default function index() {

    const [textSlideAnime] = useSpring(() => ({
        from: { y: 100 },
        to: { y: 0 },
    }), [])


    return (

        <animated.div style={textSlideAnime} className='text-box-container'>
            <small>Where this match will be done ?</small>
            <h2 className='moveFwdEffect'>Never miss a chance for easy Score</h2>
            <p>Solution for Stadium owner to Skyrocket His benefits, and for Teams
                to have a better place to Practice and Play</p>
            <div className='btns-container'>
                <button>Join Us Now</button>
                <button>Check More</button>
            </div>
        </animated.div>
    )
}
