import React, { useContext } from 'react'
import ReadMore from './ReadMore'
import Slider from "react-slick";
import {Consumer} from '../useUrl'

function Shop() {

    const {IMAGE_PATH} = useContext(Consumer)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 611,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            }
        },
        {
            breakpoint: 1334,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            }
        }
        ]

    }
    return (
        <>
            <div className='shopHeading'>
                <span>SHOP</span>
                <h1>Surfboards</h1>
            </div>

            <div className='surfboards'>
                <Slider {...settings}>
                    <div className='itemsWrapper'>
                        <div className='surfBackground'>
                            <img className='surfImg' src={`${IMAGE_PATH}/images/3.png`} alt="surf" />
                            <div className="infoWrapper">
                                <p>FUNBOARDS</p>
                                <h1 >Chilli Rare Bird</h1>
                                <div className='priceWrapper'>
                                    <span className='price'>$890</span>
                                    <span className='buy'>BUY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='itemsWrapper'>
                        <div className='surfBackground'>
                            <img className='surfImg' src={`${IMAGE_PATH}/images/2.png`} alt="surf" />
                            <div className="infoWrapper">
                                <p>SURFBOARDS</p>
                                <h1>Emery NEM  XF</h1>
                                <div className='priceWrapper'>
                                    <span className='price'>$950</span>
                                    <span className='buy'>BUY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='itemsWrapper'>
                        <div className='surfBackground'>
                            <img className='surfImg' src={`${IMAGE_PATH}/images/3.png`} alt="surf" />
                            <div className="infoWrapper">
                                <p>V</p>
                                <h1>Agency GROM</h1>
                                <div className='priceWrapper'>
                                    <span className='price'>$670</span>
                                    <span className='buy'>BUY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='itemsWrapper'>
                        <div className='surfBackground'>
                            <img className='surfImg' src={`${IMAGE_PATH}/images/2.png`} alt="surf" />
                            <div className="infoWrapper">
                                <p>FUNBOARDS</p>
                                <h1 >Chilli Rare Bird</h1>
                                <div className='priceWrapper'>
                                    <span className='price'>$890</span>
                                    <span className='buy'>BUY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='itemsWrapper'>
                        <div className='surfBackground'>
                            <img className='surfImg' src={`${IMAGE_PATH}/images/3.png`} alt="surf" />
                            <div className="infoWrapper">
                                <p>FUNBOARDS</p>
                                <h1>Chilli Rare Bird</h1>
                                <div className='priceWrapper'>
                                    <span className='price'>$890</span>
                                    <span className='buy'>BUY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='itemsWrapper'>
                        <div className='surfBackground'>
                            <img className='surfImg' src={`${IMAGE_PATH}/images/2.png`} alt="surf" />
                            <div className="infoWrapper">
                                <p>FUNBOARDS</p>
                                <h1>Chilli Rare Bird</h1>
                                <div className='priceWrapper'>
                                    <span className='price'>$890</span>
                                    <span className='buy'>BUY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

                <div className='showAll'>
                    <ReadMore text={'SHOW ALL'} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} />

                </div>

            </div>
        </>
    )
}

export default Shop

