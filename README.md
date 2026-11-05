# CCC - Pre-owned Luxury Ecommerce MVP

CCC 独立奢华二手手袋与手表电商项目 (MVP 阶段)。

## 技术栈
- 前端: React + Vite + Tailwind CSS
- 数据库: Supabase (PostgreSQL)
- 部署: GitHub + Vercel

## 核心特性
- 1:1 还原 Figma 奢华复古棕色主题设计
- 多货币独立价格配置 (支持 MYR / USD / SGD 独立定价切换，无自动汇率换算)
- 随意移动拖拽的全局 WhatsApp 悬浮按钮
- 完全响应式 (桌面端 / 移动端自适应汉堡菜单)

## 本地启动步骤
1. 安装依赖: `npm install`
2. 配置环境变量: 复制 `.env.example` 为 `.env` 并填入 Supabase URL 与 Key
3. 启动开发服务器: `npm run dev`
