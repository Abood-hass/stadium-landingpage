import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import TextBox from '../../components/hero/text-box'
import './style.css'

export default function index() {

    const [bgShapeSlideAnime] = useSpring(() => ({
        from: { x: 200 },
        to: { x: 100 },
    }), [])


    const [card_1_SlideAnime] = useSpring(() => ({
        from: { y: -40 },
        to: { y: 0 },
    }), [])

    const [card_2_SlideAnime] = useSpring(() => ({
        from: { y: -80 },
        to: { y: 0 },
    }), [])

    const [card_3_SlideAnime] = useSpring(() => ({
        from: { y: -30 },
        to: { y: 0 },
    }), [])

    return (
        <section
            className='hero-section-container'>

            <animated.img style={bgShapeSlideAnime} className='bg-curve-img' src="\assets\hero-images\curved-shape.png" alt="" />

            <TextBox />

            <div className='cards-container'>
                <animated.div style={card_1_SlideAnime} className='card-1 moveFwdEffect'>
                    <img src="assets\hero-images\contract-64.png" alt="" />
                    <p>Contract with the Stadium owner you want</p>
                </animated.div>
                <animated.div style={card_2_SlideAnime} className='card-2 moveFwdEffect'>
                    <img src="assets\hero-images\lock-64.png" alt="" />
                    <p>Save Place to make a deal with your clients</p>
                </animated.div>
                <animated.div style={card_3_SlideAnime} className='card-3 moveFwdEffect'>
                    <img src="assets\hero-images\soccer-ball-100.png" alt="" />
                    <p>Watch the Matches Events, Scores and without been there</p>
                </animated.div>
            </div>

        </section>
    )
}