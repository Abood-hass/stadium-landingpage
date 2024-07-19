import ReviewCard from '../../components/review-card'
import SectionHeader from '../../components/section-header'

import './style.css'

export default function index() {
    return (
        <section id='reviews-section' className='reviews-section-container'>
            <SectionHeader title={"Clients Reviews"} />
            <div className='reviews-container'>
                <ReviewCard clientImg={`assets/\\clients-images/\\liam.jpg`} scrollPoint={0.43} clientName={"Liam Patel"} reviewText={"I've booked multiple stadiums with this platform and it's been a seamless experience every time. Highly recommend!"} />
                <ReviewCard clientImg={`assets/\\clients-images/\\alexander.jpg`} scrollPoint={0.56} clientName={"Alexander Brown"} reviewText={"This platform has made it so easy to find and book the perfect stadium for our events. The customer support is top-notch too!"} dir={1} />
                <ReviewCard clientImg={`assets/\\clients-images/\\ethan.jpg`} scrollPoint={0.65} clientName={"Ethan Thompson"} reviewText={"I was impressed by the variety of stadiums available on this platform. Booking was quick and easy, will definitely use again!"} />
            </div>
        </section>
    )
}