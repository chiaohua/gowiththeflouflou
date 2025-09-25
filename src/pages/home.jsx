import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Nav from '../component/nav.jsx';
import '../sass/scss/home.scss';

const Home = () => {
    const [p1LogoVisible, setP1LogoVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setP1LogoVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const { ref: p1LogoRef, inView: p1LogoInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // 偵測 swim 文字的可見性
    const { ref: swimRef, inView: swimInView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    const { ref: p2Photo1Ref, inView: p2Photo1InView } = useInView({
        triggerOnce: false, // 讓動畫重複觸發
        threshold: 0,
        rootMargin: '500px 0px -200px 0px', // 在視窗下方建立 200px 的緩衝區
    });
    const { ref: p2Photo2Ref, inView: p2Photo2InView } = useInView({
        triggerOnce: false, // 讓動畫重複觸發
        threshold: 0,
        rootMargin: '500px 0px -200px 0px',
    });
    const { ref: p1FramedRef, inView: p1FramedInView } = useInView({
        triggerOnce: false, // 讓動畫重複觸發
        threshold: 0.2,      // 當產品區塊 20% 進入畫面時觸發
        rootMargin: '200px 0px -500px 0px', // 可選：調整偵測範圍，讓動畫更晚消失
    });
    const { ref: p3FramedRef, inView: p3FramedInView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '200px 0px -400px 0px',
    });
    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: true, // 這次只觸發一次，避免重複
        threshold: 0.5,    // 當區塊 20% 進入畫面時觸發
    });
    const { ref: p4PhotoRef, inView: p4PhotoInView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    // 新增 scroll-to-top 邏輯
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // 當滾動超過 300px 時顯示
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };




    return (
        <main>
            <section className='homeall'>
                <section className='home-logo'>
                    <figure className='logo'>
                        <img src="/logo.svg" alt="品牌 Logo" />
                    </figure>
                </section>
                <Nav />
                <section className='home-p1' id='p1'>
                    <section className='home-bg'>
                        <figure className='bg'>
                            <img src="/img-home/bg.png" alt="背景照片" />
                        </figure>
                        <figure className={`p1-logo ${p1LogoVisible ? 'logo-fade-in' : 'logo-initial'}`}>
                            <img src="/logo.svg" alt="品牌 Logo" />
                        </figure>
                    </section>
                    <div
                        ref={swimRef}
                        className={`swim ${swimInView ? 'swim-slide-in' : 'swim-initial'}`}
                    >
                        <h2>･₊ ˚ ౨ৎ ･₊ ˚come   swim   with   your   own   flow/u･₊ ˚ ౨ৎ ･₊ ˚</h2>
                    </div>
                    <section className='home-p1-photo'>
                        <a href="/p1-link">
                            <figure
                                ref={p1FramedRef} // 綁定 ref 到產品容器
                                className={`p1-framed ${p1FramedInView ? 'active-p0' : ''}`}
                            >
                                <img src="/img-home/p1.png" alt="產品一" className="p1-img" />
                                <img src="/img-home/p0.svg" alt="floufloü" className="p0-overlay p0-bottom-left" />
                                <h3>SATURN 土星</h3>
                                <div className='btn1'>
                                    <button className='top-1'>
                                        <span className="star-left">✦</span>
                                        <span className="text">TOP.1 SALE</span>
                                        <span className="star-right">✦</span>
                                    </button>
                                </div>
                            </figure>
                        </a>
                        <a href="/p2-link">
                            <figure className='p2-framed'>
                                <img src="/img-home/p2.png" alt="產品二" />
                                <h3>POCHONTAS 風中奇緣</h3>
                                <div className='btn2'>
                                    <button className='top-2'>
                                        <span className="star-left">✦</span>
                                        <span className="text">TOP.2 SALE</span>
                                        <span className="star-right">✦</span>
                                    </button>
                                </div>
                            </figure>
                        </a>
                        <a href="/p3-link">
                            <figure
                                ref={p3FramedRef} // 綁定 ref 到產品容器
                                className={`p3-framed ${p3FramedInView ? 'active-p0' : ''}`}
                            >
                                <img src="/img-home/p3.png" alt="產品三" className="p3-img" />
                                <img src="/img-home/p0.svg" alt="floufloü" className="p0-overlay p0-right-middle" />
                                <h3>AFFOGATO 阿芙佳朵</h3>
                                <div className='btn3'>
                                    <button className='top-3'>
                                        <span className="star-left">✦</span>
                                        <span className="text">TOP.3 SALE</span>
                                        <span className="star-right">✦</span>
                                    </button>
                                </div>
                            </figure>
                        </a>
                    </section>
                    <section className='home-p2' id='p2'>
                        <figure
                            className={`p2-photo-1 ${p2Photo1InView ? 'active' : ''}`}
                            ref={p2Photo1Ref}
                        >
                            <img src="/img-home/p2-1.png" alt="照片1" className="p2-1" />
                            <img src="/img-home/p2-2.png" alt="照片2" className="p2-2" />
                            <img src="/img-home/p2-3.png" alt="照片3" className="p2-3" />
                        </figure>
                        <figure
                            className={`p2-photo-2 ${p2Photo2InView ? 'active' : ''}`}
                            ref={p2Photo2Ref}
                        >
                            <img src="/img-home/p2-4.png" alt="照片4" className="p2-2-1" />
                            <img src="/img-home/p2-5.png" alt="照片5" className="p2-2-2" />
                            <img src="/img-home/p2-6.png" alt="照片6" className="p2-2-3" />
                        </figure>
                        <div className='p2-text'>
                            <h2 className='text-1'>narrative</h2>
                            <h2 className='text-2'>charm</h2>
                            <h2 className='text-3'>Grace</h2>
                            <h2 className='text-4'>WARMTH</h2>
                            <h2 className='text-5'>Handicraft</h2>
                            <h2 className='text-6'>Fashion</h2>
                            <h2 className='text-7'>Elegance</h2>
                        </div>
                        <figure className='icon1'>
                            <img src="/img-home/icon1.png" alt="" />
                        </figure>
                        <div className='icon2'>
                            <img src="/img-home/icon2.png" alt="" />
                        </div>
                        <div className='p2-btn'>
                            <button className='more'>
                                <span className="star-left">✦</span>
                                <span className="text">More beadery</span>
                                <span className="star-right">✦</span>
                            </button>
                        </div>
                    </section>
                    <section className='p3-video'>
                        <video autoPlay muted loop playsInline>
                            <source src="/img-home/output.mp4" type="video/mp4" />
                        </video>
                        <div className="video-overlay"></div>
                        <div className='border-video'></div>
                        <div className='logo-video'>
                            <img src="/logo.svg" alt="品牌 Logo" />
                        </div>
                        <div className='social-icons'>
                            <a href="https://www.instagram.com/gowiththeflouflou/" target="_blank" rel="noopener noreferrer">
                                <div className='ig'>
                                    <img src="/img-home/instagram.png" alt="Instagram" />
                                </div>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className='fb'>
                                    <img src="/img-home/facebook.png" alt="Facebook" />
                                </div>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className='line'>
                                    <img src="/img-home/line.png" alt="Line" />
                                </div>
                            </a>
                        </div>
                    </section>
                    <section className='home-p4' id='p4'>
                        <figure className='ourstory'>
                            <img src="./img-home/OUR STORY.png" alt="" />
                        </figure>
                        <div
                            className={`about ${aboutInView ? 'about-fade-in' : ''}`}
                            ref={aboutRef}
                        >
                            <figure className='about-photo'>
                                <img src="./img-home/logo-2.png" alt="" />
                            </figure>
                            <div className="border-with-icon-container">
                                <div className="left-border"></div>
                                <div className="icon-wrapper">
                                    <img src="/img-home/icon4.png" alt="Icon" className="icon-on-border" />
                                </div>
                                <div className="right-border"></div>
                            </div>
                            <p>gowiththeflouflou 是一個以串珠手作項鍊為主的飾品品牌，誕生於對「溫度」與「故事」的渴望。<br /><br />flou 是 flora 與 ou 的名字結合，象徵我們之間的友情與創作緊密相連。我們相信，每一條項鍊不僅是飾品，更是一段柔軟、真摯的記憶，陪伴你走過日常，也點亮特別的時刻。<br /><br />品牌以粉色與米色為主調，傳遞溫柔與活力的氛圍。每件作品都由我們親手製作，注重細節與質感，期望你能在這裡，找到那條專屬於自己的項鍊。<br /><br />希望在這個角落，你能找到屬於自己的小小光芒，為日常增添一份溫柔與閃爍。</p>
                        </div>
                        <figure
                            className={`p4-photo ${p4PhotoInView ? 'p4-photo-fade-in' : ''}`}
                            ref={p4PhotoRef}
                        >
                            <img src="./img-home/shop.png" alt="" />
                        </figure>

                    </section>
                    <section className='footer'>
                        <div className='footer-content'>
                            <div className='footer-links'>
                                <h3>gowiththeflouflou</h3>
                                <p>加入我們</p>
                                <p>聯繫我們</p>
                                <p>最新消息</p>
                            </div>
                            <div className="email-container">
                                <input className="email" type="email" id="email" name="email" placeholder="EMAIL" />
                                <button className="subscribe-btn">SUBSCRIBE</button>
                            </div>
                        </div>
                        <figure className='bg-bottom'>
                            <img src="./img-home/bg-bottom.png" alt="" />
                            <div className='copy'>
                                <p>© 2025 .gowiththeflouflou</p>
                            </div>
                        </figure>
                    </section>
                </section>
            </section>
            {showScrollButton && (
                <button className='scroll-to-top' onClick={scrollToTop}>
                    <div className='scroll-icon'>
                        <img src="/img-home/top.png" alt="Scroll to Top" />
                    </div>
                    <span className='scroll-text'>Scroll to top</span>
                </button>
            )}
        </main>
    );
};

export default Home;


// import React from 'react';

// import Nav from '../component/nav.jsx';
// import '../sass/scss/home.scss';

// const Home = () => {
//     return (
//         <main>
//             <section className='homeall'>
//                 <section className='home-logo'>
//                     <figure className='logo'>
//                         <img src="/logo.svg" alt="品牌 Logo" />
//                     </figure>
//                 </section>
//                 <Nav />
//                 <section className='home-p1' id='p1'>
//                     <section className='home-bg'>
//                         <figure className='bg'>
//                             <img src="/img-home/bg.png" alt="背景照片" />
//                         </figure>
//                         <figure className='p1-logo'>
//                             <img src="/logo.svg" alt="品牌 Logo" />
//                         </figure>
//                     </section>
//                     <div className='swim'>
//                         <h2>･₊ ˚ ౨ৎ ･₊ ˚come   swim   with   your   own   flow/u･₊ ˚ ౨ৎ ･₊ ˚</h2>
//                     </div>
//                     <section className='home-p1-photo'>
//                         <a href="/p1-link">
//                             <figure className='p1-framed'>
//                                 <img src="/img-home/p1.png" alt="產品一" className="p1-img" />
//                                 <img src="/img-home/p0.svg" alt="floufloü" className="p0-overlay p0-bottom-left" />
//                                 <h3>SATURN 土星</h3>
//                                 <div className='btn1'>
//                                     <button className='top-1'>
//                                         <span className="star-left">✦</span>
//                                         <span className="text">TOP.1 SALE</span>
//                                         <span className="star-right">✦</span>
//                                     </button>
//                                 </div>
//                             </figure>

//                         </a>

//                         <a href="/p2-link">
//                             <figure className='p2-framed'>
//                                 <img src="/img-home/p2.png" alt="產品二" />
//                                 <h3>POCHONTAS 風中奇緣</h3>
//                                 <div className='btn2'>
//                                     <button className='top-2'>
//                                         <span className="star-left">✦</span>
//                                         <span className="text">TOP.2 SALE</span>
//                                         <span className="star-right">✦</span>
//                                     </button>
//                                 </div>
//                             </figure>
//                         </a>

//                         <a href="/p3-link">
//                             <figure className='p3-framed' >
//                                 <img src="/img-home/p3.png" alt="產品三" className="p3-img" />
//                                 <img src="/img-home/p0.svg" alt="floufloü" className="p0-overlay p0-right-middle" />
//                                 <h3>AFFOGATO 阿芙佳朵</h3>
//                                 <div className='btn3'>
//                                     <button className='top-3'>
//                                         <span className="star-left">✦</span>
//                                         <span className="text">TOP.3 SALE</span>
//                                         <span className="star-right">✦</span>
//                                     </button>
//                                 </div>
//                             </figure>
//                         </a>
//                     </section>
//                     <section className='home-p2' id='p2'>
//                         <figure className='p2-photo-1'>
//                             <img src="/img-home/p2-1.png" alt="照片1" className="p2-1" />
//                             <img src="/img-home/p2-2.png" alt="照片2" className="p2-2" />
//                             <img src="/img-home/p2-3.png" alt="照片2" className="p2-3" />
//                         </figure>
//                         <figure className='p2-photo-2'>
//                             <img src="/img-home/p2-4.png" alt="照片4" className="p2-2-1" />
//                             <img src="/img-home/p2-5.png" alt="照片5" className="p2-2-2" />
//                             <img src="/img-home/p2-6.png" alt="照片6" className="p2-2-3" />
//                         </figure>
//                         <div className='p2-text'>
//                             <h2 className='text-1'>narrative</h2>
//                             <h2 className='text-2'>charm</h2>
//                             <h2 className='text-3'>Grace</h2>
//                             <h2 className='text-4'>WARMTH</h2>
//                             <h2 className='text-5'>Handicraft</h2>
//                             <h2 className='text-6'>Fashion</h2>
//                             <h2 className='text-7'>Elegance</h2>
//                         </div>
//                         <figure className='icon1'>
//                             <img src="/img-home/icon1.png" alt="" />
//                         </figure>
//                         <div className='icon2'>
//                             <img src="/img-home/icon2.png" alt="" />
//                         </div>
//                         <div className='p2-btn'>
//                             <button className='more'>
//                                 <span className="star-left">✦</span>
//                                 <span className="text">More beadery</span>
//                                 <span className="star-right">✦</span>
//                             </button>
//                         </div>
//                     </section>
//                     <section className='p3-video'>
//                         {/* 影片放在最底層 */}
//                         <video autoPlay muted loop playsInline>
//                             <source src="/img-home/output.mp4" type="video/mp4" />
//                         </video>

//                         {/* 半透明遮罩層 */}
//                         <div className="video-overlay"></div>

//                         {/* 邊框層，用來放白色邊框 */}
//                         <div className='border-video'></div>

//                         {/* Logo 和背景方框層，放在最上層 */}
//                         <div className='logo-video'>
//                             <img src="/logo.svg" alt="品牌 Logo" />
//                         </div>
//                         <div className='social-icons'>
//                             <a href="https://www.instagram.com/gowiththeflouflou/" target="_blank" rel="noopener noreferrer">
//                                 <div className='ig'>
//                                     <img src="/img-home/instagram.png" alt="Instagram" />
//                                 </div>
//                             </a>
//                             <a href="#" target="_blank" rel="noopener noreferrer">
//                                 <div className='fb'>
//                                     <img src="/img-home/facebook.png" alt="Facebook" />
//                                 </div>
//                             </a>
//                             <a href="#" target="_blank" rel="noopener noreferrer">
//                                 <div className='line'>
//                                     <img src="/img-home/line.png" alt="Line" />
//                                 </div>
//                             </a>
//                         </div>
//                     </section>
//                     <section className='home-p4' id='p4'>
//                         <figure className='ourstory'>
//                             <img src="./img-home/OUR STORY.png" alt="" />
//                         </figure>
//                         <div className='about'>

//                             <figure className='about-photo'>
//                                 <img src="./img-home/logo-2.png" alt="" />
//                             </figure>
//                             <div className="border-with-icon-container">
//                                 <div className="left-border"></div>
//                                 <div className="icon-wrapper">
//                                     <img src="/img-home/icon4.png" alt="Icon" className="icon-on-border" />
//                                 </div>
//                                 <div className="right-border"></div>
//                             </div>
//                             <p>gowiththeflouflou 是一個以串珠手作項鍊為主的飾品品牌，誕生於對「溫度」與「故事」的渴望。<br /><br />flou 是 flora 與 ou 的名字結合，象徵我們之間的友情與創作緊密相連。我們相信，每一條項鍊不僅是飾品，更是一段柔軟、真摯的記憶，陪伴你走過日常，也點亮特別的時刻。<br /><br />品牌以粉色與米色為主調，傳遞溫柔與活力的氛圍。每件作品都由我們親手製作，注重細節與質感，期望你能在這裡，找到那條專屬於自己的項鍊。<br /><br />希望在這個角落，你能找到屬於自己的小小光芒，為日常增添一份溫柔與閃爍。</p>
//                         </div>
//                         <figure className='p4-photo'>
//                             <img src="./img-home/shop.png" alt="" />
//                         </figure>
//                     </section>
//                     <section className='footer'>
//                         <div className='footer-content'>
//                             <div className='footer-links'>
//                                 <h3>gowiththeflouflou</h3>
//                                 <p>加入我們</p>
//                                 <p>聯繫我們</p>
//                                 <p>最新消息</p>
//                             </div>
//                             <div className="email-container">
//                                 <input className="email" type="email" id="email" name="email" placeholder="EMAIL" />
//                                 <button className="subscribe-btn">SUBSCRIBE</button>
//                             </div>
//                         </div>
//                         <figure className='bg-bottom'>
//                             <img src="./img-home/bg-bottom.png" alt="" />
//                             <div className='copy'>
//                                 <p>© 2025 .gowiththeflouflou</p>
//                             </div>
//                         </figure>

//                     </section>
//                 </section>


//             </section>


//         </main>
//     ); 3
// };


// export default Home;