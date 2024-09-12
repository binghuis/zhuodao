import photos from '@/constant/photos';
import '@/styles/globals.css';
import { Metadata } from 'next';
import Link from 'next/link';
import { Providers } from './providers';
import StyledJsxRegistry from './registry';
// import type { Route } from 'next';

export const metadata: Metadata = {
  title: 'Tmpl Nextjs',
  description: 'Nextjs 项目模板',
  keywords: ['nextjs'],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
  modal: React.ReactNode;
}) {
  const { children, auth, modal } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <StyledJsxRegistry>
            <div>
              <Link href="/login">To @Auth/Login</Link>
            </div>
            <div>
              <Link href="/settings">To @Children/Settings</Link>
            </div>

            <div>
              <Link href="/">Back To Home</Link>
            </div>
            <div className="text-green-600">
              {auth}
              {children}
              {modal}
            </div>
            {photos.map(({ id, imageSrc }) => (
              <Link className="block" key={id} href={`/photos/${id}`}>
                {imageSrc}
              </Link>
            ))}
          </StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
