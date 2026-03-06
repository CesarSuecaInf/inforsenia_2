"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { aiChatbotAnswerQuestions } from '@/ai/flows/ai-chatbot-answer-questions';
import { WEBSITE_CONTENT_FOR_AI } from '@/lib/data';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: '¡Hola! Soy el asistente de INFORSENIA Fest. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await aiChatbotAnswerQuestions({
        question: userMessage,
        websiteContent: WEBSITE_CONTENT_FOR_AI
      });
      setMessages(prev => [...prev, { role: 'bot', content: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Lo siento, ha ocurrido un error al procesar tu pregunta.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-2xl bg-primary hover:bg-accent transition-all animate-bounce"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20 overflow-hidden animate-in slide-in-from-bottom-5">
          <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5" /> Asistente IA
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0 flex flex-col h-full bg-secondary/10">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm flex gap-2 ${
                      m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-muted text-foreground rounded-tl-none border'
                    }`}>
                      <div className="mt-1 shrink-0">
                        {m.role === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3 text-primary" />}
                      </div>
                      <p>{m.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-2 text-sm rounded-tl-none border animate-pulse">
                      Escribiendo...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t bg-background">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <Input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu duda..." 
                  className="bg-muted border-none"
                />
                <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-accent">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}