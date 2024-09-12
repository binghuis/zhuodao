import { getHttpStatus } from '@/constant/http-status';
import { isAuthenticated } from '@/lib/auth';
import { NextResponse, type NextRequest } from 'next/server';

export const withAuth = (next: Function) => {
  return async (request: NextRequest) => {
    if (!isAuthenticated(request)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: getHttpStatus('Unauthorized').message,
        }),
        {
          status: getHttpStatus('Unauthorized').code,
          headers: { 'content-type': 'application/json' },
        },
      );
    }
    return next(request);
  };
};
