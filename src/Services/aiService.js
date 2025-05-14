import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'key',
  dangerouslyAllowBrowser: true 
  
});

export const analizarSintomas = async (mensajeUsuario) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [
        {
          role: 'system',
          content: 'Eres un asistente médico llamdo IAHealth que evalúa síntomas, generando pregunta por cada peticion y breves y da recomendaciones tanto medicos como medicinas recomendables para el usuario.'
        },
        {
          role: 'user',
          content: mensajeUsuario
        }
      ]
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al consultar la IA:', error);
    throw error;
  }
  
};
