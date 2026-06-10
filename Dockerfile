# ── 构建阶段：VitePress 静态站 ──────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app

# 先装依赖（利用层缓存）
COPY package.json pnpm-lock.yaml .npmrc ./
# 锁定 pnpm 版本：新版会把 ERR_PNPM_IGNORED_BUILDS 当致命错误，10.14.0 仅警告
RUN corepack enable && corepack prepare pnpm@10.14.0 --activate
RUN pnpm install --no-frozen-lockfile

# 复制源码并构建
COPY . .
# 部署子路径，传给 .vitepress/config.mts 的 base（默认 /manual/）
ARG DOCS_BASE=/manual/
ENV DOCS_BASE=$DOCS_BASE
RUN pnpm run build

# ── 运行阶段：nginx 提供静态文件 ────────────────────────────
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
# 以 /manual 子目录提供，使文件路径与 base=/manual/ 一致
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html/manual

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
