
import React from 'react';

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <span className="text-emerald-300 mr-3">✔️</span>
    {children}
  </li>
);

const SpecialBenefits: React.FC = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-center mb-12">🎁 결과물 및 <span className="text-emerald-300">특별혜택</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-700">
        <ul className="space-y-4">
          <BenefitItem>AI툴 프로그램 지원 (바이브코딩, 에이전틱 AI 툴 유료지원)</BenefitItem>
          <BenefitItem>강의 녹화본, 요약, 실습 자료, 프롬프트, 링크 제공</BenefitItem>
          <BenefitItem>강의 진행 및 자료 제공을 위한 페들렛 제공</BenefitItem>
          <BenefitItem>AI 관련 자격증 취득 지원 (3종 중 1종 수강료 포함)</BenefitItem>
          <BenefitItem>갤러리 전시 기회 제공 (전시 확인서, 예술인 등록 활용)</BenefitItem>
          <BenefitItem>다양한 분야의 유료급 특강 녹화본 지속 제공</BenefitItem>
        </ul>
        <ul className="space-y-4">
          <BenefitItem>비범한 김소장의 GPTs 20개 + 매월 유료 GPTs 무상 제공</BenefitItem>
          <BenefitItem>AI 활용 프롬프트 템플릿 4,600개 제공 (2회차)</BenefitItem>
          <BenefitItem>17개 영역별 프롬프트 템플릿 총 10,000개 제공 (3회차)</BenefitItem>
          <BenefitItem>미드저니, 영상 프롬프트 사전 제공 및 활용법 (4회차)</BenefitItem>
          <BenefitItem>메타프롬프트 자료 수시로 지속 제공</BenefitItem>
          <BenefitItem>AI토커 브랜드 챗봇 제작 및 비즈니스 특강 개최 예정</BenefitItem>
        </ul>
      </div>
    </section>
  );
};

export default SpecialBenefits;
