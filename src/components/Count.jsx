import React from 'react'
import {Api, getCount} from '../app/Api.js'

const Count = async () => {
    //const d = 'http://www.w3.org/2000/svg'

    const data = await getCount()
  return (
    <div className='container my-5'>
        <div className='row'>
            <div className="col-10 col-sm-6 col-md-3 m-auto shadow-sm px-3 text-center">
                <div>
                    <h3>{data.followers}</h3>
                    <p>Followers</p>
                </div>
            </div>
            <div className="col-10 col-sm-6 col-md-3 m-auto shadow-sm px-3 text-center">
                <div>
                    <h3>{data.solved}</h3>
                    <p>Solved Problems</p>
                </div>
            </div>
            <div className="col-10 col-sm-6 col-md-3 m-auto shadow-sm px-3 text-center">
                <div>
                    <h3>{data.customers}</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
            <div className="col-10 col-sm-6 col-md-3 m-auto shadow-sm px-3 text-center">
                <div>
                    <h3>{data.projects}</h3>
                    <p>Projects</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count