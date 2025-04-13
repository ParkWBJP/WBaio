import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top-link">
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
        </div>

        <div className="footer-info">
          <p><strong>事業者：</strong>株式会社 Wisebirds Japan (ワイズバーズ ジャパン) CEO Park Gun Soo (パク ゴンス)</p>
          <p>［日本表記］〒105-0012　東京都港市芝大門1丁目9-9 ワイズバーズジャパン6F</p>
          <p>［英語表記］〒105-0012 Tokyo, Minato City, Shibadaimon, 1 Chome−9−9 Wisebirds Japan 6F</p>

          <div className="footer-contact">
            <p><strong>問い合わせ先</strong></p>
            <p>E-mail : <a href="mailto:contact@wisebirds.jp">contact@wisebirds.jp</a></p>
            <p>Tel : 03-6435-6205</p>
          </div>
        </div>

        <div className="footer-bottom">
          COPYRIGHT©2023 by Wisebirds Japan AllRight Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
