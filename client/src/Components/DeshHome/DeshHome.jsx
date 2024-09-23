import React, { useEffect, useState } from 'react'
import './DeshHome.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeshHome() {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://www.api.aamawaz.com/api/news');
      const data = response.data;
      // console.log(data)
      const filterSlideData = data.filter((item) => item.newsCategory === "देश");
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
    <section className='desh-section'>
      <div className="desh-container">
        <div className="heading">
          <h2>देश</h2>
        </div>
        <div className="main-container">
          <div className="left">
            {
              news && news.slice(0,1).map((item, index) => (
                <div className="top">
                  <div className="img">
                    <img src={item.NewsHeadImage} alt={item.headline} />
                  </div>
                  <div className="text">
                    <div className="detail">
                      <p className='category'>{item.newsCategory}</p>
                      <p>{new Date(item.createdAt).toLocaleString()}</p>
                    </div>
                    <h3>{item.headline}</h3>
                    <p>Covered By: {item.storyCoveredBy}</p>
                  </div>
                </div>
              ))
            }

            <div className="bottom">
              {
                news && news.slice(1,4).map((item,index)=>(
                  <Link to={`/news-page/${item._id}`}>{item.headline}</Link>
                ))
              }
            </div>
          </div>
          <div className="right">
            <h2 className='text-2xl font-extrabold text-center'>Place Your Ads On This Place</h2>
              <img src="https://img.freepik.com/free-vector/flat-design-train-travel-horizontal-banner_23-2150433502.jpg?t=st=1725799450~exp=1725803050~hmac=17803d4553be73d330a7b2ef895f682b56b4a589c2ff3a4b8bd9e1c953af9201&w=996" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeshHome
