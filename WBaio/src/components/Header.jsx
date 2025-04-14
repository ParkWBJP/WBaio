import React from 'react';
import './header.css';

const Header = ({ language, setLanguage }) => {
  // 텍스트 정의
  const menuText = {
    ko: {
      intro: 'AIO란?',
      search: 'AI 검색',
      service: 'WB aio',
      company: 'Wisebirds',
      faq: 'FAQ',
      contact: '문의하기',
    },
    jp: {
      intro: 'AIOとは？',
      search: 'AI検索',
      service: 'WB aio',
      company: 'Wisebirds',
      faq: 'よくある質問',
      contact: 'お問い合わせ',
    },
    en: {
      intro: 'What is AIO?',
      search: 'AI Search',
      service: 'WB aio',
      company: 'Wisebirds',
      faq: 'FAQ',
      contact: 'Contact!',
    }
  };

  const t = menuText[language] || menuText.ko; // fallback: 한국어

  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* 왼쪽: 로고 */}
          <div className="left">
            <a href="#top" className="logo">
              <img src="/logo.png" alt="Wisebirds Logo" />
            </a>
          </div>

          {/* 가운데: 메뉴 */}
          <nav className="nav">
            <a href="#ai-intro">{t.intro}</a>
            <a href="#main-banner">{t.search}</a>
            <a href="#middle-banner">{t.service}</a>
            <a href="#bottom-banner">{t.company}</a>
            <a href="#faq">{t.faq}</a>
          </nav>

          {/* 오른쪽: 언어선택 */}
          <div className="right">
            <div className="cta">
              <img
                src="https://flagcdn.com/w40/kr.png"
                alt="한국어"
                className="flag"
                onClick={() => setLanguage("ko")}
              />
              <img
                src="https://flagcdn.com/w40/jp.png"
                alt="日本語"
                className="flag"
                onClick={() => setLanguage("jp")}
              />
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="flag"
                onClick={() => setLanguage("en")}
              />
            </div>
          </div>
        </div>
      </header>

  {/* 오른쪽 하단 플로팅 버튼 그룹 */}
  <div className="floating-buttons">
  <a
    href="https://aiodashboard.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-demo"
  >
    📊 Demo 통계 확인
  </a>
  <a href="#contact" className="floating-contact">
    {t.contact}
  </a>
</div>
</>
  );
};
export default Header;
