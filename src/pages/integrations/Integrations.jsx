import './integrations.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'

import Integration from '../../components/integration/Integration'

const Integrations = () => {
    return (
        <div id="main-integrations">
            <div id="container-integrations">
                <Integration title='Anime' links={['google.com', 'hola.com']} />

                <Integration title='Anime' />
                <Integration title='Anime' />
            </div>
        </div>
    )
}

export default Integrations
