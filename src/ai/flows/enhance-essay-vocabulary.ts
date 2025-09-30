'use server';

/**
 * @fileOverview An AI agent that suggests sophisticated connectors and linguistic variations to improve the flow and sophistication of essay writing.
 *
 * - enhanceEssayVocabulary - A function that enhances the vocabulary of an essay.
 * - EnhanceEssayVocabularyInput - The input type for the enhanceEssayVocabulary function.
 * - EnhanceEssayVocabularyOutput - The return type for the enhanceEssayVocabulary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceEssayVocabularyInputSchema = z.object({
  essayText: z.string().describe('The text of the essay to enhance.'),
});
export type EnhanceEssayVocabularyInput = z.infer<typeof EnhanceEssayVocabularyInputSchema>;

const EnhanceEssayVocabularyOutputSchema = z.object({
  enhancedEssayText: z.string().describe('The essay text with enhanced vocabulary and connectors.'),
});
export type EnhanceEssayVocabularyOutput = z.infer<typeof EnhanceEssayVocabularyOutputSchema>;

export async function enhanceEssayVocabulary(input: EnhanceEssayVocabularyInput): Promise<EnhanceEssayVocabularyOutput> {
  return enhanceEssayVocabularyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceEssayVocabularyPrompt',
  input: {schema: EnhanceEssayVocabularyInputSchema},
  output: {schema: EnhanceEssayVocabularyOutputSchema},
  prompt: `You are an AI assistant that helps students improve their essay writing by suggesting sophisticated connectors and linguistic variations.

  Given the following essay text, please provide an enhanced version with improved vocabulary and connectors to enhance the flow and sophistication of the writing.

  Essay Text: {{{essayText}}}

  Enhanced Essay Text:`,
});

const enhanceEssayVocabularyFlow = ai.defineFlow(
  {
    name: 'enhanceEssayVocabularyFlow',
    inputSchema: EnhanceEssayVocabularyInputSchema,
    outputSchema: EnhanceEssayVocabularyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
