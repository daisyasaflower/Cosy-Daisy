import Head from 'next/head'
import TopNavigation from '../components/topNavigation'
import SocialMedia from '../components/SocialMedia'
import HeroSection from '../components/HeroSection'
import NewArival from '../components/NewArival'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigation/>

      <SocialMedia/>
    <HeroSection/>
      <Slider/>
      <NewArival/>  
  
    <ContactMe/>
    <Footer/>
    </>
  )
}