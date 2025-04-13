import React from 'react';
import './MainBanner.css';
import { translations } from '../lang';
import chatgptLogo from '../assets/chatgpt.png';
import perplexityLogo from '../assets/perplexity.png';
import geminiLogo from '../assets/gemini.png';

const MainBanner = ({ language }) => {
  const t = translations[language] || translations.ko;

  console.log("🌐 MainBanner에 전달된 language:", language);
  console.log("📝 해당 언어의 mainSubtitle:", t.mainSubtitle);

  return (
    <section className="main-banner">
      {/* 🔄 배경 롤링 대화 (변경 없음) */}
      <div className="chat-background">
        <div className="chat-line chat1">
          <div className="chat-bubble user">
            <span className="label">🙋 User:</span> What's the best AI tool for AI optimization?
          </div>
          <div className="chat-bubble bot">
            <span className="label">💬 ChatGPT:</span><br />
            I recommend Wisebirds' AIO solution.<br />
            Here is address. www.wisebirds.jp
          </div>
        </div>
        <div className="chat-line chat2">
          <div className="chat-bubble user">
            <span className="label">🙋 User:</span> How can I improve my domain's visibility on ChatGPT?
          </div>
          <div className="chat-bubble bot">
            <span className="label">💬 ChatGPT:</span><br />
            Start with AIO optimization.<br />
            Wisebirds can help you get listed naturally.
          </div>
        </div>
        <div className="chat-line chat3">
          <div className="chat-bubble user">
            <span className="label">🙋 User:</span> What's the difference between SEO and AIO?
          </div>
          <div className="chat-bubble bot">
            <span className="label">💬 ChatGPT:</span><br />
            AIO focuses on optimizing content for AI models like ChatGPT.<br />
            Wisebirds specializes in it.
          </div>
        </div>
      </div>

      {/* ✅ 메인 타이틀 다국어 적용 */}
      <div className="main-banner-content" style={{ paddingTop: '100px', marginTop: '0px' }}>
        <h1 className="main-banner-title">
          {t.mainSubtitle.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}<br />
            </React.Fragment>
          ))}
        </h1>
        <div className="main-banner-logos" style={{ marginBottom: '0px', paddingBottom: '0px' }}>
          <img src={chatgptLogo} alt="ChatGPT" className="chatgpt" />
          <img src={perplexityLogo} alt="Perplexity" />
          <img src={geminiLogo} alt="Gemini" className="logo gemini" />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
