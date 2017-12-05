FROM node:6.9.1

RUN mkdir -p /usr/local/app

WORKDIR /usr/local/app

RUN echo 'registry=https://registry.npm.taobao.org' > /root/.npmrc

RUN git clone https://github.com/SheepBeast/music-api.git

WORKDIR music-api/

RUN npm install

CMD ["npm","run","start"]

EXPOSE 3000

# docker build -t sheepbeast/vue_proxy .
# docker run --name=vue_proxy -d -p 3000:3000 sheepbeast/vue_proxy