import InfyAbout from '@/pages/home/components/InfyAbout'
import Networks from '@/pages/home/components/Networks'
import OurPartner from '@/pages/home/components/OurPartner'
import Plans from '@/pages/home/components/Plans'
import Slider from '@/pages/home/components/Slider'
import React from 'react'
import ProductSlider from './components/ProductSlider'

function Home() {
  return (
    <div>
        <Slider/>
        <Plans/>
        <Networks/>
        <InfyAbout/>
        <OurPartner/>

    </div>
  )
}

export default Home