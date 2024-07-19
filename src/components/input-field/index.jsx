// import React from 'react'

import './style.css'

export default function index({ ph, title, textArea, style, inputRef, inputId }) {
    return (
        <div style={style} className={`input-field-container ${textArea && " columnDir"}`}>
            <span>{title}</span>

            {
                textArea ?
                    <textarea ref={inputRef} id={inputId} name={inputId} placeholder={ph} /> :
                    <input ref={inputRef} id={inputId} name={inputId} placeholder={ph} />
            }
        </div>
    )
}