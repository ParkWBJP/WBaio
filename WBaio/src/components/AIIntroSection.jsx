import React from 'react';
import './AIIntroSection.css';
import { translations } from '../lang'; // 🔥 번역 추가

const AIIntroSection = ({ language }) => {
  const t = translations[language]?.aioIntro || translations.ko.aioIntro;

  return (
    <section className="ai-intro-section">
      <div className="ai-intro-inner">
        {/* 왼쪽: AIO 설명 */}
        <div className="ai-intro-text">
          <h2>
            {t.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </h2>
          <p>
            {t.desc1.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </p>
          <p>
            <strong>
              {t.desc2.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </strong>
          </p>
          <p>
            {t.desc3.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* 오른쪽: 이미지 */}
        <div className="ai-intro-image">
          <video
            src="/assets/gpt-intro-video-h264.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="ai-video"
            style={{ width: '100%', maxWidth: '420px', minHeight: '300px', background: '#eee' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AIIntroSection;
