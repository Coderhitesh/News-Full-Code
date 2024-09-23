import React, { useState, useEffect } from 'react';
import logo from './logo.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    const [headlines, setHeadlines] = useState([]);
    const generateLink = (category) => {
        return `/single-page?category=${encodeURIComponent(category)}`;
    }

    const fetchHeadlines = async () => {
        try {
            const response = await axios.get('https://www.api.aamawaz.com/api/news/headlines');
            setHeadlines(response.data.headlines);

        } catch (error) {
            console.error('Error fetching headlines:', error);
        }
    };
    useEffect(() => {
        fetchHeadlines()
    }, [])
    // State to track whether the sidebar is open or closed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Effect to close the sidebar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (e) => {
            const sidebar = document.getElementById('sidebar');
            const openSidebarButton = document.getElementById('open-sidebar');
            if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
                setIsSidebarOpen(false);
            }
        };

        // Add event listener to detect clicks outside the sidebar
        document.addEventListener('click', handleClickOutside);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-gray-100">
            <div style={{ maxWidth: '1920px', margin: '0 auto', width: '100%', position: 'relative' }} className='px-4 flex items-center h-12'>
                <div className=' h-full w-48 border z-10 bg-white text-black flex items-center justify-center absolute left-0 top-0'>
                    <p className=' font-bold'>Breaking News</p>
                </div>
                {headlines.map((item, index) => (
                    <p className="headlines-marquee" key={index}>
                        {item.headlineText}
                    </p>
                ))}
            </div>
            <div className=" flex overflow-hidden bg-gray-200">
                {/* Sidebar */}
                <div
                    id="sidebar"
                    className={`absolute bg-gray-800 z-20 text-white w-56 overflow-y-auto transition-transform transform ease-in-out duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    {/* Sidebar Content */}
                    <div className="p-4 h-screen">
                        <Link to={'/'} className="text-2xl font-semibold"><img src={logo} alt="" /></Link>
                        <ul className="mt-4">
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={'/'}>होम</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('देश')} >देश</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('विदेश')} >विदेश</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('राजनीति')} >राजनीति</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('अपराध')} >अपराध</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('मनोरंजन')} >मनोरंजन</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('खेल')} >खेल</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('स्वास्थ्य')} >स्वास्थ्य</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('तकनिकी')} >तकनिकी</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('व्यापर')} >व्यापर</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('भ्रष्टाचार')} >भ्रष्टाचार</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('दिल्ली-एनसीआर')} >दिल्ली-एनसीआर</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block hover:text-indigo-400" onClick={toggleSidebar} to={generateLink('वीडियो')} >वीडियो</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Navbar */}
                    <div className="bg-white shadow">
                        <div className=" mx-auto">
                            <div className="flex justify-between items-center py-6 px-4 border">
                                <Link to={'/'} className="text-xl font-semibold"><img width={180} src={logo} alt="" /></Link>

                                <button
                                    className="text-gray-500 hover:text-gray-600"
                                    id="open-sidebar"
                                    onClick={toggleSidebar}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Body */}
                    {/* <div className="flex-1 overflow-auto p-4">
                        <h1 className="text-2xl font-semibold">Welcome to our website</h1>
                        <p>... Content goes here ...</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
