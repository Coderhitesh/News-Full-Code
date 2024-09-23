import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const generateLink = (category) => {
        return `/single-page?category=${encodeURIComponent(category)}`;
    };

    return (
        <>
            {/* Footer Start */}
            <div className="bg-gray-800 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="footer-widget">
                                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                                <div className="contact-info">
                                    <p className="mb-2"><i className="fa fa-map-marker"></i> 1/368-A, Ground Floor, Shri Ram Nagar, Shahdara, Delhi-110032</p>
                                    <p className="mb-2"><i className="fa fa-envelope"></i> info@aamawaz.com</p>
                                    <p className="mb-2"><i className="fa fa-phone"></i> 9910150906</p>
                                    <div className="social flex space-x-4 mt-4">
                                        <a target='_blank' rel='noreferrer' href="https://www.facebook.com/aamawaz.india"><i className="fab fa-facebook-f"></i></a>
                                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/aam-awaz-14234a8a"><i className="fab fa-linkedin-in"></i></a>
                                        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/aam_awaz/"><i className="fab fa-instagram"></i></a>
                                        <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@aamawaz9265"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="footer-widget">
                                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                                <ul>
                                    <li className="mb-2">
                                        <a href={generateLink('घर')} className='text-white hover:text-gray-400'>होम</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('देश')} className='text-white hover:text-gray-400'>देश</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('विदेश')} className='text-white hover:text-gray-400'>विदेश</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('राजनीति')} className='text-white hover:text-gray-400'>राजनीति</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('अपराध')} className='text-white hover:text-gray-400'>अपराध</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('मनोरंजन')} className='text-white hover:text-gray-400'>मनोरंजन</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('खेल')} className='text-white hover:text-gray-400'>खेल</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="footer-widget">
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul>
                                    <li className="mb-2">
                                        <a href={generateLink('स्वास्थ्य')} className='text-white hover:text-gray-400'>स्वास्थ्य</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('तकनिकी')} className='text-white hover:text-gray-400'>तकनिकी</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('व्यापर')} className='text-white hover:text-gray-400'>व्यापर</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('भ्रष्टाचार')} className='text-white hover:text-gray-400'>भ्रष्टाचार</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('दिल्ली-एनसीआर')} className='text-white hover:text-gray-400'>दिल्ली/एनसीआर</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={generateLink('वीडियो')} className='text-white hover:text-gray-400'>वीडियो</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="footer-widget">
                                <h3 className="text-lg font-semibold mb-4">Policies Links</h3>
                                <ul>
                                    <li className="mb-2">
                                        <Link to={'/contact'} className='text-white hover:text-gray-400'>Contact us</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to={'/About'} className='text-white hover:text-gray-400'>About</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to={'/privacy-policy'} className='text-white hover:text-gray-400'>Privacy Policy</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to={'/Disclaimer'} className='text-white hover:text-gray-400'>Disclaimer</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to={'/term-condition'} className='text-white hover:text-gray-400'>Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Footer Bottom Start */}
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left text-gray-500 text-sm mb-2 md:mb-0">
                            <p>Copyright &copy; 2024 <a href="/" className="text-white hover:underline">AAM AWAZ</a>. All Rights Reserved.</p>
                        </div>

                        <div className="text-center md:text-right text-gray-500 text-sm">
                            <p>Designed as per Guidelines of Ministry of Information and Broadcasting</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom End */}
        </>
    );
};

export default Footer;
