
export interface CurriculumItem {
  week: number;
  date: string;
  title: string;
  tool: string;
  description: string;
}

export const curriculumData: CurriculumItem[] = [
  { week: 1, date: "25.11/23", title: "에이전틱 AI", tool: "구글 AI스튜디오 1", description: "나만의 AI 챗봇을 만드는 구글의 노코드 툴" },
  { week: 2, date: "11/30", title: "바이브코딩AI", tool: "구글 opal 서비스", description: "아이디어를 실제 작동하는 앱 프로토타입으로 변환" },
  { week: 3, date: "12/14", title: "리서치 및 시각화AI", tool: "제미나이", description: "구글의 강력한 멀티모달 AI로 리서치 및 콘텐츠 생성" },
  { week: 4, date: "12/28", title: "바이브코딩", tool: "스카이워크 AI", description: "텍스트 설명만으로 맞춤형 앱을 빌드하는 AI" },
  { week: 5, date: "26. 1/11", title: "에이전틱 AI", tool: "Genspark 1", description: "검색, 아이디어 구체화, 콘텐츠 생성을 한번에" },
  { week: 6, date: "1/25", title: "멀티모달 AI", tool: "Genspark 2", description: "이미지, 영상 등 멀티모달 콘텐츠 제작 심화" },
  { week: 7, date: "2/8", title: "바이브코딩AI", tool: "러버블 1", description: "코딩 없이 드래그앤드롭으로 앱을 만드는 툴" },
  { week: 8, date: "2/22", title: "바이브코딩AI", tool: "러버블 AI", description: "AI를 활용하여 앱 디자인과 기능을 자동화" },
  { week: 9, date: "3/8", title: "멀티모달 AI", tool: "Canva AI", description: "디자인 툴 캔바의 AI 기능으로 마케팅 콘텐츠 제작" },
  { week: 10, date: "3/22", title: "바이브코딩AI", tool: "Replit", description: "클라우드 기반 코딩 환경에서 AI로 코드 생성 및 실행" }
];
