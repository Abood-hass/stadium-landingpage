// import React from 'react'
import { createRef, useRef, } from 'react'

import SectionHeader from '../../components/section-header'
import Paragraph from '../../components/para'
import Form from '../../components/form'
import emailjs from '@emailjs/browser';

import './style.css'

export default function index() {
    const formRef = createRef();

    function onSubmit(params) {
        params.preventDefault()
        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
            import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAIL_JS_PUB_KEY)
            .then((result) => {
                console.log("message sent!")
            }, (error) => {
                console.log("error sending message, try again!")
            });
    }

    return (
        <section id='contact-us-section' className='contact-us-section-container'>
            <SectionHeader title={"Contact Us"} />
            <div style={{ padding: " 10px 35px" }}>
                <Paragraph style={{ paddingBottom: "15px" }} text={`Send a email of any Complaint or Suggestion you have, So follow the simple roles Below.`} />
                <Paragraph style={{ padding: "5px", fontSize: "18px" }} text={`* Make sure to make a good choose of words, and the Important purpose of the Email.`} />
                <Paragraph style={{ padding: "5px", fontSize: "18px" }} text={`* Rembember to descripe your suggestion or report in a simple word and don't go complicated.`} />
                <Paragraph style={{ padding: "5px", fontSize: "18px" }} text={`* Wise use of the email form the most you can, you are not the only one and we may resive a lot of this emails.`} />
            </div>
            <Form
                onSubmit={onSubmit}
                formRef={formRef} />
        </section>
    )
}