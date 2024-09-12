import { NextResponse, type NextRequest } from 'next/server';

const allowedOrigins = ['https://acme.com', 'https://my-app.org'];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const withCORS = (next: Function) => {
  return async (request: NextRequest) => {
    // Check the origin from the request
    const origin = request.headers.get('origin') ?? '';
    const isAllowedOrigin = allowedOrigins.includes(origin);

    // Handle preflighted requests
    const isPreflight = request.method === 'OPTIONS';

    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }

    const response = next(request);

    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers?.set(key, value);
    });

    return response;
  };
};
