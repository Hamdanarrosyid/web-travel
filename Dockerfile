FROM node:16.6.1-alpine

RUN yarn global add gatsby-cli

EXPOSE 8000

WORKDIR /myapp

COPY ./package.json /myapp
COPY ./yarn.lock /myapp

RUN yarn install && yarn cache clean

COPY gatsby-config.js .

COPY . /myapp

CMD ["gatsby","develop","-H","0.0.0.0"]