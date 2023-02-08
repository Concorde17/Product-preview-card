FROM node:19-alpine
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
EXPOSE 5173
CMD ["yarn", "run", "dev"]
