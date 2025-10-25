
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getFadeInUpClass = (baseDelay: string) => `fade-in-up ${isMounted ? 'visible' : ''} ${baseDelay}`;

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-700 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <p className={`text-lg md:text-xl text-gray-300 mb-4 ${getFadeInUpClass('delay-0')}`}>안녕하세요? 김진수입니다.~</p>
        <h1 className={`text-4xl md:text-6xl font-black text-white leading-tight mb-4 ${getFadeInUpClass('delay-100')}`}>
          🧠 지금은 <span className="text-emerald-300">'바이브코딩'</span> 시대!<br />당신의 아이디어가 앱이 되는 순간
        </h1>
        <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 ${getFadeInUpClass('delay-200')}`}>
          "코딩 몰라도, AI가 대신 합니다!” 생성형 AI가 당신의 아이디어를 실현합니다.
          <br />다양한 <span className="font-bold text-emerald-300">앱빌더(App Builder)</span> 툴로 누구나 앱을 만드는 집중 마스터클래스!
        </p>
        <a href="https://forms.gle/gQcMV7ZSbP2ckruD9" target="_blank" rel="noopener noreferrer" className={`inline-block bg-emerald-300 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-105 ${getFadeInUpClass('delay-300')}`}>
          🚀 지금 바로 신청하기
        </a>
      </div>
    </header>
  );
};

export default Header;
