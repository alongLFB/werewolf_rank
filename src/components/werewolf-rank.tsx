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
      return <Crown key="crown" className="text-yellow-400 w-8 h-8" />;
    case 1:
      return <Shield key="shield" className="text-blue-400 w-8 h-8" />;
    case 2:
      return <Flame key="flame" className="text-red-400 w-8 h-8" />;
    case 3:
      return <Star key="star" className="text-purple-400 w-8 h-8" />;
    case 4:
      return <Heart key="heart" className="text-pink-400 w-8 h-8" />;
    case 5:
      return <Sparkles key="sparkles" className="text-green-400 w-8 h-8" />;
    case 6:
      return <Trophy key="trophy" className="text-orange-400 w-8 h-8" />;
    case 7:
      return <Gem key="gem" className="text-cyan-400 w-8 h-8" />;
    default:
      return <Star key="default" className="text-gray-400 w-8 h-8" />;
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
    <div className="flex flex-col items-center w-full max-w-lg mx-auto gap-4 p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        阿布狼人
        <span className="inline-block text-red-600 animate-bounce hover:scale-125 hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300 cursor-pointer mx-1 text-3xl font-black transform -rotate-12 hover:rotate-0">
          杀
        </span>
        排行榜
      </h1>
      <div className="flex flex-col gap-3 w-full">
        {players.map((player, idx) => (
          <Card
            key={player.name}
            className="flex items-center gap-4 p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-500 min-w-[24px]">
                #{idx + 1}
              </span>
              <div className="flex-shrink-0">{getIcon(idx)}</div>
            </div>
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${player.name}`}
                alt={player.name}
              />
              <AvatarFallback>{player.name[0]}</AvatarFallback>
            </Avatar>
            <CardContent className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between ml-4">
              <span className="font-semibold text-lg">{player.name}</span>
              <span className="text-primary text-xl font-bold mt-2 sm:mt-0">
                {player.score} 分
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
