
'use server';

/**
 * @fileOverview An AI agent that "sends" probable essay themes and a training manual to a user's email.
 *
 * - sendEssayThemes - A function that handles sending the material.
 * - SendEssayThemesInput - The input type for the sendEssayThemes function.
 * - SendEssayThemesOutput - The return type for the sendEssayThemes function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SendEssayThemesInputSchema = z.object({
  email: z.string().email().describe('The email address to send the materials to.'),
});
export type SendEssayThemesInput = z.infer<typeof SendEssayThemesInputSchema>;

const SendEssayThemesOutputSchema = z.object({
  message: z.string().describe('A confirmation message indicating the result of the operation.'),
});
export type SendEssayThemesOutput = z.infer<typeof SendEssayThemesOutputSchema>;

export async function sendEssayThemes(input: SendEssayThemesInput): Promise<SendEssayThemesOutput> {
  return sendEssayThemesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sendEssayThemesPrompt',
  input: { schema: SendEssayThemesInputSchema },
  output: { schema: SendEssayThemesOutputSchema },
  prompt: `You are an AI assistant. A user with the email {{{email}}} has requested probable essay themes and a training manual. 
  
  Acknowledge the request and confirm that the materials have been sent. 
  DO NOT generate the themes or manual. This is just a confirmation step.
  The actual sending is handled by another service.
  
  Your response should be a short, friendly confirmation message. For example: "Pronto! O material foi enviado para o seu e-mail."`,
});


const sendEssayThemesFlow = ai.defineFlow(
  {
    name: 'sendEssayThemesFlow',
    inputSchema: SendEssayThemesInputSchema,
    outputSchema: SendEssayThemesOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service like SendGrid, Nodemailer, etc.
    // to send the actual file. For this prototype, we'll just simulate it.
    console.log(`Simulating sending essay themes to: ${input.email}`);

    const { output } = await prompt(input);
    
    // Simulate a delay for sending email
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        message: `Pronto! O material foi enviado para ${input.email}. Verifique sua caixa de entrada (e a pasta de spam).`
    };
  }
);
