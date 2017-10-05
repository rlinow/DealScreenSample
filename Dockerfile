FROM alexsuch/angular-cli:1.2.7 as build-env

WORKDIR /app
COPY . /app
RUN apk update && apk add git
RUN npm install
RUN npm run build-prod

FROM nginx:1.12-alpine
LABEL maintainer="Ricky Li <rli@nowcom.com>"

WORKDIR /app
COPY --from=build-env /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-env /app/dist /var/www/sample







