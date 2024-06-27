import React from 'react'
import { animated } from '@react-spring/web'
import FeatureTopic from '../../components/features-topics'
import './style.css'

export default function index() {
    return (
        <section className='features-container'>

            <FeatureTopic scrollPoint={0.20} num={1} header={"Feature 1"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

            <FeatureTopic scrollPoint={0.26} num={2} header={"Feature 2"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

            <FeatureTopic scrollPoint={0.50} num={3} header={"Feature 3"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

            <FeatureTopic scrollPoint={0.58} num={4} header={"Feature 3"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

        </section>
    )
}