import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function DelhiNCR() {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://www.api.aamawaz.com/api/news');
            const data = response.data;
            // console.log(data)
            const filterSlideData = data.filter((item) => item.newsCategory === "दिल्ली-एनसीआर");
            const reverceData = filterSlideData.reverse();
            console.log(reverceData)
            setNews(reverceData);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);
    return (
        <section style={{backgroundColor:'white'}} className='rajniti-section'>
            <div className="rajniti-container">
                <div className="heading">
                    <h2>राजनीति</h2>
                </div>
                <div className="main-container">
                    {
                        news && news.slice(0, 1).map((item, index) => (
                            <Link to={`/news-page/${item._id}`} className="left">
                                <div className="img">
                                    <img src={item.NewsHeadImage} alt={item.headline} />
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <p className='category'>{item.newsCategory}</p>
                                        <p>{new Date(item.createdAt).toLocaleString()}</p>
                                    </div>
                                    <h3>{item.headline}</h3>
                                    <p>Covered By: {item.storyCoveredBy}</p>
                                </div>
                            </Link>
                        ))
                    }

                    <div className="right">
                        {
                            news && news.slice(1, 5).map((item, index) => (
                                <Link to={`/news-page/${item._id}`}>{item.headline}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


export default DelhiNCR
