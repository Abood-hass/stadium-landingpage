import './style.css';

export default function index({ pfName, pfIcon, style }) {
    return (
        <div
            id={pfName}
            className={"social-media-icon-container"}
            style={style}>
            <span>
                {pfName}
            </span>
            <img width="28" height="28" src={pfIcon} alt={pfName.toLowerCase() + "-icon"} />
        </div>
    )
}