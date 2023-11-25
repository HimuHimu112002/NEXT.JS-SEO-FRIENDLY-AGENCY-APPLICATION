"use client"
import React from 'react'
import {useState} from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const ContactForm = () => {
    let [FormValue,SetFormValue]=useState({firstName:"", lastName:"", email:"" })
  
    const inputOnChange = (name,value) => {
        SetFormValue(
            FormValue=>({
                ...FormValue,
                [name]:value
            })
        )
    }
    console.log(FormValue)

    const FormSubmit=async (e) => {
        toast.success("Form Submit Completed");
        e.preventDefault();
        if (FormValue.firstName.length === 0) {
            toast.error('First Name Required');
        } else if (FormValue.lastName.length === 0) {
            toast.error('Last Name Required');
        } else if (FormValue.email.length === 0) {
            toast.error('Email Required');
        }else {
            const rawResponse = await axios.post('/api/contact',FormValue);

        }
    }
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
                value={FormValue.firstName} onChange={(e)=>{inputOnChange('firstName',e.target.value)}}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                Last Name
                </label>
                <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter Your Last Name"
                value={FormValue.lastName} onChange={(e)=>{inputOnChange('lastName',e.target.value)}}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                Email address
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
                value={FormValue.email} onChange={(e)=>{inputOnChange('email',e.target.value)}}
                />
            </div>
            <button onClickCapture={FormSubmit} className='btn contact__form__button' type="button">Submit</button>
        </div>
        <Toaster position="top-center"/>
    </div>
  )
}

export default ContactForm