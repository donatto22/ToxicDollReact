import { Link } from 'react-router-dom'
import AOS from 'aos'
import { useEffect } from 'react'
import './pagenotfound.css'
import "aos/dist/aos.css"

const PageNotFound = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh()
    }, [])
    return (
        <div id="container-error">
            <div id="error">
                <div id="text-error"
                data-aos="fade-up">
                    Oops!
                </div>

                <div id="min-text-error" 
                data-aos="fade-left">
                    Tan lejos no podré encontrarte!
                </div>

                <button id="back-to-home"
                data-aos="fade-right">
                    <Link to='/'>Volver a casa</Link>
                </button>
            </div>
        </div>
    )
}

export default PageNotFound
