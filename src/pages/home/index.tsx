import InfyAbout from '@/components/layouts/InfyAbout'
import Networks from '@/components/layouts/Networks'
import OurPartner from '@/components/layouts/OurPartner'
import Plans from '@/components/layouts/Plans'
import Slider from '@/components/layouts/Slider'
import React from 'react'

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