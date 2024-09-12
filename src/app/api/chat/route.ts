import { getHttpStatus } from '@/constant/http-status';
import { azure } from '@ai-sdk/azure';
import { APICallError, streamText } from 'ai';
import { RateLimiter } from 'limiter';
import { NextResponse } from 'next/server';
// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';

const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'second',
  fireImmediately: true,
});

export async function POST(req: Request) {
  const { messages, model } = await req.json();
  try {
    const remainingRequests = await limiter.removeTokens(1);
    if (remainingRequests < 0) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: getHttpStatus('TooManyRequests').message,
        }),
        {
          status: getHttpStatus('TooManyRequests').code,
        },
      );
    }
    const response = await streamText({
      model: azure(model ?? 'gpt-3.5-turbo'),
      messages,
    });

    return response.toDataStreamResponse();
  } catch (error) {
    if (error instanceof APICallError) {
      const { statusCode, message } = error;
      return NextResponse.json({ status: statusCode, message });
    } else {
      throw error;
    }
  }
}
