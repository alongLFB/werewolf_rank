import WerewolfRank from "@/components/werewolf-rank";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <WerewolfRank />
      <footer className="mt-8 text-center text-sm text-muted-foreground space-y-2">
        <p className="text-orange-600 font-medium">
          ⚠️ 免责声明：本排行榜仅供娱乐，不代表真实水平
        </p>
        <p className="text-gray-500">© 2025 阿布狼人杀俱乐部 | 所有权利保留</p>
        <p className="text-blue-600 text-xs">
          👨‍💻 开发者：ALong Li |
          <a
            href="mailto:lal603743923@gmail.com"
            className="inline-flex items-center gap-1 ml-1 hover:text-blue-800 transition-colors underline"
          >
            📧 联系邮箱：lal603743923@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
