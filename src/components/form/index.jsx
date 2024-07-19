// import React from 'react'
import InputField from '../input-field';

import './style.css'

export default function index({ formRef, onSubmit }) {

    return (
        <div className='form-container'>
            <form ref={formRef}>
                <InputField style={{ maxWidth: "500px" }} inputId={"sender_name"} title={"Name"} ph={"Your Name"} />
                <InputField style={{ maxWidth: "500px" }} inputId={"form_subject"} title={"Subject"} ph={"Subject"} />
                <InputField title={"Content"} inputId={"message"} ph={"Your Message"} textArea={true} />

                <div className='form-btns-container'>
                    <button onClick={onSubmit} >Submit</button>
                </div>
            </form>
        </div>
    )
}