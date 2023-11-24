import Image from 'next/image';
import profileImg from './../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-center justify-center w-64 mb-5 mx-auto">
      <Image src={profileImg} alt='profile img' className="mb-3 rounded-full" priority/>
      <h2 className='text-lg font-bold'>Hi, Im Sejun</h2>
      <h3 className='text-base mb-1'>Front-End engineer</h3>
      <Link href="/contact" className="py-1 px-2 rounded-md bg-amber-400 font-bold">
        Contact me
      </Link>
      </section>
  )
}
