import './style.css'

export default function index({ text, style }) {
    return (
        <div
            style={style}
            className='para-container'>
            <p>
                {text}
            </p>
        </div>
    )
}