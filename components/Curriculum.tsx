
import React, { useState } from 'react';
import { curriculumData } from '../constants';
import type { CurriculumItem as CurriculumItemType } from '../constants';

interface ToggleItemProps {
  item: CurriculumItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const ToggleItem: React.FC<ToggleItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 transition-all duration-300">
      <div className="flex justify-between items-center p-5 cursor-pointer" onClick={onToggle}>
        <div className="flex items-center">
          <span className="text-lg font-bold text-emerald-300 mr-4">{item.week}회차</span>
          <span className="font-medium text-gray-200">{item.title}</span>
        </div>
        <div className={`text-emerald-300 text-3xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</div>
      </div>
      <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-5">
          <div className="border-t border-gray-600 pt-4">
            <p className="text-gray-400"><strong className="font-semibold text-gray-300">📅 날짜:</strong> {item.date}</p>
            <p className="text-gray-400 mt-2"><strong className="font-semibold text-gray-300">🛠️ 활용 툴:</strong> <span className="text-emerald-300 font-bold">{item.tool}</span></p>
            <p className="text-gray-400 mt-2"><strong className="font-semibold text-gray-300">💡 설명:</strong> {item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Curriculum: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const handleToggle = (week: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(week)) {
        newSet.delete(week);
      } else {
        newSet.add(week);
      }
      return newSet;
    });
  };

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-center mb-6">📅 세부일정 및 <span className="text-emerald-300">툴 소개</span></h2>
      <p className="text-center text-gray-400 mb-12">트렌드 및 기술 습득을 반영하여 내용은 변경되거나 업그레이드 될 수 있습니다.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {curriculumData.map(item => (
          <ToggleItem
            key={item.week}
            item={item}
            isOpen={openItems.has(item.week)}
            onToggle={() => handleToggle(item.week)}
          />
        ))}
      </div>
      <div className="text-center mt-6 bg-gray-800 p-4 rounded-lg">
        <p className="text-yellow-400 font-bold text-lg">🎁 3/29(일) 오프라인 비전공유회 : 수료 및 자격증 수여 & 시상식 (강남 앙트레블 예정)</p>
      </div>
    </section>
  );
};

export default Curriculum;
