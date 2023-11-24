import CarouselPosts from '@/components/CarouselPosts'
import FeaturedPosts from '@/components/FeaturedPosts'
import Profile from '@/components/Profile'

export default function HomePage() {
  return (
    <section>
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  )
}
