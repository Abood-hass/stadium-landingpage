import React from 'react'
import { animated, useScroll, } from '@react-spring/web'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './style.css'

export default function index({ clientImg, clientName, reviewText, dir, scrollPoint }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [translateVal, setTranslateVal] = React.useState(dir ? -120 : 120);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMoreText, setShowMoreText] = React.useState(false);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            if (scrollYProgress > scrollPoint) {
                setTranslateVal(0);
            }
        }
    });
    return (
        <animated.div style={{ transform: `translate( ${translateVal}%, 0%)` }} className={`review-container ${dir && "left-review"}`}>

            <div
                className='review-client-comment-container'>

                <p style={{ display: showMoreText && 'inline' }}>
                    {reviewText || `this Platform is so good, make me want to rent a stadium.
                    this Platform is so good, make me want to rent a stadium.`}
                </p>


                <p onClick={() => { setShowMoreText(!showMoreText); }}>
                    {showMoreText ? "Show Less" : "Show More"}
                </p>
            </div>

            <div className='review-client-info-container'>
                <LazyLoadImage
                    className='client-img'
                    placeholderSrc={"assets/\\favicon/\\icon-color.png"}
                    threshold={50}
                    effect="blur"
                    src={clientImg}
                    alt={clientName.toLowerCase() + "-photo"}
                    height={60}
                    width={60}
                />
                {/* <img src={clientImg} alt={clientName.toLowerCase() + "-photo"} loading="eager" /> */}
                <h4>{clientName || "Abdullah Hassouna"}</h4>
            </div>

        </animated.div>
    )
}