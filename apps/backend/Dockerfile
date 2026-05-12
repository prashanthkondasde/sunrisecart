# Use Node 16 alpine as parent image
FROM node:alpine
# Change the working directory on the Docker image to /app
WORKDIR /app
# Copy package.json and package-lock.json to the /app directory
#COPY package.json package-lock.json ./

# Copy the rest of project files into this image
COPY . .

#ENV APP_PORT=3001
#ENV APP_SECRET=Tr@n$
#ENV APP_SECRET_TIME='8h'
#ENV REFRESH_TOKEN_SECRET=Tr@n$R$T
#ENV REFRESH_TOKEN_SECRET_TIME=30d
#ENV PGUSER=postgres
#ENV PGHOST=172.19.0.1
#ENV PGDATABASE=inval
#ENV PGPASSWORD=3cNG*601dIu%
#ENV PGPORT=5432

# Install dependencies
RUN npm install

# Start the application
CMD npm run prod
