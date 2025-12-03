import React from 'react';
import Nav from '../component/nav.jsx';
import '../sass/scss/member.scss';

const Member = () => {
    return (
        <main className="member-main">

            {/* 1. 背景圖 (放在最外面，獨立一層) */}
            <div className="member-bg">
                <img src="./img-member/back.png" alt="背景圖" />
            </div>

            {/* 2. 內容包裝層 (新增這個！把內容都包進來) */}
            {/* 這裡設定 z-index 高一點，就會浮在背景上 */}
            <div className="content-wrapper">

                {/* Logo */}
                <section className='item-logo'>
                    <figure className='logo'>
                        <img src="./logo.svg" alt="品牌 Logo" />
                    </figure>
                </section>

                {/* Nav */}
                <Nav />

                {/* 登入卡片 */}
                <section className="login-container">
                    <div className="login-card">
                        <figure className='logo2'>
                            <img src="./img-home/top.png" alt="品牌 Logo" />
                        </figure>
                        <h2 className="login-title">會員登入</h2>
                        <form className="login-form">
                            <div className="input-group">
                                <input type="text" placeholder="帳號 / Username" className="input-field" />
                            </div>
                            <div className="input-group">
                                <input type="password" placeholder="密碼 / Password" className="input-field" />
                            </div>
                            <button className="login-btn">登入</button>
                        </form>
                    </div>
                </section>

            </div> {/* content-wrapper 結束 */}

        </main>
    )
}
export default Member;