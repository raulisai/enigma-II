#!/bin/bash

# Variables de configuración
REMOTE_USER="ubuntu"
REMOTE_HOST="ec2-44-202-48-57.compute-1.amazonaws.com"
REMOTE_DIR="/home/ubuntu/proyectos/Enigma-back-end"
PEM_KEY="/mnt/c/keys/Pryectos.pem"

# Ruta local del proyecto Node.js
LOCAL_DIR="/mnt/c/Users/raul_/Documents/code/enigma-II/enigma-back-end"

# Copiar los archivos del proyecto al servidor remoto
echo "Copiando archivos al servidor remoto..."
rsync -avz --delete --exclude 'node_modules' -e "ssh -i $PEM_KEY" "$LOCAL_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"

# Acceder al servidor remoto y realizar los comandos necesarios
echo "Accediendo al servidor remoto..."
ssh -i "$PEM_KEY" "$REMOTE_USER@$REMOTE_HOST" "
    cd $REMOTE_DIR

    # Detener y eliminar el contenedor existente (si existe)
    echo 'Deteniendo y eliminando contenedor existente...'
    docker stop backend-enigma-container || true
    docker rm backend-enigma-container || true
    docker rmi backend-enigma || true

    # Construir la imagen de Docker
    echo 'Construyendo la imagen de Docker...'
    docker build -t backend-enigma .

    # Ejecutar el contenedor Docker
    echo 'Ejecutando el contenedor Docker...'
    docker run -d -p 5000:5000 --name backend-enigma-container backend-enigma

    # Ejecutar el comando 'node index'
    echo 'Ejecutando el comando node index...'
    node index
"

echo "Despliegue completo."
