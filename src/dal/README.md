# Data Access Layer (DAL)

서버 전용 데이터 조회와 접근 권한 검증 로직을 둡니다.

- 서버 전용 모듈에는 `import "server-only"`를 적용합니다.
- 인증된 사용자와 리소스 소유권을 확인합니다.
- 민감정보와 서버 전용 데이터가 Client Component로 전달되지 않도록 합니다.
