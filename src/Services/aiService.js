import OpenAI from 'openai';
import { getCurrentUser } from './userService';

const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true 
  
});

export const analizarSintomas = async (mensajeUsuario) => {
  const usuario = getCurrentUser();
  const nombreUsuario = usuario ? usuario.name : 'usuario';

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [
        {
          role: 'system',
          content: `Eres un asistente médico llamado IAHealth que evalúa síntomas. Si tienes el nombre del usuario, debes mencionarlo al inicio de cada respuesta, por ejemplo: "Leo, según lo que me dices...".`
        },
        {
          role: 'user',
          content: `Mi nombre es ${nombreUsuario}. ${mensajeUsuario}`
        }
      ]
    });


    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al consultar la IA:', error);
    throw error;
  }
  
};
