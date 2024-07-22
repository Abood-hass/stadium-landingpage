import Hero from '../../section/hero'
import Desc from '../../section/description'
import Reviews from '../../section/reviews'
import SocialMediaIcons from '../../section/social-media'

export default function Home() {
    return (
        <article id='LP-home-page'>
            <SocialMediaIcons />
            <Hero />
            <Desc />
            <Reviews />
        </article>
    )
}