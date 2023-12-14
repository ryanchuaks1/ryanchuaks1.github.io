import Image from 'next/image'
import Contact from './contact/page'

export default function Home() {
  return (
    <div className='p-20'>
      <div className="text-white dark:text-red-400">Hello World</div>
      <Contact />
    </div>
  )
}
