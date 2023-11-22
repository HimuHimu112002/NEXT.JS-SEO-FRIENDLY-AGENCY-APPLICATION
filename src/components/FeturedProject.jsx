import { getFeatured } from '@/app/Api'
import React from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'
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
            <div className='m-auto'>
                <FeaturedProjectCard data={data}/>
            </div>
        </div>
    </div>
  )
}

export default FeturedProject