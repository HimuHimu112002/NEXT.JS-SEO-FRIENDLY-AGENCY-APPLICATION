import React from 'react'
import ContactForm from './ContactForm'
import Button from './Button'

const Contact = () => {
  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-10 col-md-6 col-lg-8 m-auto'>
                <img className="w-50" src="image/logo.png" alt=""/>
                <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
                    So much more than a business analytics tool
                </h2>
                <p className="mb-8 text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    efficitur nisl sodales egestas lobortis.
                </p>

                <Button title="Get Started"/>
            </div>
            <div className='col-10 col-md-6 col-lg-4 m-auto'>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact