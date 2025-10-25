
import React from 'react';

const SpecialOffer: React.FC = () => {
  return (
    <section className="my-24">
      <div className="border-4 border-emerald-300 border-dashed p-8 rounded-2xl text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">📢 🎁 이번 등록자만을 위한 특별 강의!</h3>
        <p className="text-lg">
          <span className="font-bold">11/2(일) 오후 7시, 1시간 특별강의 제공</span><br />
          <span className="text-xl text-emerald-300 font-black">앱빌더 기본기 마스터</span>
        </p>
      </div>
    </section>
  );
};

export default SpecialOffer;
