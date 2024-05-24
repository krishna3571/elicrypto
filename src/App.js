import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from "react-helmet";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://cloudapis.xyz/infinity/QurekaModule/NewAtmegameLink.json')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClickImg = (item) => {
    const encodedGname = encodeURIComponent(item.gname).replaceAll('%20', '-');
    navigate(`/play?gname=${encodedGname}`, { state: item });
  };

  // useEffect(() => {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }, []);

  return (
    <>
      <Header />
      <header>
        <div className="container">
          <div className='row mt-5'>
            {blogs.map((item) => (
              <div key={item.id} className='col-xs-4 col-sm-6 col-md-4 col-lg-2 col-6' style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <div className="MainHVR d-flex justify-content-center align-items-center" onClick={() => handleClickImg(item)}>
                  <div className="DataName">{item.gname}</div>
                  <div className="databg"></div>
                  <img src={item.thumbnail} alt="Game Images" style={{ borderRadius: '70px', marginTop: '30px' }} draggable="false" className="img-fluid HvrIMG mx-auto image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-12121212'
        data-ad-slot='12121212'
        data-ad-format='auto' /> */}
      <Footer />
    </>
  );
}
