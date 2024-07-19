import React from 'react'
import { useScroll } from '@react-spring/web';
import './style.css';

export default function index({ num, header, desc, scrollPoint }) {

    const [translateVal, setTranslateVal] = React.useState(50);
    const [opacity, setOpacity] = React.useState(0);
    const [showMoreText, setShowMoreText] = React.useState(false);

    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            if (scrollYProgress > scrollPoint) {
                setTranslateVal(0);
                setOpacity(1)
            }
        }
    });

    return (
        <div
            style={{ transform: `translate(0%, ${translateVal}%)`, opacity: opacity }}
            className='feature-container'>

            <div className='desc-num'>
                <h1>{num}</h1>
            </div>

            <div className='feature-text'>
                <div className='desc-header'>
                    <span>{header}</span>
                </div>

                <div className='desc-para'>
                    <span style={{ display: showMoreText && 'inline' }}>{desc}</span>

                    <span onClick={() => { setShowMoreText(!showMoreText); }}>
                        {showMoreText ? "Show Less" : "Show More"}
                    </span>
                </div>
            </div>

        </div>
    )
}