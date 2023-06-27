# Utilizar una imagen de Node.js como base
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD [ "node", "index" ]
