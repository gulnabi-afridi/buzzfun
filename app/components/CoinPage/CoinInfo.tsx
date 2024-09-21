import React from 'react'
import StatsHeader from './StatsHeader'
import SocialLinks from './SocialLinks'
import TaxMaxBuy from './TaxMaxBuy'
import ProjectDes from './ProjectDes'

const CoinInfo:React.FC = () => {
  return (
    <div className='w-full csm:h-auto h-[calc(100vh-270px)] overflow-auto flex gap-4 sm:gap-8 flex-col'>
        <StatsHeader/>
        <SocialLinks/>
        <TaxMaxBuy/>
        <ProjectDes/>
    </div>
  )
}

export default CoinInfo