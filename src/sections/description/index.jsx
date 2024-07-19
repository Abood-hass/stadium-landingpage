import FeatureTopic from '../../components/features-topics'
import SectionHeader from '../../components/section-header'
import './style.css'

export default function index() {
    return (
        <section id='features-section' className='features-section-container'>

            <SectionHeader title={"Platform Features"} />

            <div className='features-topics'>

                <FeatureTopic scrollPoint={0.15} num={1} header={"Feature 1"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

                <FeatureTopic scrollPoint={0.18} num={2} header={"Feature 2"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

                <FeatureTopic scrollPoint={0.23} num={3} header={"Feature 3"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

                <FeatureTopic scrollPoint={0.25} num={4} header={"Feature 3"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} />

            </div>

        </section>
    )
}