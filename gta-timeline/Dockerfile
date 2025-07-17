# Estágio 1: Construir a aplicação Angular
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Compila a aplicação para produção. A saída será em /app/dist/gta-timeline
RUN npm run build -- --configuration production

# Estágio 2: Servir a aplicação com Nginx
FROM nginx:1.23-alpine

# Copia os arquivos compilados do estágio 'build' para a pasta padrão do Nginx
COPY --from=build /app/dist/gta-timeline /usr/share/nginx/html

# Expõe a porta 80 para acesso externo
EXPOSE 80