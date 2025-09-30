
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendEssayThemes } from '@/ai/flows/send-essay-themes';

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
});

type NewsletterFormValues = z.infer<typeof formSchema>;

type NewsletterPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function NewsletterPopup({ open, onOpenChange }: NewsletterPopupProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: NewsletterFormValues) => {
    startTransition(async () => {
      try {
        const result = await sendEssayThemes({ email: values.email });
        toast({
          title: 'Sucesso!',
          description: result.message,
        });
        form.reset();
        onOpenChange(false);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Erro!',
          description:
            error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.',
        });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Aproveite Nosso Bônus!</DialogTitle>
          <DialogDescription>
            Receba 3 prováveis temas da redação e um manual para treinar.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu melhor e-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu.email@exemplo.com"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Receber material
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
