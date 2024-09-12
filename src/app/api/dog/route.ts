import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: unknown }) {
  // 设置 cookie
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  // 设置 header
  const headersList = headers();
  const referer = headersList.get('referer');
  console.log(referer);

  return new NextResponse('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token ?? ''}` },
  });
}
