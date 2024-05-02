import React from 'react'
import './ContactStyle.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contact</span></h1>
                    <div>
                        <labe>Name</labe>
                        <input type="text" placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea placeholder='Enter Your Message' rows="10"></textarea>
                    </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
