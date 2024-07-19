import Hero from '../../sections/hero'
import Desc from '../../sections/description'
import Reviews from '../../sections/reviews'
import SocialMediaIcons from '../../sections/social-media'
import ContactUs from '../../sections/contact-us'


export default function Home() {
    return (
        <article id='LP-home-page'>
            <SocialMediaIcons />
            <Hero />
            <Desc />
            <Reviews />
            <ContactUs />
        </article>
    )
}