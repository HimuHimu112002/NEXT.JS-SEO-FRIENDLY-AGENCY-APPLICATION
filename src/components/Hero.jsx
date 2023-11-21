import React from 'react'
import ContactForm from './ContactForm'

async function getHeroData(){
    const res = await fetch('https://agency.teamrabbil.com/api/HeroList')
    if(!res.ok){
        throw new Error("Hero List calling Fail")
    }
    return res.json()
}

const Hero = async () => {
  const data = await getHeroData()
  return (
    <div className='heroSection__bg__color'>
        <div className="container">
            <div className="row">
                <div className="col md='6'">
                    <div className='hero__left__content'>
                        <h1>{data.title}</h1>
                        <p className='hero__left__content--discription'>{data.description}</p>

                        <div>
                            <button type="button" className="btn hero__left__content--button1 px-4">Get Started</button>
                            <button type="button" className="btn hero__left__content--button2 px-4">How It Work</button>
                        </div>
                    </div>
                </div>
                <div className="col md='6'">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero