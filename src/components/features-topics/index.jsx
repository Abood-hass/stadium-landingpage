import React from 'react'
import { useScroll } from '@react-spring/web';
import './style.css';

export default function index({ num, header, desc, scrollPoint }) {

    const [translateVal, setTranslateVal] = React.useState(50);
    const [opacity, setOpacity] = React.useState(0);

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

                <div className='desc-paragraph'>
                    <p>{desc}</p>
                </div>
            </div>

        </div>
    )
}