# Usa la imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar dependencias de Node.js
RUN npm install

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que se ejecuta tu microservicio (asegúrate de usar el puerto correcto)
EXPOSE 9000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]

RUN apt-get update && apt-get install -y dnsutils
