import React from 'react'

const ContactForm = () => {
  return (
    <div >
        <div className='contact__main__section rounded shadow'>
            <h4>Contact With Us</h4>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name
                </label>
                <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your First Name"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
                </label>
                <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Last Name"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                />
            </div>
            <button className='btn contact__form__button' type="button">Submit</button>
        </div>
    </div>
  )
}

export default ContactForm