import React, { useState } from 'react';
import './BottomBanner.css';
import { translations } from '../lang'; // 다국어 import

const BottomBanner = ({ language = 'ko' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('up');

  const t = translations[language]?.bottom;

  const handleClick = (index) => {
    if (index === selectedIndex) return;
    setAnimationDirection(index > selectedIndex ? 'up' : 'down');
    setSelectedIndex(index);
  };

  return (
    <section className="bottom-banner">
      <h2 className="banner-title">{t?.title}</h2>

      <div className="bottom-banner-inner">
        <div className="left-buttons">
          {t?.service.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div className="button-label">{item.title}</div>
              {selectedIndex === index && (
                <>
                  <div className="button-description">{item.description}</div>
                  <div className="button-detail">{item.detail}</div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className={`right-content ${animationDirection === 'up' ? 'slide-up' : 'slide-down'}`}>
          <img
            src={`/assets/service${selectedIndex + 1}.png`}
            alt="서비스 이미지"
            className="service-image"
          />
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
