FROM mhart/alpine-node:10.11.0

WORKDIR /app
# 覆蓋拉取的程式碼避免干擾到 dev
COPY . /app 
# node_modules
RUN npm install --production
# 環境設定
ENV NODE_ENV=production
EXPOSE 3000
# 時區
RUN apk add --no-cache tzdata
ENV TZ=Asia/Taipei
# 啟動
CMD ["npm", "start"]

