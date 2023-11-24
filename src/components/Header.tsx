import Link from 'next/link';

export default function Header() {
  return <header className='flex justify-between items-center px-4 pt-2 h-16 mb-4'>
  <h1 className='text-4xl font-bold'>
    <Link href="/">Sejun Blog</Link>
  </h1>
  <nav className='flex gap-4 text-base'>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    <Link href="/contact">Contact</Link>
  </nav>
</header>
}

