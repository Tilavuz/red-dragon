import { useState } from 'react'
import './Contact.css'
import Loader from '../loader/Loader'

function Contact() {
  const [loader, setLoader] = useState(false)

  const [message, setMessage] = useState({
    name: '',
    number: '',
    email: '',
    text: ''
  })

  function handleChange(e) {
    const {name, value} = e.target
    
    setMessage(pref => {
      return {
        ...pref,
        [name]: value
      }
    })
  }

  const allMessage = `**Red Dragon** %0A %0A Full Name: ${message.name} %0A Phone Number: ${message.number} %0A Email: ${message.email} %0A Message: ${message.text}`

  async function sendMessage(e) {
    e.preventDefault()
    console.log(loader);
    setLoader(true)
    await fetch(`https://api.telegram.org/bot6358345393:AAGm2eRzhefHU7vWgZswC0La8XaISprGVJs/sendMessage?chat_id=5281539071&text=${allMessage}`)
    setLoader(false)

    setMessage({
      name: '',
      number: '',
      email: '',
      text: ''
    })

  }

  return (
    <section className='contact' id='contact'>
      <h2>Contact Us</h2>
      {
        !loader ? (
          <form onSubmit={sendMessage}>
            <input type="text" placeholder='Full Name' name='name' onChange={handleChange} value={message.name} required/>
            <div className="contact-input">
                <input type="text" placeholder='Phone Number'name='number' onChange={handleChange} value={message.number} required/>
                <input type="email" placeholder='Email' name='email' onChange={handleChange} value={message.email} required/>
            </div>
            <textarea cols="30" rows="10" placeholder='Enter a message' name='text' onChange={handleChange} value={message.text} required></textarea>
            <button className='btn' type='submit'>Submit</button>
          </form>
        ): (
          <Loader />
        )
      }
    </section>
  )
}

export default Contact