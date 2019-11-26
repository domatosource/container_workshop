FROM node:latest

ENV APP_PORT=3000 APP_ROOT=/app

WORKDIR ${APP_ROOT}

ADD main.js .
ADD package.json .
ADD config config
ADD public public
ADD views views

RUN npm install

EXPOSE ${APP_PORT}

HEALTHCHECK --interval=5m --timeout=5s --retries=3 \
	CMD curl -f http://localhost:${APP_PORT}/health > dev/null || exit 1

ENTRYPOINT [ "node", "main.js" ]