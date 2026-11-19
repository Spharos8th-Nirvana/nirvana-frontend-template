# Features

사용자 기능·도메인별 코드를 응집도 있게 관리합니다.

권장 구조:

```text
features/
└── <feature>/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── README.md
```

예: `auth`, `temple`, `program`, `booking`, `community`, `passport`, `mypage`.

기능 내부에서만 사용하는 코드는 해당 기능 폴더에 두고, 여러 기능이 함께 쓰는 코드는 공통 폴더로 이동합니다.
