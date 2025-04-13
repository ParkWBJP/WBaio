import React from 'react';
import { translations } from '../lang';  // lang.js import
import CountUp from 'react-countup';
import './BottomBanner2.css';
import backgroundImg from '../assets/choong-deng-xiang-ILyeoImR8Uk-unsplash.jpg';

const BottomBanner2 = ({ language = 'ko' }) => {
  const t = translations[language]?.bottom2;  // translations에서 언어에 맞는 bottom2를 가져옵니다.

  return (
    <section
      className="bottom-banner2"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImg})`,
      }}
    >
      <div className="bottom-banner2-inner">
        <p className="summary-text">
          {t?.summaryText} {/* 다국어 텍스트 출력 */}
        </p>

        <div className="counts">
          <div className="count-item">
            <div className="number">
              <CountUp end={4650} duration={2.5} separator="," />억 원
            </div>
            <div className="label">{t?.countItem1.label}</div> {/* 다국어 텍스트 출력 */}
          </div>

          <div className="count-item">
            <div className="number">
              <CountUp end={46} duration={2.5} />%
            </div>
            <div className="label">{t?.countItem2.label}</div> {/* 다국어 텍스트 출력 */}
          </div>

          <div className="count-item">
            <div className="number">
              <CountUp end={350} duration={2.5} />명
            </div>
            <div className="label">{t?.countItem3.label}</div> {/* 다국어 텍스트 출력 */}
          </div>
        </div>
      </div>

      <div className="partner-logos">
        <img src="/logo/meta.png" alt="Meta" />
        <img src="/logo/google.png" alt="Google" />
        <img src="/logo/tiktok.png" alt="TikTok" />
        <img src="/logo/naver.png" alt="Naver" />
        <img src="/logo/kakao.png" alt="Kakao" />
        <img src="/logo/x.png" alt="X" />
        <img src="/logo/yahoo.png" alt="Yahoo" />
        <img src="/logo/line.png" alt="Line" />
      </div>
    </section>
  );
};

export default BottomBanner2;
