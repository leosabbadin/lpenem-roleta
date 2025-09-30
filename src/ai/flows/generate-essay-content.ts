'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating high-quality and relevant content,
 * such as philosophical quotes or historical insights, and intelligently incorporating it into essays.
 *
 * @exports generateEssayContent - An async function that generates essay content based on the input.
 * @exports GenerateEssayContentInput - The input type for the generateEssayContent function.
 * @exports GenerateEssayContentOutput - The output type for the generateEssayContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEssayContentInputSchema = z.object({
  topic: z.string().describe('The topic of the essay.'),
  writingStyle: z.string().describe('The writing style of the essay.'),
  keywords: z.string().describe('Relevant keywords for the essay.'),
  previousContent: z.string().describe('The previous content written in the essay.'),
});

export type GenerateEssayContentInput = z.infer<typeof GenerateEssayContentInputSchema>;

const GenerateEssayContentOutputSchema = z.object({
  enhancedContent: z.string().describe('The generated content, including philosophical quotes or historical insights.'),
});

export type GenerateEssayContentOutput = z.infer<typeof GenerateEssayContentOutputSchema>;

export async function generateEssayContent(input: GenerateEssayContentInput): Promise<GenerateEssayContentOutput> {
  return generateEssayContentFlow(input);
}

const generateEssayContentPrompt = ai.definePrompt({
  name: 'generateEssayContentPrompt',
  input: {schema: GenerateEssayContentInputSchema},
  output: {schema: GenerateEssayContentOutputSchema},
  prompt: `You are an AI assistant specialized in generating content for essays.

  Given the topic, writing style, keywords, and previous content of the essay, generate high-quality and relevant content, such as philosophical quotes or historical insights, and intelligently incorporate it into the essay.
  The goal is to enhance the depth and sophistication of the essay. 

  Topic: {{{topic}}}
  Writing Style: {{{writingStyle}}}
  Keywords: {{{keywords}}}
  Previous Content: {{{previousContent}}}

  Enhanced Content:`,
});

const generateEssayContentFlow = ai.defineFlow(
  {
    name: 'generateEssayContentFlow',
    inputSchema: GenerateEssayContentInputSchema,
    outputSchema: GenerateEssayContentOutputSchema,
  },
  async input => {
    const {output} = await generateEssayContentPrompt(input);
    return output!;
  }
);
