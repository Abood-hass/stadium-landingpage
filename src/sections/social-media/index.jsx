import SocialMediaIcon from '../../components/social-media-icon';

import './style.css'

export default function index() {
    return (
        <div
            id='social-media-section'
            className='social-media-section-container'>

            <div className='social-media-icons-container'>
                <SocialMediaIcon style={{background: "#0288D1", color: "#fff"}} pfName={"Linkedin"} pfIcon={'/assets/social-media/linkedin-48.png'} />
                <SocialMediaIcon style={{background: "#3F51B5", color: "#fff"}} pfName={"Facebook"} pfIcon={'/assets/social-media/facebook-60.png'} />
                <SocialMediaIcon style={{background: "#000", color: "#fff"}} pfName={"X Platform"} pfIcon={'/assets/social-media/twitterx-48.png'} />
                <SocialMediaIcon style={{background: "#40C351", color: "#fff"}} pfName={"Whatsapp"} pfIcon={'/assets/social-media/whatsapp-50.png'} />
            </div>
        </div>
    )
}

