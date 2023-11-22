import { getBrandLogo } from '@/app/Api'
import React from 'react'

const Brands = async () => {
    const data = await getBrandLogo()
  return (
    <div className='container my-5'>
        <div className='row'>
        <h3 className='text-center py-5'>Trusted by brands all over the world</h3>
        {data.map((item, i)=>(
            <>
                <div key={i} className='col-10 col-md-4 m-auto text-center'>
                    <img className="mx-auto h-8" src={item['image']} alt=""/>
                </div>
            </>
        ))}
        </div>
    </div>
  )
}

export default Brands