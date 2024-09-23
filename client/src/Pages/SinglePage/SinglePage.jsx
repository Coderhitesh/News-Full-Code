import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const SinglePage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('category') || ''; // Default to empty string if not found
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // State to track if news is loaded
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    const fetchNews = async () => {
      if (!query) {
        setNews([]); // Reset news if query is empty
        setIsLoaded(true);
        return;
      }
      setIsLoaded(false); // Start loading state
      try {
        const response = await axios.get(`https://www.api.aamawaz.com/api/news/category/${query}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]); // Reset news on error
      } finally {
        setIsLoaded(true); // End loading state
      }
    };

    setCurrentPage(1); // Reset to the first page on query change
    fetchNews();
  }, [query]);

  const displayedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < news.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className='py-12'>
      {!isLoaded ? (
        <div className='flex justify-center items-center w-full h-screen'>
          <Loader />
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className='text-xl font-semibold'>{query ? `${query} Latest News` : 'News'}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {isLoaded && news.length === 0 ? (
              <div className="flex flex-col items-center">
                <img loading='lazy' src="https://img.freepik.com/free-vector/flat-design-digital-detox-illustration_23-2149340862.jpg" alt="No news found" className="max-w-full h-auto" />
                <p className='text-center mt-4'>No news found in this category.</p>
              </div>
            ) : (
              displayedNews.map((item, index) => (
                <a href={`/news-page/${item._id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" key={index}>
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img loading='lazy' onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"} src={item.NewsHeadImage} alt={item.headline} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex justify-between text-sm text-gray-500">
                      <span className='font-semibold text-gray-700'>{item.newsCategory}</span>
                      <span>{new Date(item.createdAt).toLocaleString()}</span>
                    </div>
                    <p className='font-medium text-gray-800'>{item.headline}</p>
                    <div className="mt-2 text-xs text-gray-600">
                      <p>Covered By: {item.storyCoveredBy}</p>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
          {news.length > itemsPerPage && (
            <div className="mt-8 flex justify-between items-center">
              <button className="btn btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
              <span className="text-gray-600">Page {currentPage} of {Math.ceil(news.length / itemsPerPage)}</span>
              <button className="btn btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400" onClick={handleNextPage} disabled={currentPage * itemsPerPage >= news.length}>Next</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SinglePage;
