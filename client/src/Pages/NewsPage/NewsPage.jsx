import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
   
} from "react-share";
import HelmetProvider from '../../Components/Meta/HelmetProvider.jsx';

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNews = useCallback(async () => {
        try {
            const response = await axios.get(`https://api.aamawaz.com/api/news/${id}`);
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    const fetchRelatedNews = useCallback(async () => {
        try {
            const response = await axios.get('https://api.aamawaz.com/api/news');
            const data = response.data;
            const filteredData = data.filter((item) => item.newsCategory === news?.newsCategory && item._id !== id);
            setRelatedNews(filteredData);
        } catch (error) {
            console.error('Error fetching related news:', error);
        }
    }, [news?.newsCategory, id]);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    useEffect(() => {
        if (news) {
            fetchRelatedNews();
        }
    }, [news, fetchRelatedNews]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader />
            </div>
        );
    }

    if (!news) {
        return (
            <section className="py-10">
                <div className="container mx-auto">
                    <div className="bg-yellow-200 text-center text-yellow-800 py-4 rounded">
                        No news found for this ID.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <HelmetProvider
                NewsHeading={news.headline}
                Description={news.storyCoveredBy}
                imageUrl={news.NewsHeadImage}
                NewsLink={window.location.href}
            />

            <section className="py-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Main News Content (80%) */}
                        <div className="w-full lg:w-2/3 p-5 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-blue-500 text-white px-2 py-1 rounded">{news.newsCategory}</span>
                                <span className="text-gray-600">{new Date(news.createdAt).toLocaleString()}</span>
                            </div>
                            <div className="mb-4">
                                {/* Social Share Buttons */}
                                <div className="flex gap-2 mb-2">
                                    <FacebookShareButton
                                        url={window.location.href}
                                        quote={news.headline}
                                        hashtag={`#${news.newsCategory}`}
                                    >
                                        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><FaFacebookSquare /></button>
                                    </FacebookShareButton>

                                    <TwitterShareButton
                                        url={window.location.href}
                                        title={news.headline}
                                        hashtags={[news.newsCategory]}
                                        via="YourTwitterHandle"
                                    >
                                        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><FaSquareXTwitter /></button>
                                    </TwitterShareButton>

                                    <LinkedinShareButton
                                        url={window.location.href}
                                        title={news.headline}
                                        summary={news.storyCoveredBy}
                                        source="YourWebsiteName"
                                    >
                                        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><FaLinkedin /></button>
                                    </LinkedinShareButton>

                                    <WhatsappShareButton
                                        url={window.location.href}
                                        title={news.headline}
                                        separator=":: "
                                    >
                                        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><FaSquareWhatsapp /></button>
                                    </WhatsappShareButton>
                                </div>
                                <p className="text-blue-600">Covered By: {news.storyCoveredBy}</p>
                            </div>
                            <div className="mb-4 h-[20rem] md:h-[30rem] w-full">
                                <img
                                    className="img-fluid w-full h-full rounded"
                                    loading="lazy"
                                    onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"}
                                    src={news.NewsHeadImage}
                                    alt={news.headline}
                                />
                            </div>
                            <h1 className="text-3xl font-bold mb-4">{news.headline}</h1>
                            <div
                                className="news-content"
                                dangerouslySetInnerHTML={{ __html: news.newsHtmlData }}
                            />
                        </div>

                        {/* Related News (20%) */}
                        <div className="w-full lg:w-1/3">
                            <h4 className="text-2xl px-4 font-semibold mb-4">Related News</h4>
                            <div className="space-y-4">
                                {relatedNews.length > 0 ? (
                                    relatedNews.map((related, index) => (
                                        <a
                                            key={index}
                                            href={`/news-page/${related._id}`}
                                            className="block p-4 bg-white shadow rounded hover:bg-gray-100"
                                        >
                                            <div className="mb-4">
                                                <img
                                                    className="w-full rounded h-[14rem] object-cover"
                                                    loading="lazy"
                                                    onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"}
                                                    src={related.NewsHeadImage}
                                                    alt={related.headline}
                                                />
                                            </div>
                                            <div className="flex justify-between">
                                                <h5 className="text-lg font-medium">{related.headline}</h5>
                                                <small className="text-gray-500">{new Date(related.createdAt).toLocaleDateString()}</small>
                                            </div>
                                        </a>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No related news available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsPage;
