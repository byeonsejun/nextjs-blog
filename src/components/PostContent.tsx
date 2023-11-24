import MarkDownViewer from '@/components/MarkDownViewer';
import { PostData } from '@/service/posts';
import { FaRegCalendar } from "react-icons/fa6";


export default function PostContent({post}: {post: PostData}) {
  return <section className='flex flex-col p-4'>
  <div className='flex items-center self-end'>      
    <FaRegCalendar />
    <p className='font-semibold ml-2'>{post.date.toString()}</p>
  </div>
  <h2 className='text-4xl font-bold'>{post.title}</h2>
  <p className='text-xl font-bold'>{post.description}</p>
  <div className='w-44 border-2 border-sky-600 mt-4 mb-8' />
  <MarkDownViewer content={post.content} />
</section>
}

