
import React from 'react';

const CheckIcon = () => <span className="text-emerald-300 mr-3 w-5 text-center">✔️</span>;
const HeartIcon = () => <span className="text-yellow-400 mr-3 w-5 text-center">💕</span>;

const CourseOverview: React.FC = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        🕒 AI 바이브코딩 <span className="text-emerald-300">툴 마스터 과정 개요</span> 🎯
      </h2>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 max-w-4xl mx-auto">
        <ul className="space-y-4 text-lg">
          <li className="flex items-start"><CheckIcon /><div><strong className="font-bold">과정명:</strong> [누구나] AI 바이브코딩 툴 마스터 클래스</div></li>
          <li className="flex items-start"><CheckIcon /><div><strong className="font-bold">대상:</strong> 일반인, AI·코딩 초보자 누구나</div></li>
          <li className="flex items-start"><CheckIcon /><div><strong className="font-bold">방식:</strong> 온라인 / 실시간 워크숍</div></li>
          <li className="flex items-start"><CheckIcon /><div><strong className="font-bold">기간:</strong> 2025년 11/23(일) ~ 2026년 3/22(일) <span className="bg-emerald-500 text-gray-900 font-bold px-2 py-1 rounded-md text-sm ml-2">11/23(일) 3시 개강</span></div></li>
          <li className="flex items-start"><CheckIcon /><div><strong className="font-bold">회차:</strong> 총 10 회 / 월 2회 / 일요일 15:00~18:00 또는 19:00~22:00</div></li>
          <li className="flex items-start"><CheckIcon /><div><strong className="font-bold">특징:</strong> 매 회 1개 툴 실습 중심 / 각 회차마다 소형 결과물 창작 / 완전초보를 위한 느린 과정</div></li>
          <li className="flex items-start"><HeartIcon /><div><strong className="font-bold text-yellow-400">오프라인 비전공유회:</strong> 2026. 3/29(일) 수료 및 자격증 수여, 시상식, AI특강</div></li>
        </ul>
      </div>
    </section>
  );
};

export default CourseOverview;
