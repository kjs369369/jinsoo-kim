
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="register" className="text-center">
      <h2 className="text-3xl font-bold text-center mb-12">💰 <span className="text-emerald-300">수강료</span> 안내</h2>
      <div className="bg-gray-800 p-8 rounded-2xl max-w-2xl mx-auto border border-gray-700">
        <p className="text-2xl text-gray-400 line-through">정가 180만원</p>
        <p className="text-4xl font-bold my-2"><span className="text-gray-300">특별 할인가</span> <span className="text-emerald-300">68만원</span></p>
        <p className="text-5xl font-extrabold text-yellow-300 my-4 animate-pulse">얼리버드 42만원</p>
        <p className="text-gray-400 mb-6">현금, 카드 동일</p>
        <div className="text-left bg-gray-900 p-6 rounded-lg">
          <p className="font-bold text-lg mb-2">🤖 입금계좌</p>
          <p>신한은행 110-190-436777 (예금주: 김진수)</p>
          <p className="text-sm text-gray-400 mt-2">'입금자명+AI툴' 또는 '입금자명'으로 표기 부탁드립니다.</p>
        </div>
      </div>
      <a href="https://forms.gle/gQcMV7ZSbP2ckruD9" target="_blank" rel="noopener noreferrer" className="mt-12 inline-block bg-emerald-300 text-black font-bold py-4 px-10 rounded-full text-xl hover:bg-opacity-80 transition duration-300 transform hover:scale-105">
        신청서 작성하고 전문가 되기
      </a>
    </section>
  );
};

export default Pricing;
