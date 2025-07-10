import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Crown,
  Shield,
  Flame,
  Star,
  Heart,
  Sparkles,
  Trophy,
  Gem,
} from "lucide-react";

interface Player {
  name: string;
  score: number;
}

const getIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return (
        <div className="relative">
          <Crown
            key="crown"
            className="text-yellow-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
          />
          <div className="absolute inset-0 bg-yellow-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 1:
      return (
        <div className="relative">
          <Shield
            key="shield"
            className="text-blue-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          />
          <div className="absolute inset-0 bg-blue-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 2:
      return (
        <div className="relative">
          <Flame
            key="flame"
            className="text-red-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]"
          />
          <div className="absolute inset-0 bg-red-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 3:
      return (
        <div className="relative">
          <Star
            key="star"
            className="text-purple-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
          />
          <div className="absolute inset-0 bg-purple-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 4:
      return (
        <div className="relative">
          <Heart
            key="heart"
            className="text-pink-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
          />
          <div className="absolute inset-0 bg-pink-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 5:
      return (
        <div className="relative">
          <Sparkles
            key="sparkles"
            className="text-green-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
          />
          <div className="absolute inset-0 bg-green-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 6:
      return (
        <div className="relative">
          <Trophy
            key="trophy"
            className="text-orange-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
          />
          <div className="absolute inset-0 bg-orange-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    case 7:
      return (
        <div className="relative">
          <Gem
            key="gem"
            className="text-cyan-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
          <div className="absolute inset-0 bg-cyan-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
    default:
      return (
        <div className="relative">
          <Star
            key="default"
            className="text-gray-400 w-8 h-8 filter drop-shadow-[0_0_8px_rgba(156,163,175,0.8)]"
          />
          <div className="absolute inset-0 bg-gray-400 w-8 h-8 blur-md opacity-40 -z-10"></div>
        </div>
      );
  }
};

const players: Player[] = [
  { name: "智慧女神-劳姐", score: 120 },
  { name: "优雅女王-卡姐", score: 110 },
  { name: "机智女巫-于总", score: 100 },
  { name: "魅力总裁-徐总", score: 95 },
  { name: "商界女强人-何总", score: 90 },
  { name: "可爱天使-weiwei", score: 85 },
  { name: "霸气猎人-MC", score: 80 },
  { name: "垫底狼王-卢院", score: 60 },
];

export default function WerewolfRank() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-lg mx-auto gap-4 p-4 sm:p-8 bg-black/70 backdrop-blur-md rounded-lg border border-purple-900 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-fuchsia-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-0 w-10 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-300"></div>
      <div className="absolute bottom-1/3 left-0 w-10 h-40 bg-red-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-transparent to-fuchsia-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-transparent to-cyan-500"></div>
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400">
        阿布狼人
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fuchsia-500 animate-pulse hover:scale-125 hover:animate-bounce hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.8)] transition-all duration-300 cursor-pointer mx-1 text-4xl font-black transform -rotate-12 hover:rotate-0 border border-red-500 px-1 rounded-md shadow-[0_0_8px_rgba(239,68,68,0.7)]">
          杀
        </span>
        排行榜
      </h1>
      <div className="flex flex-col gap-3 w-full">
        {players.map((player, idx) => (
          <Card
            key={player.name}
            className={`flex items-center gap-4 p-4 
              bg-black border-[1.5px] rounded-md transition-all duration-300
              ${
                idx === 0
                  ? "border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)] hover:shadow-[0_0_25px_rgba(234,179,8,0.8)]"
                  : idx === 1
                  ? "border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                  : idx === 2
                  ? "border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)]"
                  : "border-purple-700 shadow-[0_0_8px_rgba(126,34,206,0.4)] hover:shadow-[0_0_15px_rgba(126,34,206,0.6)]"
              }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-2xl font-mono font-bold min-w-[34px] bg-black p-1 rounded-md
                ${
                  idx === 0
                    ? "text-yellow-400"
                    : idx === 1
                    ? "text-blue-400"
                    : idx === 2
                    ? "text-red-400"
                    : "text-purple-400"
                }`}
              >
                #{idx + 1}
              </span>
              <div className="flex-shrink-0 animate-pulse">{getIcon(idx)}</div>
            </div>
            <Avatar className="w-12 h-12 border-2 border-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${player.name}`}
                alt={player.name}
              />
              <AvatarFallback className="bg-black text-cyan-400">
                {player.name[0]}
              </AvatarFallback>
            </Avatar>
            <CardContent className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between ml-4">
              <span className="font-semibold text-lg text-cyan-300">
                {player.name}
              </span>
              <span
                className={`text-xl font-mono font-bold mt-2 sm:mt-0 bg-clip-text text-transparent
                ${
                  idx === 0
                    ? "bg-gradient-to-r from-yellow-400 to-amber-300"
                    : idx === 1
                    ? "bg-gradient-to-r from-blue-400 to-cyan-300"
                    : idx === 2
                    ? "bg-gradient-to-r from-red-400 to-rose-300"
                    : "bg-gradient-to-r from-purple-400 to-fuchsia-300"
                }`}
              >
                {player.score} 分
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
