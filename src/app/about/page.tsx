import Profile from '@/components/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: '나에 대한 소개 페이지',
}

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutPage() {
  return <>
    <Profile />
    <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
      <h2 className={TITLE_CLASS}>Whoo Am I?</h2>
      <p>개발을 사랑하는 프론트 개발자<br/>
        사람과 웹을 잇는 웹을 만들고 있음
      </p>
      <h2 className={TITLE_CLASS}>Carrer</h2>
      <p>
        두왓 (-2023)<br/>
        핏프레임 (-2022)
      </p>
      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>React, NextJs<br/>
        Git, Clean COde<br/>
        VS Code
      </p>
    </section>
  </>
}

