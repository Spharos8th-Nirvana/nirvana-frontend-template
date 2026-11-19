import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center px-6 sm:px-10">
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.15em] text-emerald-800"
        >
          NIRVANA
        </Link>
      </div>
    </header>
  );
}
