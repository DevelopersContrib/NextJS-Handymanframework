import Image from 'next/image'
import HeaderForm from '@/components/home/HeaderForm'
import Navigation from '@/components/includes/Navigation';

export default function Home() {
  const background = 'https://cdn.vnoc.com/background/bg-handyman1.png';
  return (
    <>
      <Navigation />
      <HeaderForm background={background} />
    </>
  )
}
