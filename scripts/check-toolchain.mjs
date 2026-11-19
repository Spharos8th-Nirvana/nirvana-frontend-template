import { execSync } from "node:child_process";

const expectedNodeVersion = "v24.22.3";
const expectedPnpmVersion = "12.21.0";

const actualNodeVersion = process.version;
let actualPnpmVersion = "";

try {
  actualPnpmVersion = execSync("pnpm --version", {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
} catch {
  console.error("pnpm을 찾을 수 없습니다. pnpm 12.21.0 설치 상태를 확인하세요.");
  process.exit(1);
}

const errors = [];

if (actualNodeVersion !== expectedNodeVersion) {
  errors.push(`Node.js: expected ${expectedNodeVersion}, received ${actualNodeVersion}`);
}

if (actualPnpmVersion !== expectedPnpmVersion) {
  errors.push(`pnpm: expected ${expectedPnpmVersion}, received ${actualPnpmVersion}`);
}

if (errors.length > 0) {
  console.error("프로젝트 도구 버전이 일치하지 않습니다.");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Node.js 24.22.3 / pnpm 12.21.0 확인 완료");
