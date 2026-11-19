const projectAreas = [
  {
    name: "사찰",
    description: "사찰 정보와 상세 페이지",
  },
  {
    name: "프로그램",
    description: "체험 프로그램과 운영 회차",
  },
  {
    name: "예약",
    description: "프로그램 예약과 예약 내역",
  },
  {
    name: "커뮤니티",
    description: "게시글과 소통 기능",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16 sm:px-10">
      <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">
        NIRVANA FRONTEND TEMPLATE
      </p>

      <section className="mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          나를 위한 쉼,
          <br />
          사찰에서 만나는 새로운 경험
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600">
          너바나 프론트엔드 프로젝트의 시작 화면입니다.
          이 페이지를 바탕으로 서비스 화면을 만들어 보세요.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-zinc-900">서비스 영역</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {projectAreas.map((area) => (
            <article
              key={area.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="font-semibold text-zinc-900">{area.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-auto pt-20 text-sm text-zinc-500">
        Built with Next.js, React, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
