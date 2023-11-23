import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg shadow-sm ">
            <div className="container">
                <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>

                <a className="navbar-brand" href="#">
                    <img src='image/logo.png' alt='' width='160px'/>
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
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
            </div>
        </nav>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"/>
    </>
  )
}

export default NavMenu