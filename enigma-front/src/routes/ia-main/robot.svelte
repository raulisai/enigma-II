<script>
    import { onMount, onDestroy } from 'svelte';
  
    let currentState = 'walk';
    let currentFrame = 1;
    let intervalId;
  
    // Estados posibles del robot
    const states = ['walk', 'jump', 'die'];
  
    // Número total de fotogramas para cada estado
    const totalFrames = {
      walk: 7, // Suponiendo 5 imágenes de caminar (walk_1.png a walk_5.png)
      jump: 4, // Suponiendo 3 imágenes de saltar (jump_1.png a jump_3.png)
      die: 4, // Suponiendo 4 imágenes de morir (die_1.png a die_4.png)
    };
  
    // Función para cambiar el estado del robot
    function changeState(newState) {
      currentState = newState;
      currentFrame = 1;
      clearInterval(intervalId);
      intervalId = setInterval(nextFrame, 200); // Cambia la imagen cada 200 milisegundos
    }
  
    // Función para avanzar al siguiente fotograma
    function nextFrame() {
      currentFrame = (currentFrame % totalFrames[currentState]) + 1;
      
    }
  
    // Cargar el intervalo y establecer el tamaño de cada imagen
    onMount(() => {
      intervalId = setInterval(nextFrame, 200); // Cambia la imagen cada 200 milisegundos
    });
  
    // Limpiar el intervalo cuando se destruye el componente
    onDestroy(() => {
      clearInterval(intervalId);
    });
  </script>
  
  <style>
    .robot {
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
    }
  </style>
  
  <div class="robot" style="background-image: url('/src/lib/images/robot/{currentState}_{currentFrame}.png')"></div>
  
  <!-- Botones para cambiar el estado del robot -->
  <button on:click={() => changeState('walk')}>Caminar</button>
  <button on:click={() => changeState('jump')}>Saltar</button>
  <button on:click={() => changeState('die')}>Morir</button>
  