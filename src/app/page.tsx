import WerewolfRank from "@/components/werewolf-rank";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,0,255,0.3),rgba(255,0,0,0))] p-4">
      <WerewolfRank />
      <footer className="mt-8 text-center text-sm space-y-2">
        <p className="text-cyan-400 font-medium border border-cyan-900 p-2 rounded-md bg-black/60 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
          ⚠️ 免责声明：本排行榜仅供娱乐，不代表真实水平
        </p>
        <p className="text-fuchsia-400">
          © 2025 阿布狼人杀俱乐部 | 所有权利保留
        </p>
        <p className="text-green-400 text-xs">
          👨‍💻 开发者：ALong Li |
          <a
            href="mailto:lal603743923@gmail.com"
            className="inline-flex items-center gap-1 ml-1 hover:text-green-300 transition-colors underline"
          >
            📧 联系邮箱：lal603743923@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
