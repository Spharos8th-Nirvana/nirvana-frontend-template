# 기여 가이드

개발 규칙은 [NIRVANA 글로벌 개발 컨벤션](https://github.com/Spharos8th-Nirvana/nirvana-docs/blob/main/nirvana-conventions/README.md)을 참고하세요.

## 작업 절차

1. Issue에서 작업 범위와 담당자를 확인합니다.
2. 최신 `develop` 브랜치에서 작업 브랜치를 만듭니다.
3. Node.js 24.22.3과 pnpm 12.21.0을 사용합니다.
4. 의존성을 변경할 때는 `pnpm add`, `pnpm add -D`, `pnpm remove` 명령을 사용하고 `pnpm-lock.yaml` 변경을 함께 커밋합니다.
5. 작업 후 `pnpm lint`, `pnpm typecheck`, `pnpm build`를 실행하고 결과를 확인합니다.
6. 변경 범위, 관련 Issue, 검증 결과, API 계약 변경 여부를 PR에 기록합니다.
7. 작성자를 제외한 리뷰어의 승인을 받은 뒤 PR로 병합합니다.

브랜치·커밋·PR 규칙은 글로벌 컨벤션을 따릅니다.

## 패키지 설치 규칙

- npm, Yarn 등 다른 패키지 매니저로 프로젝트 의존성을 설치하거나 변경하지 않습니다.
- 팀원은 저장소에 포함된 `pnpm-lock.yaml`을 기준으로 `pnpm install --frozen-lockfile`을 사용합니다.
- `package.json`만 변경하고 잠금 파일 변경을 누락하지 않습니다.

## 보안

- 실제 환경변수, 토큰, API Secret, 운영 URL, 개인정보를 커밋하지 않습니다.
- `.env.example`에는 키 이름과 가짜 예시값만 둡니다.
- `NEXT_PUBLIC_*` 변수는 브라우저에 노출되므로 공개 가능한 값에만 사용합니다.
- 인증과 권한은 서버에서 검증합니다.
