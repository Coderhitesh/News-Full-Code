
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

function Hero() {
    const [News, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://api.aamawaz.com/api/news');
            const data = response.data;
            // console.log(data)
            const FilterSlideData = data.filter((item) => item.ShowAtSlider === true);
            setNews(FilterSlideData);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);
    return (
        <div className=' w-full h-[450px] bg-[whitesmoke]'>
            <div className=' max-w-[1920px] h-full m-[0 auto] py-6 px-4 w-full flex items-center justify-center gap-3 md:flex-row flex-col'>
                <div className=' md:w-[48%] w-[100%] h-full topnews-section'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper h-full"
                    >
                        {News && News.map((item, index) => (
                            <SwiperSlide onClick={() => window.location.href = `/news-page/${item._id}`} key={index} className='tranding-main-box'>
                                <div className="img">
                                    <img loading='lazy' onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"} src={item.NewsHeadImage} alt={item.headline} />
                                </div>
                                <div className="content">
                                    <div className="cate-date">
                                        <span className="cate">{item.newsCategory}</span>
                                        <span className="date text-white">{new Date(item.createdAt).toLocaleString()}</span>
                                    </div>
                                    <p>{item.headline}</p>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
                <div className=' md:w-[48%] w-[100%] h-full'>
                <iframe width="560" height={'100%'} src="https://www.youtube.com/embed/dMHe9sEN4uw?si=cmiDj_KCI6Ke-woD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hero
