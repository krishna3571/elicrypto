// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './Thumb.css'
// import { useLocation } from "react-router-dom";
// import img1 from './image/watch.png'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExpand } from '@fortawesome/free-solid-svg-icons';



// function Thumb() {

//     const location = useLocation();
//     const data = location.state;

//     console.log('first', data)


//     // all

//     const [blogs, setBlogs] = useState([]);
//     const navigate = useNavigate();
//     // const [gmid, setGmid] = useState([])

//     // let dataMy = []

//     useEffect(() => {
//         axios.get('https://cors-anywhere.herokuapp.com/https://cloudapis.xyz/infinity/QurekaModule/NewAtmegameLink.json')
//             .then((response) => {
//                 // handle success
//                 console.log(response.data);
//                 // dataMy.push(response.data)
//                 setBlogs(response.data)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })


//     }, []);

//     const handalClickImg = (item) => {
//         // dataMy.push(item)
//         // console.log(item)
//         // setGmid(item)
//         navigate('/thumb', { state: item })
//     }

//     const [showIframe, setShowIframe] = useState(false);

//     const handlePlayGameClick = () => {
//         setShowIframe(true);
//     };


//     const handleFullScreenClick = () => {
//         const iframe = document.querySelector('.iframe');

//         if (iframe.requestFullscreen) {
//             iframe.requestFullscreen();
//         } else if (iframe.mozRequestFullScreen) { /* Firefox */
//             iframe.mozRequestFullScreen();
//         } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//             iframe.webkitRequestFullscreen();
//         } else if (iframe.msRequestFullscreen) { /* IE/Edge */
//             iframe.msRequestFullscreen();
//         }
//     };


//     return (
//         <>
//             < Header />
//             <h1 style={{ marginTop: '100px' }}></h1>

//             <section class="my-5">
//                 <div class="container">
//                     <div class="d-flex flex-column justify-content-center align-items-center" >
//                         <h4 style={{ fontSize: '30px', color: 'white' }}>Play Online - {data.gname}</h4>
//                         <br />
//                         <br />
//                         <div class="gameArea justify-content-center align-items-center w-100 position-relative">
//                             <iframe rel="noreferrer" src={data.gUrl}>
//                                 <div class="PlayBtn" id="playBtn">Play Game</div>
//                             </iframe>
//                             <div class="blackLayer" id="playBtn">
//                             </div>
//                             <img src={data.wall} alt="Game" draggable="false" class="img-fluid bannerImg" />
//                         </div>
//                         <div class="w-100 optiomsBar d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between align-items-center p-3 cusOver">
//                             <div class="d-none d-lg-flex justify-content-start justify-content-lg-end align-items-center mb-4 mb-lg-0">
//                                 <img src={data.small_wall} alt="Online Game" draggable="flase" class="rounded-3 barImg" />
//                                 <div class="ms-2 d-flex flex-column "><span style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.gname}</span>
//                                     <span class="cl-peta d-flex justify-content-start align-items-center" style={{ color: 'var(--theme-peta-text)', fontSize: '15px' }} >
//                                         <img src={img1} alt="watchlist icon" draggable="false" class="me-1" style={{ width: '22px' }} />50k</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* <section className="my-5">
//                 <div className="container">
//                     <div className="d-flex flex-column justify-content-center align-items-center">
//                         <h4 style={{ fontSize: '30px', color: 'white' }}>Play Online - {data.gname}</h4>
//                         <br />
//                         <br />
//                         <div className="gameArea justify-content-center align-items-center w-100 position-relative">
//                             {!showIframe && (
//                                 <div className='blackLayer' id='playBtn'>
//                                     <img src={data.wall} alt="Game" draggable="false" className="img-fluid bannerImg" />
//                                     <div className="PlayBtn" id="playBtn" onClick={handlePlayGameClick}>Play Game</div>
//                                 </div>
//                             )}
//                             {showIframe && (
//                                 <iframe title={data.gname} src={data.gUrl}></iframe>
//                             )}
//                         </div>
//                         <div className="w-100 optiomsBar d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between align-items-center p-3 cusOver">
//                             <div className="d-none d-lg-flex justify-content-start justify-content-lg-end align-items-center mb-4 mb-lg-0">
//                                 <img src={data.small_wall} alt="Online Game" draggable="false" className="rounded-3 barImg" />
//                                 <div className="ms-2 d-flex flex-column ">
//                                     <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.gname}</span>
//                                     <span className="cl-peta d-flex justify-content-start align-items-center" style={{ color: 'var(--theme-peta-text)', fontSize: '15px' }}>
//                                         <img src={img1} alt="watchlist icon" draggable="false" className="me-1" style={{ width: '22px' }} />50k
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}


//             {/* <section className="my-5">
//                 <div className="container">
//                     <div className="d-flex flex-column justify-content-center align-items-center">
//                         <h4 style={{ fontSize: '30px', color: 'white' }}>Play Online - {data.gname}</h4>
//                         <br />
//                         <br />
//                         <div className="gameArea justify-content-center align-items-center w-100 position-relative">
//                             {!showIframe && (
//                                 <div className='blackLayer' id='playBtn'>
//                                     <img src={data.wall} alt="Game" draggable="false" className="img-fluid bannerImg" />
//                                     <div className="PlayBtn" id="playBtn" onClick={handlePlayGameClick}>Play Game</div>
//                                 </div>
//                             )}
//                             {showIframe && (
//                                 <>
//                                     <iframe title={data.gname} src={data.gUrl} className="iframe"></iframe>
//                                     <button className='fullscreen123' onClick={handleFullScreenClick}>click full</button>
//                                 </>
//                             )}
//                         </div>

//                         <div className="w-100 optiomsBar d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between align-items-center p-3 cusOver">
//                             <div className="d-none d-lg-flex justify-content-start justify-content-lg-end align-items-center mb-4 mb-lg-0">
//                                 <img src={data.small_wall} alt="Online Game" draggable="false" className="rounded-3 barImg" />
//                                 <div className="ms-2 d-flex flex-column ">
//                                     <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.gname}</span>
//                                     <span className="cl-peta d-flex justify-content-start align-items-center" style={{ color: 'var(--theme-peta-text)', fontSize: '15px' }}>
//                                         <img src={img1} alt="watchlist icon" draggable="false" className="me-1" style={{ width: '22px' }} />50k
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}


//             <section>
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-12">
//                             <p style={{ color: 'white', fontSize: '20px' }}>
//                                 {data.gDesc}
//                             </p>
//                             <p style={{ color: 'white', fontSize: '20px' }}>
//                                 Zombie Attack is a thrilling multiplayer battle royale with beloved tiny troopers fighting for victory! Battle for survival using different weapons and win the match!
//                                 <br /><br />
//                                 Reasons to enjoy Zombie Attack:
//                                 <br /><br />
//                                 - Nimble mini warriors
//                                 <br />- Quick & exciting game sessions
//                                 <br />- 68 brawlers to unlock
//                                 <br />- Up to 50 weapons: guns, axes and more
//                                 <br />- Nice boosts: collect them on the battlefield
//                                 <br />- Cool skins
//                                 <br />- Solo PvE battles & other modes
//                                 <br />- Authentic map & graphics
//                                 <br />- Pocket format of mobile multiplayer action
//                                 <br /><br />
//                             </p>
//                             <div class="d-flex flex-wrap" style={{ color: 'white', fontSize: '20px' }}>
//                                 <div class="cusBadge">
//                                     <h6 class="cusH">Warrior Game</h6>
//                                 </div><div class="cusBadge">
//                                     <h6 class="cusH">Warrior - Thop Games</h6>
//                                 </div>
//                                 <div class="cusBadge">
//                                     <h6 class="cusH">Zombie Attack HTML5 Game</h6>
//                                 </div>
//                                 <div class="cusBadge">
//                                     <h6 class="cusH">Online Warriror Attack</h6>
//                                 </div>
//                                 <div class="cusBadge">
//                                     <h6 class="cusH">play Warrior</h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* all */}


//             <header>

//                 <div className="container">

//                     <div className='row mt-5' >
//                         {
//                             blogs.map((item) => {
//                                 return (
//                                     <>
//                                         <div className='col-xs-4 col-sm-6 col-md-4 col-lg-2 col-6' style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
//                                             <div class="MainHVR d-flex justfy-content-center align-items-center" onClick={() => handalClickImg(item)}>
//                                                 <div class="DataName">{item.gname}</div>
//                                                 <div class="databg"></div>
//                                                 <img src={item.thumbnail} alt="Game Images" style={{ borderRadius: '70px', marginTop: '30px' }} draggable="false" class="img-fluid HvrIMG mx-auto image" />
//                                             </div>
//                                         </div>


//                                     </>
//                                 )

//                             })
//                         }
//                     </div>

//                 </div>

//             </ header>

//         </>
//     )
// }

// export default Thumb

// Thumb.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import './Thumb.css';
import img1 from './image/watch.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import AdsComponent from './ads'; // Make sure this is the correct import path
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function Thumb() {
    const location = useLocation();
    const data = location.state;

    const [blogs, setBlogs] = useState([]);
    const Navigate = useNavigate();
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://cloudapis.xyz/infinity/QurekaModule/NewAtmegameLink.json')
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleClickImg = (item) => {
        const encodedGname = encodeURIComponent(item.gname).replaceAll('%20', '-');
        Navigate(`/play?gname=${encodedGname}`, { state: item });
        setShowIframe(false); // Ensure iframe is hidden
        setTimeout(() => {
            window.scrollTo(0, 0); // Scroll to the top of the page after state update
        }, 100);
    };

    const handlePlayGameClick = () => {
        setShowIframe(true);
        setTimeout(() => {
            window.scrollTo(0, 0); // Scroll to the top of the page after state update
        }, 100);
    };

    const handleFullScreenClick = (ittem) => {

        const encodedGname = encodeURIComponent(ittem.gname).replaceAll('%20', '-');
        Navigate(`/game?play=${encodedGname}`, { state: ittem });
        // console.log(ittem)
        // Navigate('/game', { state: ittem })
        // const iframe = document.querySelector('.iframe');
        // if (iframe.requestFullscreen) {
        //     iframe.requestFullscreen();
        // } else if (iframe.mozRequestFullScreen) { // Firefox
        //     iframe.mozRequestFullScreen();
        // } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        //     iframe.webkitRequestFullscreen();
        // } else if (iframe.msRequestFullscreen) { // IE/Edge
        //     iframe.msRequestFullscreen();
        // }
    };

    // useEffect(() => {
    //     try {
    //         (adsbygoogle = window.adsbygoogle || []).push({});

    //     } catch (error) {

    //     }
    // }, [])


    return (
        <>
            <Header />

            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.gname}</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta property="og:image" content={data.small_wall} />
            </Helmet>
            <Helmet>
                <title>{data.gname}</title>
                <meta name="description" content={data.gDesc} />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content={'elicrypto'} />
                <meta property="og:title" content={data.gname} />
                <meta property="og:description" content={data.gDesc} />
                <meta property="og:image" content={data.small_wall} />
                <meta property="og:url" content={data.gUrl} />
                <meta name="twitter:title" content={data.gname} />
                <meta name="twitter:description" content={data.gDesc} />
                <meta name="twitter:image" content={data.small_wall} />
                <meta name="twitter:card" content={data.thumbnail} />
                {/* <link id="favicon" rel="icon" href={data.small_wall} type="image/x-icon" data-react-helmet="true" /> */}




            </Helmet>

            <h1 style={{ marginTop: '100px' }}></h1>

            <section className="my-5">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h4 style={{ fontSize: '30px', color: 'white' }}>Play Online - {data.gname}</h4>
                        <br />
                        <br />
                        <div className="gameArea justify-content-center align-items-center w-100 position-relative">
                            {!showIframe ? (
                                <>
                                    <img src={data.wall} alt="Game" draggable="false" className="img-fluid bannerImg" />
                                    <button className="blackLayer" id="playBtn" onClick={handlePlayGameClick}>
                                        <div className="PlayBtn" id="playBtn">Play Game</div>
                                    </button>
                                </>
                            ) : (
                                <>
                                    {/* <iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style={{width: '100%',height: '100%',border: '0px'}} src="https://zv1y2i8p.play.gamezop.com/g/UYiznUAya"> </iframe> */}




                                    <iframe
                                        title={data.gname}
                                        src={data.gUrl}
                                        className="iframe"
                                        style={{ width: '100%', height: '500px' }}
                                        allowFullScreen
                                    ></iframe>
                                    <button className="fullscreen123" onClick={() => handleFullScreenClick(data)}>
                                        <FontAwesomeIcon className='icon-all-size' icon={faExpand} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="w-100 optionsBar d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between align-items-center p-3 cusOver" style={{ background: 'white' }}>
                            <div className="d-none d-lg-flex justify-content-start justify-content-lg-end align-items-center mb-4 mb-lg-0">
                                <img src={data.small_wall} alt="Online Game" draggable="false" className="rounded-3 barImg" />
                                <div className="ms-2 d-flex flex-column">
                                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.gname}</span>
                                    <span className="cl-peta d-flex justify-content-start align-items-center" style={{ color: 'var(--theme-peta-text)', fontSize: '15px' }}>
                                        <img src={img1} alt="watchlist icon" draggable="false" className="me-1" style={{ width: '22px' }} />50k
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p style={{ color: 'white', fontSize: '20px' }}>
                                {data.gDesc}
                            </p>
                            <p style={{ color: 'white', fontSize: '20px' }}>
                                Zombie Attack is a thrilling multiplayer battle royale with beloved tiny troopers fighting for victory! Battle for survival using different weapons and win the match!
                                <br /><br />
                                Reasons to enjoy {`${data.gname}`}:
                                <br /><br />
                                - Nimble mini warriors
                                <br />- Quick & exciting game sessions
                                <br />- 68 brawlers to unlock
                                <br />- Up to 50 weapons: guns, axes and more
                                <br />- Nice boosts: collect them on the battlefield
                                <br />- Cool skins
                                <br />- Solo PvE battles & other modes
                                <br />- Authentic map & graphics
                                <br />- Pocket format of mobile multiplayer action
                                <br /><br />
                            </p>
                            <div className="d-flex flex-wrap" style={{ color: 'white', fontSize: '20px' }}>
                                <div className="cusBadge">
                                    <h6 className="cusH">Warrior Game</h6>
                                </div>
                                <div className="cusBadge">
                                    <h6 className="cusH">Warrior - Thop Games</h6>
                                </div>
                                <div className="cusBadge">
                                    <h6 className="cusH">Zombie Attack HTML5 Game</h6>
                                </div>
                                <div className="cusBadge">
                                    <h6 className="cusH">Online Warrior Attack</h6>
                                </div>
                                <div className="cusBadge">
                                    <h6 className="cusH">Play Warrior</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5">
                        {blogs.map((item, index) => (
                            <div key={index} className='col-xs-4 col-sm-6 col-md-4 col-lg-2 col-6' style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                                <div className="MainHVR d-flex justify-content-center align-items-center" onClick={() => handleClickImg(item)}>
                                    <div className="DataName">{item.gname}</div>
                                    <div className="databg"></div>
                                    <img src={item.thumbnail} alt="Game Images" style={{ borderRadius: '70px', marginTop: '30px' }} draggable="false" className="img-fluid HvrIMG mx-auto image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
            {/* <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-format="fluid"
                data-ad-layout="in-article"
                data-ad-client="ca-pub-0123456789101112"
                data-ad-slot="9876543210"></ins> */}
        </>
    );
}

export default Thumb;
