import { getFeatured } from '@/app/Api'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const FeturedProject = async () => {
    const data = await getFeatured()
  return (
    <div className='container my-5'>
        <div className='feature__top__section'>
            <div>
                <p className='feature__top__section--heading'>Dolor sit amet consectutar</p>
                <h2 className='feature__top__section--subHeading'>Featured Projects</h2>
            </div>
            <div>
                <Link href={"/project"}><Button title="view more project"/></Link>
            </div>
        </div>
        <div className='row'>
            {data.map((item,i)=>(
                <>
                    <div key={i} className='col-10 col-md-6 col-lg-4 m-auto'>
                        <img  className='rounded img-fluid m-2' src={item.image}></img>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default FeturedProject