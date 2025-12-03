import React, { useState } from 'react'; // 1. 記得引入 useState
import Nav from '../component/nav.jsx';
import '../sass/scss/item.scss';

const Item = () => {
  
  // 2. 把原本寫死的 HTML 整理成資料陣列 (方便管理)
  const allProducts = [
    { id: 1, img: "./img-item/p-1.png", name: "阿芙佳朵 | affogato", price: "NT$880" },
    { id: 2, img: "./img-item/p-2.png", name: "土星 | saturn", price: "NT$1,080" },
    { id: 3, img: "./img-item/p-3.png", name: "墜星 | Falling star", price: "NT$880" },
    { id: 4, img: "./img-item/p-4.png", name: "粼粼 | waving aqua", price: "NT$390" },
    { id: 5, img: "./img-item/p-5.png", name: "叔都比嘟 | scoopy doo", price: "NT$1,180" },
    { id: 6, img: "./img-item/p-6.png", name: "綠野仙蹤 | The Wizard of Oz", price: "NT$1,080" },
    { id: 7, img: "./img-item/p-7.png", name: "水果糖 | CANDY", price: "NT$390" },
    { id: 8, img: "./img-item/p-8.png", name: "冰公主 | ICE PRINCESS", price: "NT$880" }, // 幫你補上少了的 $
    { id: 9, img: "./img-item/p-9.png", name: "日日 | Everyday Necklace", price: "NT$980" },
  ];

  // 3. 設定狀態：一開始只顯示 6 個
  const [visibleCount, setVisibleCount] = useState(6);

  // 4. 按鈕點擊事件：把顯示數量改為全部 (或是 +3)
  const handleShowMore = () => {
    setVisibleCount(allProducts.length); // 顯示所有商品
  };

  return (
    <main>
        {/* Logo 區塊 */}
        <section className='item-logo'>
          <figure className='logo'>
            <img src="./logo.svg" alt="品牌 Logo" />
          </figure>
        </section>

        <Nav />

        {/* Banner 區塊 */}
        <section className='BN'>
          <div className='BN-title'>
            <img src="./img-home/icon2.png" alt="" className='icon-2' />
            <img src="./img-home/p0.svg" alt="" className="p0-item" />
            <img src="./img-item/item1.png" alt="" className="item1" />
            <h2 className='text-item'>MOST<br />POPULAR<br />ITEMS</h2>
            <img src="./img-home/p2-3.png" alt="" className="item4" />
            <img src="./img-item/item3.png" alt="" className="item3" />
            <img src="./img-item/item2.png" alt="" className="item2" />
            <img src="./img-home/icon1.png" alt="" className='icon-1' />
          </div>
        </section>

        {/* 商品列表區塊 */}
        <section className='item-content'>
            {/* 5. 使用 slice 切割陣列 (只取前 visibleCount 個)，然後 map 跑迴圈 */}
            {allProducts.slice(0, visibleCount).map((product) => (
                <div className='item-card' key={product.id}>
                    <img src={product.img} alt={product.name} className='item-card1' />
                    <h3 className='item-name'>{product.name}</h3>
                    <p className='item-price'>{product.price}</p>
                </div>
            ))}
        </section>

        {/* 按鈕區塊 */}
        {/* 6. 判斷：如果「目前顯示數量」小於「總數量」，才顯示按鈕 */}
        {visibleCount < allProducts.length && (
            <div className='p2-btn'>
                <button className='more' onClick={handleShowMore}>
                    <span className="star-left">✦</span>
                    <span className="text">More beadery</span>
                    <span className="star-right">✦</span>
                </button>
            </div>
        )}

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
        

    </main>
  )
}

export default Item;