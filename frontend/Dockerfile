FROM node:12.10.0

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

WORKDIR /usr/src/app
COPY package.json .
RUN npm install    
COPY . .

# construit l'app pour la production en la minifiant
RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
