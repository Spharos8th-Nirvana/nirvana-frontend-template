# NIRVANA Frontend Template

너바나 프론트엔드 서비스의 공통 시작 템플릿입니다.

## 기술 스택

- Node.js 24.22.3 (LTS)
- pnpm 12.21.0
- Next.js 16.4.6 (App Router)
- React / React DOM 19.3.1
- TypeScript 6.0.2
- Tailwind CSS 4.3.3
- ESLint 10.15.0

## 사전 요구사항

- Node.js 24.22.3
- pnpm 12.21.0

Node.js 24.22.3을 설치한 뒤 터미널을 새로 열고 버전을 확인합니다.

```bash
node --version
```

pnpm 12.21.0 설치(Windows, macOS, Linux 공통):

```bash
npm install --global pnpm@12.21.0
pnpm --version
```

프로젝트의 `packageManager` 설정은 pnpm 12.21.0을 기준으로 합니다. 다른 버전의 pnpm을 실행하더라도 프로젝트 설정에 따라 고정 버전으로 전환하도록 구성되어 있습니다.

## 시작하기

저장소를 내려받은 뒤 프로젝트 루트에서 실행합니다.

```bash
pnpm run check:toolchain
pnpm install
```

최초 의존성 설치로 `pnpm-lock.yaml`이 생성되면 반드시 Git에 커밋합니다. 이 잠금 파일이 저장소에 포함된 다음부터 팀원은 아래 명령으로 잠금 파일과 정확히 일치하는 의존성을 설치합니다.

```bash
pnpm install --frozen-lockfile
```

환경변수 파일을 준비합니다.

macOS / Linux:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

개발 서버를 실행합니다.

```bash
pnpm dev
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에 접속합니다.

## 주요 명령어

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 로컬 개발 서버 실행 |
| `pnpm run check:toolchain` | Node.js / pnpm 버전 검사 |
| `pnpm lint` | ESLint 검사 |
| `pnpm lint:fix` | 자동 수정 가능한 ESLint 규칙 적용 |
| `pnpm typecheck` | TypeScript 타입 검사 |
| `pnpm build` | 운영 빌드 |
| `pnpm start` | 운영 빌드 실행 |
| `pnpm add <package>` | 일반 의존성 추가 |
| `pnpm add -D <package>` | 개발 의존성 추가 |
| `pnpm remove <package>` | 의존성 제거 |

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
7. 의존성 변경은 pnpm 명령으로만 수행하고 `pnpm-lock.yaml` 변경을 함께 커밋합니다.

## 관련 문서

- [NIRVANA 글로벌 개발 컨벤션](https://github.com/Spharos8th-Nirvana/nirvana-docs/blob/main/nirvana-conventions/README.md)
- [Frontend 컨벤션](https://github.com/Spharos8th-Nirvana/nirvana-docs/blob/main/nirvana-conventions/06-frontend-nextjs.md)
- [기여 가이드](CONTRIBUTING.md)
