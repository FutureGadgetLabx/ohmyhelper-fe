# 第一阶段：构建 React 项目
FROM node:16 AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# 第二阶段：构建镜像
FROM nginx:1.19-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
