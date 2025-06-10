
// Troubleshooting tips flow
'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing troubleshooting tips for computer issues.
 *
 * - getTroubleshootingTips - A function that takes a description of a computer issue and returns troubleshooting tips.
 * - TroubleshootingTipsInput - The input type for the getTroubleshootingTips function.
 * - TroubleshootingTipsOutput - The return type for the getTroubleshootingTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TroubleshootingTipsInputSchema = z.object({
  issueDescription: z
    .string()
    .describe('A description of the computer issue the user is experiencing.'),
});
export type TroubleshootingTipsInput = z.infer<typeof TroubleshootingTipsInputSchema>;

const TroubleshootingTipsOutputSchema = z.object({
  troubleshootingTips: z
    .string()
    .describe('Troubleshooting tips to help the user resolve their computer issue.'),
});
export type TroubleshootingTipsOutput = z.infer<typeof TroubleshootingTipsOutputSchema>;

export async function getTroubleshootingTips(
  input: TroubleshootingTipsInput
): Promise<TroubleshootingTipsOutput> {
  return troubleshootingTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'troubleshootingTipsPrompt',
  input: {schema: TroubleshootingTipsInputSchema},
  output: {schema: TroubleshootingTipsOutputSchema},
  prompt: `You are an AI assistant designed to provide troubleshooting tips for computer issues.

  User Issue Description: {{{issueDescription}}}

  Provide a few clear and concise troubleshooting tips that the user can try to resolve their issue.`,
});

const troubleshootingTipsFlow = ai.defineFlow(
  {
    name: 'troubleshootingTipsFlow',
    inputSchema: TroubleshootingTipsInputSchema,
    outputSchema: TroubleshootingTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output || typeof output.troubleshootingTips !== 'string' || output.troubleshootingTips.trim() === '') {
      console.error('Genkit prompt did not return the expected output structure, type, or content for troubleshootingTips.');
      throw new Error('AI_RESPONSE_FORMAT_ERROR');
    }
    return output;
  }
);

