import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TrendingCollection from '@/components/TrendingCollection'
import TopCreators from '@/components/TopCreators'
import BrowseCategories from '@/components/BrowseCategories'
import MoreNFTs from '@/components/MoreNFTs'
import NewImage from '@/components/NewImage'
import HowItWorks from '@/components/HowItWorks'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <MoreNFTs/>
      <NewImage/>
      <HowItWorks/>
      <Subscribe/>
      <Footer/>
    </>  )
}
