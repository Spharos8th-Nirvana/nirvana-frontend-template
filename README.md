# NIRVANA Frontend Template

너바나 프론트엔드 서비스의 공통 시작 템플릿입니다.

## 기술 스택

- Next.js 16.4.6 (App Router)
- React 19.3
- TypeScript
- Tailwind CSS 4
- ESLint 9

## 사전 요구사항

- Node.js 20.9 이상
- npm

## 시작하기

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell에서는 환경변수 파일을 다음처럼 복사할 수 있습니다.

```powershell
Copy-Item .env.example .env.local
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에 접속합니다.

## 주요 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run lint:fix` | 자동 수정 가능한 ESLint 규칙 적용 |
| `npm run typecheck` | TypeScript 타입 검사 |
| `npm run build` | 운영 빌드 |
| `npm run start` | 운영 빌드 실행 |

## 환경변수

| 키 | 용도 | 공개 여부 |
| --- | --- | --- |
| `BACKEND_API_BASE_URL` | 서버에서 호출할 백엔드 API 기본 주소 | 서버 전용 |
| `NEXT_PUBLIC_APP_BASE_URL` | 브라우저에 노출 가능한 프론트엔드 주소 | 공개 |

실제 값은 `.env.local`에 기록합니다. `.env.local`은 커밋하지 않습니다.
`NEXT_PUBLIC_*` 변수에는 비밀키·토큰을 넣지 않습니다.

## 폴더 구조

```text
src/
├── app/          # App Router 페이지, 레이아웃, 전역 스타일
├── actions/      # Server Actions (변경 작업)
├── components/   # 공통 UI
│   ├── layout/   # Header, Footer 등 공통 레이아웃
│   └── ui/       # Button, Modal 등 범용 UI
├── dal/          # 서버 전용 데이터 접근 계층
├── features/     # 기능별 모듈
├── hooks/        # 공통 Client Hooks
├── lib/          # 공통 라이브러리 설정
├── schemas/      # 입력값 검증 스키마
├── services/     # API Client 및 서비스 계층
├── types/        # 공통 TypeScript 타입
└── utils/        # 범용 순수 함수
```

## 개발 원칙

1. Server Component를 기본으로 사용하고, 상호작용이 필요한 최소 영역만 Client Component로 분리합니다.
2. API 요청은 공통 API Client 또는 기능별 Service를 통해 처리합니다.
3. 인증·인가와 리소스 소유권은 서버에서 검증합니다. UI에서 버튼을 숨기는 것만으로 권한을 통제하지 않습니다.
4. 핵심 비즈니스 로직, 데이터 정합성, 트랜잭션은 Spring Boot 서비스가 최종 책임을 집니다.
5. 민감정보를 브라우저 저장소나 로그에 남기지 않습니다.
6. 요청·응답 타입은 확정된 API 계약을 기준으로 정의합니다. 무분별한 `any` 사용은 피합니다.

## 관련 문서

- [NIRVANA 글로벌 개발 컨벤션](https://github.com/Spharos8th-Nirvana/nirvana-docs/blob/main/nirvana-conventions/README.md)
- [Frontend 컨벤션](https://github.com/Spharos8th-Nirvana/nirvana-docs/blob/main/nirvana-conventions/06-frontend-nextjs.md)
- [기여 가이드](CONTRIBUTING.md)
