import React from 'react'
import { getWork } from '@/app/Api'

const BuildProblems = async () => {
    const data = await getWork()
  return (
    <div className='build__problems__bg'>
        <div className='container'>
            <div className="py-5 text-center build__problems__bg--content--main">
                <span className="build__problems__bg--heading">
                    Dolor sit amet consectutar
                </span>
                <h2 className="build__problems__bg--subHeading">
                    Build &amp; Launch without problems
                </h2>
            </div>
            <div className='row mt-3'>
                {data.map((item,i)=>(
                    <>
                        <div key={i} className='text-center col-10 col-sm-6 col-lg-4 m-auto'>
                            <h3>{item.title}</h3>
                            <p>{item.des}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BuildProblems