import { execFileSync } from "node:child_process";

const expectedNodeVersion = "v26.13.1";
const expectedNpmVersion = "12.2.3";

const actualNodeVersion = process.version;
let actualNpmVersion = "";

try {
  actualNpmVersion = execFileSync("npm", ["--version"], {
    encoding: "utf8",
  }).trim();
} catch {
  console.error("npm을 찾을 수 없습니다. Node.js 설치 상태를 확인하세요.");
  process.exit(1);
}

const errors = [];

if (actualNodeVersion !== expectedNodeVersion) {
  errors.push(`Node.js: expected ${expectedNodeVersion}, received ${actualNodeVersion}`);
}

if (actualNpmVersion !== expectedNpmVersion) {
  errors.push(`npm: expected ${expectedNpmVersion}, received ${actualNpmVersion}`);
}

if (errors.length > 0) {
  console.error("프로젝트 도구 버전이 일치하지 않습니다.");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Node.js 26.13.1 / npm 12.2.3 확인 완료");
