<script>
    let messages = [
      { sender: 'User', text: '¡Hola! ¿En qué puedo ayudarte?' },
      { sender: 'Agent', text: 'Estoy interesado en obtener más información sobre sus productos.' },
      { sender: 'Agent', text: 'Claro, puedo brindarte toda la información que necesites. ¿Qué producto te interesa en particular?' },
      { sender: 'User', text: 'Estoy buscando información sobre su plan de suscripción mensual.' },
      { sender: 'Agent', text: 'Nuestro plan de suscripción mensual incluye acceso ilimitado a todas nuestras funciones y soporte prioritario. El costo mensual es de $29.99.' },
      { sender: 'User', text: 'Perfecto, me parece una opción muy interesante. ¿Cómo puedo suscribirme?' },
      { sender: 'Agent', text: 'Puedes suscribirte directamente desde nuestra página web. Una vez que completes el proceso de suscripción, tendrás acceso inmediato a todas las características.' },
      { sender: 'User', text: '¡Gracias por la información! Voy a revisar la página web y suscribirme. Si tengo alguna pregunta adicional, ¿puedo contactarte?' },
      { sender: 'Agent', text: 'Por supuesto, estaré encantado de ayudarte en cualquier momento. No dudes en contactarme si necesitas algo más. ¡Buena suerte con tu suscripción!' },
    ];
  
    let newMessage = '';
    let currentUser = 'User';
  
    function sendMessage() {
      messages = [...messages, { sender: currentUser, text: newMessage }];
      newMessage = '';
    }
  </script>
  
  <style>
    .chat-container {
      height: 300px;
      overflow-y: auto;
      border: 1px solid #ccc;
      padding: 10px;
    }
  
    .message {
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 5px;
    }
  
    .user-message {
      background-color: #e6f2ff;
      color: #000;
    }
  
    .agent-message {
      background-color: #f0f0f0;
      color: #000;
    }
  
    .input-container {
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
  
    .input-container input {
      flex: 1;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 5px;
    }
  
    .send-button {
      background-color: #ccc;
      border: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  
  <div class="chat-container">
    {#each messages as message}
      <div class="message {message.sender === 'User' ? 'user-message' : 'agent-message'}">
        {message.sender === 'User' ? 'You' : 'Agent'}: {message.text}
      </div>
    {/each}
  </div>
  
  <div class="input-container">
    <input type="text" bind:value={newMessage} placeholder="Type your message..." />
    <button class="send-button" on:click={sendMessage}>&#8594;</button>
  </div>
  