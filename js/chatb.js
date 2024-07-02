/*https://youtu.be/nRF4HrUoAh4?si=9deMtFIWkZn4P6jK*/    /*https://stackoverflow.com/questions/12491182/how-to-send-user-data-using-sendmessage-function*/

/*referencias a dos elementos del DOM utilizando sus ID*/
const chatMessages = document.getElementById('chat-mensaje');
const userInput = document.getElementById('usuario-input');

function sendMessage() {
  const userMessage = userInput.value;
  appendMessage('user', userMessage); /*agrega el mensaje del usuario al área de mensajes con una clase 'user'*/
  const botResponse = getBotResponse(userMessage);
  appendMessage('bot', botResponse); /*agrega la respuesta del bot al área de mensajes con una clase 'bot'*/
  userInput.value = '';
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div'); // nuevo elemento div llamado messageElement
  messageElement.classList.add(sender);
  messageElement.textContent = message; // contenido del mensaje
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
  return "Bot: " + userMessage; // funcion que devuelve la respuesta del mensaje
}

function getBotResponse(userMessage) {
const lowerCaseMessage = userMessage.toLowerCase();

// if y else para determinar la respuesta del bot
if (lowerCaseMessage.includes('hola')) {
  return 'Hola, ¿cómo estás?';
} else if (lowerCaseMessage.includes('adios')||lowerCaseMessage.includes('adiós')) {
  return 'Hasta luego, que tenga buen día.';
} else if (lowerCaseMessage.includes('gracias')){
  return 'De nada, estoy aquí para ayudarte.';
} else if (lowerCaseMessage.includes('horarios')|| lowerCaseMessage.includes('horario')) {
  return 'Los horarios de los diferentes departamentos del hospital son los siguientes:\n\n- Departamento de oncología: Lunes a viernes de 8:00 a 16:00.\n- Departamento de neurología: Lunes a viernes de 7:00 a 16:00.\n- Departamento de cardiología: Lunes a viernes de 9:00 a 15:30.\n- Departamento de traumatología: Lunes a viernes de 9:00 a 17:00.';
} else if (lowerCaseMessage.includes('ubicacion')||lowerCaseMessage.includes('ubicación')) {
  return 'Las ubicaciones de los diferentes departamentos del hospital son las siguientes:\n\n- Departamento de cardiología: Sala 101, 111 y 115.\n- Departamento de neurología: Sala 102, 112 y 116.\n- Departamento de traumatología: Sala 103, 113 y 117.\n- Departamento de oncología: Sala 104, 114 y 118.\n- Departamento de traumatología: Sala 105.';
} else if (lowerCaseMessage.includes('telefonos') || lowerCaseMessage.includes('telefono') || lowerCaseMessage.includes('teléfonos') || lowerCaseMessage.includes('teléfono')) {
  return 'Los contactos de los diferentes departamentos del hospital son los siguientes:\n\n- Departamento de oncología: Tel: +34 911 23 45 17.\n- Departamento de cardiología: Tel: +34 911 23 45 67.\n- Departamento de traumatología: Tel: +34 911 23 45 89.\n- Departamento de neurología: Tel: +34 911 23 45 42.';
}else if(lowerCaseMessage.includes('correo')||lowerCaseMessage.includes('correos')){
  return 'Los contactos de los diferentes departamentos del hospital son los siguientes:\n\n- Departamento de oncología: Correo: oncologia@hospitalfelipeVI.org.\n- Departamento de cardiología: Correo: cardiologia@hospitalfelipeVI.org.\n- Departamento de traumatología: Correo: traumatologia@hospitalfelipeVI.org.\n- Departamento de neurología: Correo: neurologia@hospitalfelipeVI.org.\n- Hospital: Correo: hospitalfelipevi@madrid.org.';
} 
else {
  return 'Lo siento, no entiendo lo que dices. Por favor, intentalo de nuevo.';
}
}

function openchatbot() {
  var chatbot = document.getElementById("chat-contenedor");

  if (chatbot.style.display === "none") { // "none" (oculto)
      chatbot.style.display = "block"; // "block" (visible)
  } else {
      chatbot.style.display = "none";
  }
}