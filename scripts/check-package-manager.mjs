const expectedPnpmVersion = "12.21.0";
const userAgent = process.env.npm_config_user_agent ?? "";
const expectedUserAgentPrefix = `pnpm/${expectedPnpmVersion}`;

if (!userAgent.startsWith(expectedUserAgentPrefix)) {
  console.error(
    `이 프로젝트는 pnpm ${expectedPnpmVersion}만 사용합니다. npm이나 다른 패키지 매니저로 설치하지 마세요.`,
  );
  console.error(`현재 패키지 매니저 정보: ${userAgent || "확인할 수 없음"}`);
  process.exit(1);
}

if (process.version !== "v24.22.3") {
  console.error(
    `Node.js 버전이 일치하지 않습니다. 필요한 버전: v24.22.3 / 현재 버전: ${process.version}`,
  );
  process.exit(1);
}
