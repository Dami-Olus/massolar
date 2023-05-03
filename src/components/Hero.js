import Image from 'next/image'
import React from 'react'
import solarinstallation from '../../assets/images/solarhomeinstallation.png'
import frame1 from '../../assets/images/Frame 1.png'
import frame2 from '../../assets/images/Frame 2.png'

function Hero() {
  return (
    
    <div className='flex mt-10'>
     
      <div className='w-[800px] ml-32 mt-52'>
      <h4 className='text-black text-7xl font-extrabold z-20 mb-10'>
      Easiest, cheapest and fastest way to go Solar today
      </h4>
      <p className='text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nam autem deserunt velit facilis natus. Consequatur ipsam, ea autem dignissimos, totam dicta, earum qui magnam inventore aliquam asperiores minima animi.</p>
      <button className='mt-5 border-solid bg-green-500 py-5 px-40 rounded'><a href="/application">Go Solar</a></button>
      </div>
      <div className='relative'>
      <Image src={solarinstallation} alt="" className='right-5 top-32'/>
        <Image src={frame1} alt='' className='absolute top-0 right-20' />
        <Image src={frame2} alt='' className='absolute -bottom-32 right-2' />
        </div>
    </div>
  )
}

export default Hero