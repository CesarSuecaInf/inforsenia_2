'use server';
/**
 * @fileOverview An AI assistant flow for INFORSENIA Fest.
 *
 * - aiChatbotAnswerQuestions - A function that handles answering questions about the event.
 * - AIChatbotAnswerQuestionsInput - The input type for the aiChatbotAnswerQuestions function.
 * - AIChatbotAnswerQuestionsOutput - The return type for the aiChatbotAnswerQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotAnswerQuestionsInputSchema = z.object({
  question: z.string().describe('The question asked by the attendee.'),
  websiteContent: z
    .string()
    .describe(
      'Comprehensive content from the event website, including schedule, speaker details, and logistics.'
    ),
});
export type AIChatbotAnswerQuestionsInput = z.infer<
  typeof AIChatbotAnswerQuestionsInputSchema
>;

const AIChatbotAnswerQuestionsOutputSchema = z.object({
  answer: z.string().describe('The AI assistant\u0027s answer to the question.'),
});
export type AIChatbotAnswerQuestionsOutput = z.infer<
  typeof AIChatbotAnswerQuestionsOutputSchema
>;

export async function aiChatbotAnswerQuestions(
  input: AIChatbotAnswerQuestionsInput
): Promise<AIChatbotAnswerQuestionsOutput> {
  return aiChatbotAnswerQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAnswerQuestionsPrompt',
  input: {schema: AIChatbotAnswerQuestionsInputSchema},
  output: {schema: AIChatbotAnswerQuestionsOutputSchema},
  prompt: `You are a helpful AI assistant for the INFORSENIA Fest event.
Your role is to answer questions from attendees about the event schedule, speakers, and general logistics.

***IMPORTANT***: Only use the provided website content to formulate your answers. Do not invent information.
If you cannot find the answer in the provided content, state that you don't have enough information.

Event Dates: May 13-14
Day 1: Conferences/Presentations
Day 2: Workshops
Location: IES La Sénia, Paiporta, Valencia

Website Content:
{{{websiteContent}}}

User's Question: {{{question}}}`,
});

const aiChatbotAnswerQuestionsFlow = ai.defineFlow(
  {
    name: 'aiChatbotAnswerQuestionsFlow',
    inputSchema: AIChatbotAnswerQuestionsInputSchema,
    outputSchema: AIChatbotAnswerQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
