import React from 'react'

const FeaturedProjectCard = (props) => {
  return (
    <div className="container">

      <div className='row'>

      <div className=''>
          {props.data.map((item)=>(
              <img className='rounded img-fluid w-25 m-2' src={item.image}></img>
          ))}
      </div>
      </div>
    </div>
  )
}
//Featured__img
export default FeaturedProjectCard