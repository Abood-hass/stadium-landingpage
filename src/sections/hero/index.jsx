import TextBox from '../../components/hero/text-box'
import Card from '../../components/hero/card'

import './style.css'

export default function index() {


    return (
        <section
            id='hero-section'
            className='hero-section-container'>

            {/* <animated.img style={bgShapeSlideAnime} className='bg-curve-img' src="\assets\hero-images\curved-shape.png" alt="" /> */}

            <TextBox />

            <div className='cards-container'>
                <Card
                    gridArea={'card1'}
                    bgColor={"var(--emerald)"}
                    colorText={"var(--baby-powder)"}
                    slideYVal={-60}
                    icon={"contract-64"}
                    text={"Contract with the Stadium owner you want"}
                />
                <Card
                    gridArea={'card2'}
                    bgColor={"var(--ultra-violet)"}
                    colorText={"var(--baby-powder)"}
                    slideYVal={-50}
                    icon={"lock-64"}
                    text={"Save Place to make a deal with your clients"}
                />
                <Card
                    gridArea={'card3'}
                    bgColor={"var(--light-green)"}
                    colorText={"var(--ultra-violet)"}
                    slideYVal={-40}
                    icon={"soccer-ball-100"}
                    text={"Watch the Matches Events, Scores and without been there"}
                />
            </div>

        </section>
    )
}