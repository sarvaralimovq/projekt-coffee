import React from 'react'
import './Perfection.scss'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import imgPerfection from '../../img/imgPerfection.png'
import facePerfection from '../../img/Perfection__face.png'


// import required modules
import { Navigation } from 'swiper/modules';
function Perfection() {
    return (
        <div className='Perfection'>
            <div className="container">
                <div className="perfection__inner">
                    <div className="perfection__top">
                        <h2>Our coffee perfection feedback</h2>
                        <h4>Our customers has amazing things to say about us</h4>
                    </div>
                    <div className="perfection__center">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='Swiper-big'>
                                <div className="swiper__div">
                                    <span className='imgTop'><img src={imgPerfection} alt="imgPerfection" /></span>
                                    <div className='swiper__div-center'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                                        <h2>Jonny Thomas</h2>
                                        <h4>Project Manager</h4>
                                        <span>
                                            <img src={facePerfection} alt="facePerfection" />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfection
