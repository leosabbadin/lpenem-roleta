'use server';

/**
 * @fileOverview A personalized essay feedback AI agent.
 *
 * - personalizedEssayFeedback - A function that handles the essay feedback process.
 * - PersonalizedEssayFeedbackInput - The input type for the personalizedEssayFeedback function.
 * - PersonalizedEssayFeedbackOutput - The return type for the personalizedEssayFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedEssayFeedbackInputSchema = z.object({
  essay: z.string().describe('The essay to provide feedback on.'),
  studentWritingStyle: z
    .string()
    .optional()
    .describe(
      'A description of the student writing style, used to personalize the feedback.'
    ),
  instructions: z
    .string()
    .optional()
    .describe('Any specific instructions for the essay.'),
});
export type PersonalizedEssayFeedbackInput = z.infer<
  typeof PersonalizedEssayFeedbackInputSchema
>;

const PersonalizedEssayFeedbackOutputSchema = z.object({
  feedback: z.string().describe('The personalized feedback on the essay.'),
});
export type PersonalizedEssayFeedbackOutput = z.infer<
  typeof PersonalizedEssayFeedbackOutputSchema
>;

export async function personalizedEssayFeedback(
  input: PersonalizedEssayFeedbackInput
): Promise<PersonalizedEssayFeedbackOutput> {
  return personalizedEssayFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedEssayFeedbackPrompt',
  input: {schema: PersonalizedEssayFeedbackInputSchema},
  output: {schema: PersonalizedEssayFeedbackOutputSchema},
  prompt: `You are an AI assistant that provides personalized feedback on student essays. Your goal is to provide actionable feedback that helps the student improve their writing skills.

  Here are some guidelines to help you craft helpful and personalized feedback:
  - **Understand the Essay**: Before providing feedback, make sure you have a clear understanding of the essay's content, arguments, and structure.
  - **Identify Strengths and Weaknesses**: Point out both the strengths and weaknesses of the essay.
  - **Personalize the Feedback**: Use studentWritingStyle to customize the feedback to the student's writing style. Make the student feel like the feedback is tailored to them specifically.
  - **Provide Specific Examples**: Whenever possible, provide specific examples from the essay to illustrate your points.
  - **Suggest Improvements**: Offer concrete suggestions for how the student can improve their essay.
  - **Be Encouraging**: Provide positive feedback and encouragement to help the student stay motivated.
  - **Consider Instructions**: If the student provided specific instructions, take those into account when providing feedback.

  Here is the essay to provide feedback on:
  {{essay}}

  Here is a description of the student's writing style, if available:
  {{#if studentWritingStyle}}
  {{studentWritingStyle}}
  {{else}}
  The student has not provided a description of their writing style.
  {{/if}}

  Here are specific instructions from the student, if available:
  {{#if instructions}}
  {{instructions}}
  {{else}}
  The student has not provided any specific instructions.
  {{/if}}

  Please provide detailed, personalized feedback on the essay.
  Do not format your response as a list, but instead as a cohesive paragraph.
`,
});

const personalizedEssayFeedbackFlow = ai.defineFlow(
  {
    name: 'personalizedEssayFeedbackFlow',
    inputSchema: PersonalizedEssayFeedbackInputSchema,
    outputSchema: PersonalizedEssayFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
