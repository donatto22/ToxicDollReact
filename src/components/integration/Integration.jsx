/* eslint-disable import/no-duplicates */
import './integration.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import { useEffect, useState } from 'react'

const Integration = ({ title, links, images }) => {
    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(links)
    }, [])
    
    return (
        <div className="integration">
            <div className="left-integration">
                <div className="title-integration">
                    <h1>{ title }</h1>
                </div>  

                <div className="content-integration">
                    {
                        arr.map(link => (
                            <div key={link} className="link">
                                <a target='_blank' href={`https://${link}`}>{ link }</a>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="right-integration">
                <Swiper effect={'cards'} grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="img-slider">
                            <img src="./avatar.jpg" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-slider">
                            <img src="./avatar.jpg" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-slider">
                            <img src="./avatar.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Integration
