export interface ProjectType {
  id: number;
  title: string;
  description: string;
  period: string;
  team: string;
  image: string;
  mainFeatures: string[];
  technologies: {
    Frontend: string[];
    Tools: string[];
  };
  workContent: string[];
  troubleShooting: {
    problem: string;
    solution: string;
  }[];
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "React 기반의 전자상거래 플랫폼으로 사용자 친화적인 UI/UX를 제공합니다.",
    period: "2024.01 - 2024.04",
    team: "4명",
    image: "/placeholder.svg",
    mainFeatures: [
      "실시간 상품 검색 및 필터링",
      "장바구니 및 결제 시스템",
      "사용자 리뷰 및 평점 시스템",
      "관리자 대시보드",
    ],
    technologies: {
      Frontend: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      Tools: ["Git", "Figma", "Postman"],
    },
    workContent: [
      "React 컴포넌트 설계 및 구현",
      "상태 관리 라이브러리를 활용한 전역 상태 관리",
      "반응형 웹 디자인 구현",
      "RESTful API 연동",
    ],
    troubleShooting: [
      {
        problem: "대량의 상품 데이터 렌더링으로 인한 성능 저하",
        solution: "React.memo와 가상화를 통해 렌더링 성능 최적화",
      },
      {
        problem: "복잡한 상태 관리로 인한 props drilling",
        solution: "Zustand를 도입하여 전역 상태 관리 구조 개선",
      },
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "팀 협업을 위한 태스크 관리 애플리케이션입니다.",
    period: "2023.09 - 2023.12",
    team: "2명",
    image: "/placeholder.svg",
    mainFeatures: [
      "드래그 앤 드롭 태스크 관리",
      "실시간 협업 기능",
      "프로젝트별 태스크 분류",
      "마감일 알림 시스템",
    ],
    technologies: {
      Frontend: ["Next.js", "TypeScript", "styled-components", "React Query"],
      Tools: ["Git", "Vercel", "Slack API"],
    },
    workContent: [
      "Next.js를 활용한 SSR/SSG 구현",
      "실시간 데이터 동기화 구현",
      "커스텀 훅을 통한 로직 재사용성 향상",
      "반응형 대시보드 UI 구현",
    ],
    troubleShooting: [
      {
        problem: "실시간 데이터 동기화 시 과도한 리렌더링",
        solution: "React Query의 캐싱 전략과 최적화 옵션 활용",
      },
    ],
  },
];
