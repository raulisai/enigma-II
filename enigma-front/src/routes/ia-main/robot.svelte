<script>
  import { onMount, onDestroy } from 'svelte';

  let currentState = 'walk'; // Estado inicial: caminar
  let currentFrame = 1;
  let intervalId;
  let positionX = 0; // Posición X del robot
  let positionY = 0; // Posición Y del robot
  let previousPositionX = 0; // Posición X anterior del robot
  let movementIntervalId;

  // Número total de fotogramas para cada estado
  const totalFrames = {
    walk: 7, // Suponiendo 5 imágenes de caminar (walk_1.png a walk_5.png)
    jump: 4, // Suponiendo 3 imágenes de saltar (jump_1.png a jump_3.png)
    die: 4, // Suponiendo 4 imágenes de morir (die_1.png a die_4.png)
  };

  // Función para avanzar al siguiente fotograma
  function nextFrame() {
    currentFrame = (currentFrame % totalFrames[currentState]) + 1;
  }

  // Función para mover el robot aleatoriamente en el espacio
  function moveRandomly() {
    const availableStates = Object.keys(totalFrames);
    const randomIndex = Math.floor(Math.random() * availableStates.length);
    currentState = availableStates[randomIndex];
    nextFrame();

    previousPositionX = positionX; // Guardar la posición X anterior
    positionX = Math.floor(Math.random() * 400); // Genera una posición X aleatoria entre 0 y 400 (ajustar según el tamaño del espacio)
    positionY = Math.floor(Math.random() * 400); // Genera una posición Y aleatoria entre 0 y 400 (ajustar según el tamaño del espacio)

    // Verificar la dirección de movimiento
    if (positionX < previousPositionX) {
      // Mover hacia la izquierda
      currentState = 'walk'; // Estado de caminar
    } else {
      // Mover hacia la derecha
      currentState = 'walk'; // Estado de caminar
    }
  }

  // Cargar el intervalo y establecer el tamaño de cada imagen
  onMount(() => {
    intervalId = setInterval(() => {
      nextFrame();
    }, 200); // Cambia la imagen cada 200 milisegundos

    movementIntervalId = setInterval(moveRandomly, 3000); // Mueve el robot aleatoriamente cada 3 segundos
  });

  // Limpiar los intervalos cuando se destruye el componente
  onDestroy(() => {
    clearInterval(intervalId);
    clearInterval(movementIntervalId);
  });
</script>

<style>
  .robot {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    position: absolute;
  }
</style>

<div class="robot" style="background-image: url('/src/lib/images/robot/{currentState}_{currentFrame}.png'); top: {positionY}px; left: {positionX}px; "></div>
