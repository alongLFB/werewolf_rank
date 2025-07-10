# Werewolf Rank 狼人杀排行榜

本项目基于 Next.js + shadcn/ui 实现狼人杀排行榜，展示前三名玩家，分别用不同的帅气、霸气 icon 标识，显示人名和积分，并支持手机端响应式布局。

## 技术栈

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react (icon)

## 启动项目

```bash
npm install
npm run dev
```

访问 http://localhost:3000 查看效果。

## 目录结构

- `src/components/werewolf-rank.tsx` 排行榜主组件
- `src/app/page.tsx` 首页，已集成排行榜

## 自定义

如需修改玩家数据或样式，可直接编辑 `werewolf-rank.tsx`。
