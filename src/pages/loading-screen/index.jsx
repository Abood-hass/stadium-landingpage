import './style.css'

export default function LoadingScreen() {
    return (
        <div className='loading-screen-page-container' id='loading-screen-page'>
            <img className='ball' height={"60"} width={"60"} src="assets\loading-screen\football-50.png" alt="" />
            <img height={"6"} width={"64"} src="assets\loading-screen\horizontal-line-64.png" alt="" />
        </div>
    )
}

