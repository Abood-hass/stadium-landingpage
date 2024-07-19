
import './style.css'


export default function index({title}) {
    return (

        <div className='section-header-container'>
            <h3>
                {title || ""}
            </h3>
        </div>

    )
}
