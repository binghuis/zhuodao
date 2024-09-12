import { middlewareChain } from '@/lib/utils';
import { withAuth } from '@/middlewares/with-auth';
import { withCORS } from '@/middlewares/with-cors';

export default middlewareChain([withCORS, withAuth]);

export const config = {
  matcher: '/api/:path*',
};
