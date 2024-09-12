'use client';

import { Card, Input, Kbd } from '@nextui-org/react';
import { useChat } from 'ai/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <ul>
        {messages.map((m, index) => (
          <Card key={index} className="p-4">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </Card>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex items-start space-x-4">
        <Input
          placeholder="hi"
          value={input}
          onChange={handleInputChange}
          endContent={<Kbd keys={['enter']}></Kbd>}
        />
      </form>
    </div>
  );
}
