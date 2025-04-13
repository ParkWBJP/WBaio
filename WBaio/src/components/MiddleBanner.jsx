import React from 'react';
import './MiddleBanner.css';
import { translations } from '../lang';
import middleImage from '../assets/aio-visual.png';

const MiddleBanner = ({ language }) => {
  const t = translations[language]?.middle || translations.ko.middle;

  return (
    <section className="middle-banner">
      <div className="middle-content">
        <div className="left">
          <img src={middleImage} alt="AIO 시각화" />
        </div>
        <div className="right">
          <h2>
            {t.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
          </h2>
          <p>{t.description}</p>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
