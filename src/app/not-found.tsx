import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <Link href="/">Back</Link>
    </div>
  );
}
