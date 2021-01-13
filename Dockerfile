FROM node:14.15.4-alpine as builder
WORKDIR /app
COPY . ./
CMD [ "npm","run","build" ]

FROM node:14.15.4-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3001", "-s", "."]