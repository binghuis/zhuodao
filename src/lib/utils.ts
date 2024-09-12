import { clsx, type ClassValue } from 'clsx';
import { NextResponse } from 'next/server';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function middlewareChain(functions: Function[], index = 0): () => NextResponse {
  const current = functions[index];
  if (current) {
    const next = middlewareChain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
