import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer__bg'>
        <div className='container'>
            <div className='row'>
                <div className='col md="3"'>
                    <img className='w-25' src='image/logo.png'></img>
                    <p className='text-white'>Trusted by brands all over the world</p>
                </div>
                <div className='col-6 col-lg-4 m-auto'>
                    <ul className="footer__menu">
                        <li className="nav-item">
                            <Link href={'/'} className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/Team'} className="nav-link">
                                Team
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/services'} className="nav-link" >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/project'} className="nav-link">
                                Project
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/testimonial'} className="nav-link">
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col-6 col-lg-4'>
                    <h3 className='text-white'>Emergency contact</h3>
                    <p className='text-white'>Email : danishadavis0007@gmail.com</p>
                    <p className='text-white'>Phone : 0173354789</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer